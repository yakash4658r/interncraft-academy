const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    googleId: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    phone: {
      type: String,
      default: "",
    },
    collegeName: {
      type: String,
      default: "",
    },
    courseDegree: {
      type: String,
      default: "",
    },
    year: {
      type: String,
      default: "",
    },
    profileCompleted: {
      type: Boolean,
      default: false,
    },
    paymentStatus: {
      type: String,
      enum: ["unpaid", "pending", "paid", "failed"],
      default: "unpaid",
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    enrolledCourseId: {
      type: String,
      default: "",
    },
    // Referral system fields
    referralCode: {
      type: String,
      unique: true,
      sparse: true,
      uppercase: true,
    },
    // Wallet for referral earnings
    walletBalance: {
      type: Number,
      default: 0,
      min: 0,
    },
    // Total earnings from referrals
    totalEarnings: {
      type: Number,
      default: 0,
      min: 0,
    },
    // Number of successful referrals
    referralCount: {
      type: Number,
      default: 0,
      min: 0,
    },
    // Referrer ID (who referred this user)
    referredBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    // Whether user has used a referral code
    usedReferralCode: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);