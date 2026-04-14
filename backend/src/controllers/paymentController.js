const Payment = require("../models/Payment");
const User = require("../models/User");
const Coupon = require("../models/Coupon");
const Referral = require("../models/Referral");
const { isValidCourseId } = require("../config/courses");
const { getPricing, calculatePriceWithReferral } = require("../config/pricing");
const { Cashfree } = require("cashfree-pg");

// Cashfree v5.x configuration
const cashfree = new Cashfree({
  env: process.env.CASHFREE_ENV === "PRODUCTION" ? "PRODUCTION" : "SANDBOX",
  apiVersion: "2023-08-01",
});

// Referral reward amount
const REFERRAL_REWARD_AMOUNT = 150; // ₹150

/**
 * Calculate pricing with course-specific pricing, coupon, and referral discounts
 */
const calculatePricing = async (courseId, couponCode, referralCode, userId) => {
  // Get course-specific pricing
  const pricing = getPricing(courseId);
  let originalAmount = pricing.strikePrice; // Show as higher original price
  let coursePrice = pricing.price; // Actual course price
  let discountAmount = 0;
  let finalAmount = coursePrice;
  let appliedCoupon = null;
  let appliedReferral = null;
  let referralDiscount = 0;

  // Apply referral discount first (20% off) if valid code provided
  if (referralCode) {
    const referrer = await User.findOne({ 
      referralCode: referralCode.toUpperCase() 
    });
    
    // Check if valid referrer and not self-referral
    if (referrer && referrer._id.toString() !== userId.toString()) {
      referralDiscount = Math.round(coursePrice * 0.20); // 20% discount
      finalAmount = coursePrice - referralDiscount;
      appliedReferral = {
        code: referralCode.toUpperCase(),
        referrerId: referrer._id,
        discountPercent: 20,
        discountAmount: referralDiscount,
      };
    }
  }

  // Apply coupon discount on top of referral price
  if (couponCode) {
    const coupon = await Coupon.findOne({ code: couponCode.toUpperCase() });

    if (
      coupon &&
      coupon.isActive &&
      (!coupon.expiresAt || new Date() <= coupon.expiresAt) &&
      (coupon.usageLimit === 0 || coupon.usedCount < coupon.usageLimit)
    ) {
      let couponDiscount = 0;
      if (coupon.discountType === "flat") {
        couponDiscount = coupon.discountValue;
      } else if (coupon.discountType === "percentage") {
        couponDiscount = Math.round((finalAmount * coupon.discountValue) / 100);
        if (coupon.maxDiscount > 0) {
          couponDiscount = Math.min(couponDiscount, coupon.maxDiscount);
        }
      }

      finalAmount = Math.max(finalAmount - couponDiscount, 0);
      discountAmount = referralDiscount + couponDiscount;
      appliedCoupon = coupon;
    } else {
      discountAmount = referralDiscount;
    }
  } else {
    discountAmount = referralDiscount;
  }

  return {
    originalAmount,
    coursePrice,
    discountAmount,
    finalAmount,
    appliedCoupon,
    appliedReferral,
    referralDiscount,
    courseName: pricing.name,
  };
};

