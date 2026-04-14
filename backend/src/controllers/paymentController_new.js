const Payment = require("../models/Payment");
const User = require("../models/User");
const Coupon = require("../models/Coupon");
const Referral = require("../models/Referral");
const { isValidCourseId } = require("../config/courses");
const { getPricing } = require("../config/pricing");

// Referral reward amount
const REFERRAL_REWARD_AMOUNT = 150;

// Cashfree API wrapper using native fetch
const cashfreeAPI = async (endpoint, method, body = null) => {
  const env = process.env.CASHFREE_ENV === "PRODUCTION" ? "production" : "sandbox";
  const baseUrl = env === "production" 
    ? "https://api.cashfree.com/pg" 
    : "https://sandbox.cashfree.com/pg";
  
  const headers = {
    "Content-Type": "application/json",
    "x-api-version": "2023-08-01",
    "x-client-id": process.env.CASHFREE_APP_ID,
    "x-client-secret": process.env.CASHFREE_SECRET_KEY,
  };

  const options = { method, headers };
  if (body) options.body = JSON.stringify(body);

  const response = await fetch(`${baseUrl}${endpoint}`, options);
  const data = await response.json();
  
  if (!response.ok) throw new Error(JSON.stringify(data));
  return data;
};

// Calculate pricing with discounts
const calculatePricing = async (courseId, couponCode, referralCode, userId) => {
  const pricing = getPricing(courseId);
  let originalAmount = pricing.strikePrice;
  let coursePrice = pricing.price;
  let discountAmount = 0;
  let finalAmount = coursePrice;
  let appliedCoupon = null;
  let appliedReferral = null;
  let referralDiscount = 0;
  let couponDiscount = 0;
  let message = "";

  // Apply referral discount (20% off)
  if (referralCode) {
    const referrer = await User.findOne({ referralCode: referralCode.toUpperCase() });
    if (referrer && referrer._id.toString() !== userId.toString()) {
      referralDiscount = Math.round(coursePrice * 0.20);
      finalAmount = coursePrice - referralDiscount;
      appliedReferral = {
        code: referralCode.toUpperCase(),
        referrerId: referrer._id,
        discountPercent: 20,
        discountAmount: referralDiscount,
      };
    }
  }

  // Apply coupon discount
  if (couponCode) {
    const coupon = await Coupon.findOne({ code: couponCode.toUpperCase() });

    if (coupon && coupon.isActive && 
        (!coupon.expiresAt || new Date() <= coupon.expiresAt) &&
        (coupon.usageLimit === 0 || coupon.usedCount < coupon.usageLimit)) {
      
      // Check minimum order value
      if (coupon.minOrderValue > 0 && coursePrice < coupon.minOrderValue) {
        message = `Coupon requires minimum order value of ₹${coupon.minOrderValue}`;
      } else {
        if (coupon.discountType === "flat") {
          couponDiscount = coupon.discountValue;
        } else if (coupon.discountType === "percentage") {
          couponDiscount = Math.round((finalAmount * coupon.discountValue) / 100);
          if (coupon.maxDiscount > 0) {
            couponDiscount = Math.min(couponDiscount, coupon.maxDiscount);
          }
        }

        finalAmount = Math.max(finalAmount - couponDiscount, 1);
        discountAmount = referralDiscount + couponDiscount;
        appliedCoupon = coupon;
        message = "Coupon applied successfully!";
      }
    } else {
      discountAmount = referralDiscount;
      message = "Invalid or expired coupon";
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
    couponDiscount,
    courseName: pricing.name,
    message,
  };
};

// Get pricing for a course API
const getCoursePricing = async (req, res) => {
  try {
    const { courseId, couponCode, referralCode } = req.query;
    
    if (!courseId || !isValidCourseId(courseId)) {
      return res.status(400).json({ success: false, message: "Invalid course" });
    }

    const pricing = await calculatePricing(courseId, couponCode, referralCode, req.user._id);
    
    res.json({
      success: true,
      ...pricing,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Create payment order
const createOrder = async (req, res) => {
  try {
    const { couponCode, courseId, referralCode } = req.body;

    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    if (!courseId || !isValidCourseId(courseId)) {
      return res.status(400).json({
        success: false,
        message: "Choose one of the six program tracks before paying.",
      });
    }

    const { 
      originalAmount, 
      coursePrice,
      discountAmount, 
      finalAmount, 
      appliedCoupon, 
      appliedReferral,
      referralDiscount,
      courseName,
      message 
    } = await calculatePricing(courseId, couponCode, referralCode, user._id);

    // Check if coupon has minimum order value requirement
    if (appliedCoupon && appliedCoupon.minOrderValue > 0 && coursePrice < appliedCoupon.minOrderValue) {
      return res.status(400).json({
        success: false,
        message: `This coupon requires minimum order value of ₹${appliedCoupon.minOrderValue}. Current course price is ₹${coursePrice}.`,
      });
    }

    const orderId = `order_${Date.now()}`;

    if (finalAmount < 1) {
      return res.status(400).json({
        success: false,
        message: "Order amount too low. Minimum amount is ₹1.",
      });
    }

    const request = {
      order_amount: finalAmount,
      order_currency: "INR",
      order_id: orderId,
      customer_details: {
        customer_id: user._id.toString(),
        customer_name: user.fullName || "Customer",
        customer_email: user.email,
        customer_phone: user.phone || "9999999999",
      },
      order_meta: {
        return_url: `${process.env.FRONTEND_URL || "https://learnmythos.app"}/dashboard?order_id={order_id}`,
      },
    };

    const cashfreeData = await cashfreeAPI("/orders", "POST", request);

    const payment = await Payment.create({
      userId: user._id,
      orderId,
      gatewayOrderId: cashfreeData.cf_order_id,
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

    if (appliedReferral) {
      if (!user.referredBy) {
        user.referredBy = appliedReferral.referrerId;
        user.usedReferralCode = appliedReferral.code;
        await user.save();
      }

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

    const cashfreeMode = process.env.CASHFREE_ENV === "PRODUCTION" ? "production" : "sandbox";

    res.json({
      success: true,
      message: "Payment order created successfully",
      paymentSessionId: cashfreeData.payment_session_id,
      orderId,
      cashfreeMode,
      pricing: {
        originalAmount,
        coursePrice,
        discountAmount,
        finalAmount,
      },
    });
  } catch (error) {
    console.error("Create Order Error:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to create payment order",
      error: error.message,
    });
  }
};

// Verify payment
const verifyPayment = async (req, res) => {
  try {
    const { orderId } = req.body;

    const payment = await Payment.findOne({ orderId });
    if (!payment) {
      return res.status(404).json({ success: false, message: "Payment not found" });
    }

    const orderData = await cashfreeAPI(`/orders/${orderId}`, "GET");

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
    console.error("Verify Payment Error:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to verify payment",
      error: error.message,
    });
  }
};

// Get payment status
const getPaymentStatus = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const latestPayment = await Payment.findOne({ userId: user._id }).sort({ createdAt: -1 });

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

// Cashfree webhook
const cashfreeWebhook = async (req, res) => {
  try {
    const data = req.body;
    const orderId = data?.data?.order?.order_id;
    const orderStatus = data?.data?.order?.order_status;

    if (!orderId) {
      return res.status(400).json({ success: false, message: "Order ID missing" });
    }

    const payment = await Payment.findOne({ orderId });
    if (!payment) {
      return res.status(404).json({ success: false, message: "Payment not found" });
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

      if (payment.referralCode && payment.referralDiscount > 0) {
        await processReferralReward(payment.userId, payment._id, payment.orderId);
      }
    }

    return res.status(200).json({ success: true, message: "Webhook received" });
  } catch (error) {
    console.error("Webhook Error:", error.message);
    return res.status(500).json({ success: false, message: "Webhook failed" });
  }
};

// Process referral reward
const processReferralReward = async (userId, paymentId, orderId) => {
  try {
    const user = await User.findById(userId);
    if (!user || !user.referredBy) {
      return { success: false, message: "No referrer found" };
    }

    const existingReferral = await Referral.findOne({
      referredId: userId,
      status: "rewarded",
    });

    if (existingReferral) {
      return { success: false, message: "Reward already given" };
    }

    await Referral.findOneAndUpdate(
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

    const referrer = await User.findById(user.referredBy);
    if (referrer) {
      referrer.walletBalance += REFERRAL_REWARD_AMOUNT;
      referrer.totalEarnings += REFERRAL_REWARD_AMOUNT;
      referrer.referralCount += 1;
      await referrer.save();
    }

    return { success: true };
  } catch (error) {
    console.error("Referral reward error:", error);
    return { success: false, message: error.message };
  }
};

module.exports = {
  getCoursePricing,
  createOrder,
  verifyPayment,
  getPaymentStatus,
  cashfreeWebhook,
  processReferralReward,
};
