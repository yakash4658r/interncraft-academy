const express = require("express");
const router = express.Router();
const { isAuthenticated } = require("../middlewares/authMiddleware");
const {
  validateReferralCode,
  applyReferralCode,
  getReferralStats,
  getReferralLink,
} = require("../controllers/referralController");

// All routes require authentication
router.use(isAuthenticated);

// Validate a referral code (can be used without being logged in, but we check if user is trying to use own code)
router.get("/validate", validateReferralCode);

// Apply referral code to current user
router.post("/apply", applyReferralCode);

// Get user's referral stats
router.get("/stats", getReferralStats);

// Get user's referral link
router.get("/link", getReferralLink);

module.exports = router;