const createOrder = async (req, res) => {
  try {
    const { couponCode, courseId, referralCode } = req.body;

    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (!courseId || !isValidCourseId(courseId)) {
      return res.status(400).json({
        success: false,
        message: "Choose one of the six program tracks before paying.",
      });
    }

    // Calculate pricing with referral and coupon discounts
    const { 
      originalAmount, 
      coursePrice,
      discountAmount, 
      finalAmount, 
      appliedCoupon, 
      appliedReferral,
      referralDiscount,
      courseName 
    } = await calculatePricing(courseId, couponCode, referralCode, user._id);

    const orderId = `order_${Date.now()}`;

    // Ensure minimum order amount is ₹10 (Cashfree requirement)
    const MIN_ORDER_AMOUNT = 10;
    if (finalAmount < MIN_ORDER_AMOUNT) {
      return res.status(400).json({
        success: false,
        message: `Order amount too low. Minimum amount is ₹${MIN_ORDER_AMOUNT}. Please use a smaller discount coupon.`,
      });
    }

    const request = {
      order_amount: parseFloat(finalAmount.toFixed(2)),
      order_currency: "INR",
      order_id: orderId,
      customer_details: {
        customer_id: user._id.toString(),
        customer_name: user.fullName,
        customer_email: user.email,
        customer_phone: user.phone || "9999999999",
      },
      order_meta: {
        return_url: `${process.env.FRONTEND_URL}/dashboard?order_id={order_id}`,
      },
    };

    // Create order using Cashfree v5.x API
    cashfree.setAppId(process.env.CASHFREE_APP_ID);
    cashfree.setSecretKey(process.env.CASHFREE_SECRET_KEY);
    
    const cashfreeResponse = await cashfree.PGCreateOrder(request);

    // Create payment record with referral info
    const payment = await Payment.create({
      userId: user._id,
      orderId,
      gatewayOrderId: cashfreeResponse.data.cf_order_id,
      originalAmount,
      coursePrice,
      finalAmount,
      discountAmount,
      couponCode: appliedCoupon ? appliedCoupon.code : "",
      referralCode: appliedReferral ? appliedReferral.code : "",
      referralDiscount,
      courseId,
      courseName,
      paymentStatus: "pending",
    });

    // If referral code was used, update user's referral info and create referral record
    if (appliedReferral) {
      // Update user with referral info
      if (!user.referredBy) {
        user.referredBy = appliedReferral.referrerId;
        user.usedReferralCode = appliedReferral.code;
        await user.save();
      }

      // Create or update referral tracking record
      await Referral.findOneAndUpdate(
        { referredId: user._id },
        {
          referrerId: appliedReferral.referrerId,
          referredId: user._id,
          referralCode: appliedReferral.code,
          status: "signed_up",
          orderId: orderId,
          discountAmount: appliedReferral.discountAmount,
        },
        { upsert: true, new: true }
      );
    }

    const cashfreeMode =
      process.env.CASHFREE_ENV === "PRODUCTION" ? "production" : "sandbox";

    res.json({
      success: true,
      message: "Payment order created successfully",
      paymentSessionId: cashfreeResponse.data.payment_session_id,
      orderId,
      cashfreeMode,
    });
  } catch (error) {
    console.error("Create Order Error:", error.response?.data || error.message);

    res.status(500).json({
      success: false,
      message: "Failed to create payment order",
      error: error.response?.data || error.message,
    });
  }
};

const verifyPayment = async (req, res) => {
  try {
    const { orderId } = req.body;

    const payment = await Payment.findOne({ orderId });

    if (!payment) {
      return res.status(404).json({
        success: false,
        message: "Payment not found",
      });
    }

    cashfree.setAppId(process.env.CASHFREE_APP_ID);
    cashfree.setSecretKey(process.env.CASHFREE_SECRET_KEY);
    
    const cashfreeResponse = await cashfree.PGFetchOrder(orderId);
    const orderData = cashfreeResponse.data;

    if (orderData.order_status === "PAID") {
      if (payment.paymentStatus !== "success") {
        payment.paymentStatus = "success";
        payment.paidAt = new Date();
        await payment.save();

        await User.findByIdAndUpdate(payment.userId, {
          paymentStatus: "paid",
          enrolledCourseId: payment.courseId || "",
        });

        if (payment.couponCode) {
          await Coupon.findOneAndUpdate(
            { code: payment.couponCode },
            { $inc: { usedCount: 1 } }
          );
        }

        // Process referral reward if referral code was used
        if (payment.referralCode && payment.referralDiscount > 0) {
          await processReferralReward(payment.userId, payment._id, payment.orderId);
        }
      }

      return res.json({
        success: true,
        message: "Payment verified successfully",
        paymentStatus: "success",
      });
    }

    if (orderData.order_status === "ACTIVE") {
      return res.json({
        success: true,
        message: "Payment is still pending",
        paymentStatus: "pending",
      });
    }

    payment.paymentStatus = "failed";
    await payment.save();

    return res.json({
      success: false,
      message: "Payment failed",
      paymentStatus: "failed",
    });
  } catch (error) {
    console.error("Verify Payment Error:", error.response?.data || error.message);

    res.status(500).json({
      success: false,
      message: "Failed to verify payment",
      error: error.response?.data || error.message,
    });
  }
};

