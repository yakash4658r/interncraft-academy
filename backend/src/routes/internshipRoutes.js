const express = require("express");
const router = express.Router();
const {
  listPublicInternships,
  getInternshipDetails,
  getInternshipsByCategory,
  getAllCategories,
} = require("../controllers/internshipController");

// Routes
router.get("/", listPublicInternships);
router.get("/categories", getAllCategories);
router.get("/category/:category", getInternshipsByCategory);
router.get("/:slug", getInternshipDetails);

module.exports = router;
