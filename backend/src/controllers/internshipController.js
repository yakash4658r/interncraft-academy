const {
  getPublicInternships,
  getInternshipBySlug,
  getInternshipsByCategory,
  getAllCategories,
} = require("../config/internships");

// List all internships
exports.listPublicInternships = (req, res) => {
  try {
    const internships = getPublicInternships();
    res.json({
      success: true,
      count: internships.length,
      data: internships,
    });
  } catch (error) {
    console.error("Error fetching internships:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch internships",
    });
  }
};

// Get single internship by slug
exports.getInternshipDetails = (req, res) => {
  try {
    const { slug } = req.params;
    const internship = getInternshipBySlug(slug);
    
    if (!internship) {
      return res.status(404).json({
        success: false,
        message: "Internship not found",
      });
    }
    
    res.json({
      success: true,
      data: internship,
    });
  } catch (error) {
    console.error("Error fetching internship details:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch internship details",
    });
  }
};

// Get internships by category
exports.getInternshipsByCategory = (req, res) => {
  try {
    const { category } = req.params;
    const internships = getInternshipsByCategory(category);
    
    res.json({
      success: true,
      count: internships.length,
      data: internships,
    });
  } catch (error) {
    console.error("Error fetching internships by category:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch internships by category",
    });
  }
};

// Get all categories
exports.getAllCategories = (req, res) => {
  try {
    const categories = getAllCategories();
    
    res.json({
      success: true,
      count: categories.length,
      data: categories,
    });
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch categories",
    });
  }
};
