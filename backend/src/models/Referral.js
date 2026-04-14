const mongoose = require("mongoose");

const referralSchema = new mongoose.Schema(
  {
    // Referrer (the one who shared the code)
    referrerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    // Referred user (the one who used the code)
    referredId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    // Referral code used
    referralCode: {
      type: String,
      required: true,
      uppercase: true,
    },
    // Status of the referral
    status: {
      type: String,
      enum: ["pending", "signed_up", "payment_completed", "rewarded"],
      default: "pending",
    },
    // Payment details
    paymentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Payment",
      default: null,
    },
    orderId: {
      type: String,
      default: null,
    },
    // Reward amount for referrer
    rewardAmount: {
      type: Number,
      default: 0, // ₹150 default
    },
    // Whether reward has been given
    rewardGiven: {
      type: Boolean,
      default: false,
    },
    // When reward was given
    rewardGivenAt: {
      type: Date,
      default: null,
    },
    // Discount given to referred user
    discountAmount: {
      type: Number,
      default: 0,
    },
    // IP address to prevent self-referral
    ipAddress: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

// Index for faster queries
referralSchema.index({ referrerId: 1, status: 1 });
referralSchema.index({ referredId: 1 });
referralSchema.index({ referralCode: 1 });
referralSchema.index({ createdAt: -1 });

module.exports = mongoose.model("Referral", referralSchema);