const getPaymentStatus = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const latestPayment = await Payment.findOne({ userId: user._id }).sort({
      createdAt: -1,
    });

    res.json({
      success: true,
      paymentStatus: user.paymentStatus,
      latestPayment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch payment status",
      error: error.message,
    });
  }
};

const cashfreeWebhook = async (req, res) => {
  try {
    const data = req.body;

    const orderId = data?.data?.order?.order_id;
    const orderStatus = data?.data?.order?.order_status;

    if (!orderId) {
      return res.status(400).json({
        success: false,
        message: "Order ID missing in webhook",
      });
    }

    const payment = await Payment.findOne({ orderId });

    if (!payment) {
      return res.status(404).json({
        success: false,
        message: "Payment not found",
      });
    }

    if (orderStatus === "PAID" && payment.paymentStatus !== "success") {
      payment.paymentStatus = "success";
      payment.paidAt = new Date();
      await payment.save();

      await User.findByIdAndUpdate(payment.userId, {
        paymentStatus: "paid",
        enrolledCourseId: payment.courseId || "",
      });

      if (payment.couponCode) {
        await Coupon.findOneAndUpdate(
          { code: payment.couponCode },
          { $inc: { usedCount: 1 } }
        );
      }

      // Process referral reward if referral code was used
      if (payment.referralCode && payment.referralDiscount > 0) {
        await processReferralReward(payment.userId, payment._id, payment.orderId);
      }
    }

    return res.status(200).json({
      success: true,
      message: "Webhook received",
    });
  } catch (error) {
    console.error("Webhook Error:", error.message);
    return res.status(500).json({
      success: false,
      message: "Webhook processing failed",
    });
  }
};

/**
 * Process referral reward after successful payment
 */
const processReferralReward = async (userId, paymentId, orderId) => {
  try {
    const user = await User.findById(userId);
    if (!user || !user.referredBy) {
      return { success: false, message: "No referrer found" };
    }

    // Check if reward already given
    const existingReferral = await Referral.findOne({
      referredId: userId,
      status: "rewarded",
    });

    if (existingReferral) {
      return { success: false, message: "Reward already given" };
    }

    // Update or create referral record
    const referral = await Referral.findOneAndUpdate(
      { referredId: userId },
      {
        status: "rewarded",
        paymentId,
        orderId,
        rewardAmount: REFERRAL_REWARD_AMOUNT,
        rewardGiven: true,
        rewardGivenAt: new Date(),
      },
      { upsert: true, new: true }
    );

    // Update referrer's wallet
    const referrer = await User.findById(user.referredBy);
    if (referrer) {
      referrer.walletBalance += REFERRAL_REWARD_AMOUNT;
      referrer.totalEarnings += REFERRAL_REWARD_AMOUNT;
      referrer.referralCount += 1;
      await referrer.save();
      console.log(`Referral reward of ₹${REFERRAL_REWARD_AMOUNT} added to ${referrer.email}`);
    }

    return { success: true, referral };
  } catch (error) {
    console.error("Referral reward error:", error);
    return { success: false, message: error.message };
  }
};

module.exports = {
  createOrder,
  verifyPayment,
  getPaymentStatus,
  cashfreeWebhook,
  processReferralReward,
};