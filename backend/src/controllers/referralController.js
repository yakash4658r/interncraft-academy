const User = require("../models/User");
const Referral = require("../models/Referral");
const { getPricing } = require("../config/pricing");

// Default referral reward amount
const REFERRAL_REWARD_AMOUNT = 150; // ₹150

/**
 * Validate referral code and check if it can be used
 */
const validateReferralCode = async (req, res) => {
  try {
    const { code } = req.query;
    
    if (!code) {
      return res.status(400).json({
        success: false,
        message: "Referral code is required",
      });
    }
    
    const referrer = await User.findOne({ 
      referralCode: code.toUpperCase(),
    });
    
    if (!referrer) {
      return res.status(404).json({
        success: false,
        message: "Invalid referral code",
      });
    }
    
    // Check if current user is trying to use their own code
    if (req.user && req.user._id.toString() === referrer._id.toString()) {
      return res.status(400).json({
        success: false,
        message: "You cannot use your own referral code",
      });
    }
    
    // Check if user has already used a referral code
    if (req.user && req.user.usedReferralCode) {
      return res.status(400).json({
        success: false,
        message: "You have already used a referral code",
      });
    }
    
    return res.json({
      success: true,
      referrer: {
        name: referrer.fullName,
        code: referrer.referralCode,
      },
      discount: {
        percent: 20,
        message: "Get 20% off on your purchase!",
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * Apply referral code during signup/purchase
 */
const applyReferralCode = async (req, res) => {
  try {
    const { code } = req.body;
    const userId = req.user._id;
    
    if (!code) {
      return res.status(400).json({
        success: false,
        message: "Referral code is required",
      });
    }
    
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    
    // Check if user already used a referral code
    if (user.usedReferralCode) {
      return res.status(400).json({
        success: false,
        message: "You have already used a referral code",
      });
    }
    
    // Find referrer
    const referrer = await User.findOne({ 
      referralCode: code.toUpperCase(),
    });
    
    if (!referrer) {
      return res.status(404).json({
        success: false,
        message: "Invalid referral code",
      });
    }
    
    // Prevent self-referral
    if (userId.toString() === referrer._id.toString()) {
      return res.status(400).json({
        success: false,
        message: "You cannot use your own referral code",
      });
    }
    
    // Update user with referral info
    user.referredBy = referrer._id;
    user.usedReferralCode = code.toUpperCase();
    await user.save();
    
    // Create referral tracking record
    await Referral.create({
      referrerId: referrer._id,
      referredId: user._id,
      referralCode: code.toUpperCase(),
      status: "signed_up",
    });
    
    return res.json({
      success: true,
      message: "Referral code applied successfully",
      discount: {
        percent: 20,
        message: "You will get 20% off on your purchase!",
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * Get user's referral stats
 */
const getReferralStats = async (req, res) => {
  try {
    const userId = req.user._id;
    
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    
    // Get referral history
    const referrals = await Referral.find({ referrerId: userId })
      .populate("referredId", "fullName email paymentStatus")
      .sort({ createdAt: -1 });
    
    // Calculate stats
    const totalReferrals = referrals.length;
    const successfulReferrals = referrals.filter(
      (r) => r.status === "rewarded"
    ).length;
    const pendingReferrals = referrals.filter(
      (r) => r.status === "signed_up" || r.status === "payment_completed"
    ).length;
    
    return res.json({
      success: true,
      stats: {
        referralCode: user.referralCode,
        walletBalance: user.walletBalance,
        totalEarnings: user.totalEarnings,
        referralCount: user.referralCount,
        totalReferrals,
        successfulReferrals,
        pendingReferrals,
      },
      referrals,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * Process referral reward after successful payment
 * Called from payment webhook
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
        referrerId: user.referredBy,
        referredId: userId,
        referralCode: user.usedReferralCode,
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
    }
    
    return { success: true, referral };
  } catch (error) {
    console.error("Referral reward error:", error);
    return { success: false, message: error.message };
  }
};

/**
 * Generate referral link for user
 */
const getReferralLink = async (req, res) => {
  try {
    const userId = req.user._id;
    
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    
    // Generate code if not exists
    if (!user.referralCode) {
      const { generateReferralCode } = require("../config/pricing");
      user.referralCode = generateReferralCode(user._id);
      await user.save();
    }
    
    const baseUrl = process.env.FRONTEND_URL || "https://learnmythos.app";
    const referralLink = `${baseUrl}?ref=${user.referralCode}`;
    
    return res.json({
      success: true,
      referralCode: user.referralCode,
      referralLink,
      shareMessage: `Join Learn Mythos internship program! Use my code ${user.referralCode} and get 20% off. ${referralLink}`,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  validateReferralCode,
  applyReferralCode,
  getReferralStats,
  getReferralLink,
  processReferralReward,
};
