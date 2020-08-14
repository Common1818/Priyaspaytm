const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const {
  getCategoryById,
  createCategory,
  // getCategory,
  getAllCategory,
  // updateCategory,
  removeCategory,
} = require("../controllers/category");
const { isSignedIn, isAdmin, isAuthenticated } = require("../middleware/index");
const { getUserById } = require("../controllers/user");

//params
router.param("userId", getUserById);
router.param("categoryId", getCategoryById);

//actual routers goes here
router.post(
  "/category/create/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  [check("name", "Category name is required").notEmpty()],
  createCategory
);

router.delete("/category/:categoryId/:userId", removeCategory);

router.get("/categories", getAllCategory);

// router.get("/category/:categoryId", getCategory);
// router.get("/categories", getAllCategory);
// router.put("/category/:categoryId/:userId", updateCategory);
// router.delete("/category/:categoryId/:userId", removeCategory);

module.exports = router;
