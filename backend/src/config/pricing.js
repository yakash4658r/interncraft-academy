/**
 * Internship Pricing Configuration
 * New pricing structure with higher strike prices
 */

const PRICING = {
  // Machine Learning
  "ai-ml": {
    name: "Machine Learning",
    price: 149,
    strikePrice: 3999,
    description: "AI & ML with hands-on projects",
  },
  // DSA
  "dsa": {
    name: "DSA (Data Structures & Algorithms)",
    price: 129,
    strikePrice: 2999,
    description: "Core coding interview preparation",
  },
  // Python
  "python": {
    name: "Python Programming",
    price: 99,
    strikePrice: 2499,
    description: "Python fundamentals to advanced",
  },
  // Backend Development
  "backend-dev": {
    name: "Backend Development",
    price: 129,
    strikePrice: 3499,
    description: "Server-side development with Node.js",
  },
  // Accounting
  "accounting": {
    name: "Accounting & Finance",
    price: 99,
    strikePrice: 1999,
    description: "Financial accounting fundamentals",
  },
  // Video Editing
  "video-editing": {
    name: "Video Editing",
    price: 99,
    strikePrice: 2499,
    description: "Professional video editing skills",
  },
  // Digital Marketing
  "digital-marketing": {
    name: "Digital Marketing",
    price: 119,
    strikePrice: 2999,
    description: "Marketing in the digital age",
  },
};

// Legacy course IDs mapping (for backward compatibility)
const COURSE_ID_MAPPING = {
  "ai-ml": "ai-ml",
  "digital-marketing": "digital-marketing",
  "video-editing": "video-editing",
  "business": "accounting",
  "fullstack-dev": "backend-dev",
  "data-analytics": "python",
};

// Default price if course not found
const DEFAULT_PRICE = 999;
const DEFAULT_STRIKE_PRICE = 4999;

/**
 * Get pricing for a course
 * @param {string} courseId - The course ID
 * @returns {Object} Pricing object with price, strikePrice, name
 */
function getPricing(courseId) {
  // Map legacy course IDs to new pricing
  const mappedId = COURSE_ID_MAPPING[courseId] || courseId;
  
  if (PRICING[mappedId]) {
    return {
      ...PRICING[mappedId],
      id: courseId,
    };
  }
  
  // Fallback for any other course
  return {
    name: "Internship Program",
    price: DEFAULT_PRICE,
    strikePrice: DEFAULT_STRIKE_PRICE,
    description: "Premium internship program",
    id: courseId,
  };
}

/**
 * Calculate final price with referral discount
 * @param {string} courseId - The course ID
 * @param {string} referralCode - Optional referral code
 * @returns {Object} Final pricing with discount applied
 */
async function calculatePriceWithReferral(courseId, referralCode = null) {
  const pricing = getPricing(courseId);
  let finalPrice = pricing.price;
  let discountAmount = 0;
  let appliedReferral = null;
  
  // Apply 20% referral discount if valid code provided
  if (referralCode) {
    const User = require("../models/User");
    const referrer = await User.findOne({ referralCode: referralCode.toUpperCase() });
    
    if (referrer) {
      discountAmount = Math.round(pricing.price * 0.20); // 20% discount
      finalPrice = pricing.price - discountAmount;
      appliedReferral = {
        code: referralCode.toUpperCase(),
        referrerId: referrer._id,
        discountPercent: 20,
        discountAmount: discountAmount,
      };
    }
  }
  
  return {
    ...pricing,
    finalPrice,
    discountAmount,
    appliedReferral,
    referralDiscount: discountAmount,
  };
}

/**
 * Get all available courses with pricing
 */
function getAllCourses() {
  return Object.keys(PRICING).map((id) => ({
    id,
    ...PRICING[id],
  }));
}

/**
 * Generate unique referral code
 * @param {string} userId - User ID to base the code on
 * @returns {string} 8-character referral code
 */
function generateReferralCode(userId) {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 5).toUpperCase();
  return `${timestamp}${random}`.substring(0, 8);
}

module.exports = {
  PRICING,
  getPricing,
  calculatePriceWithReferral,
  getAllCourses,
  generateReferralCode,
  DEFAULT_PRICE,
  DEFAULT_STRIKE_PRICE,
};
