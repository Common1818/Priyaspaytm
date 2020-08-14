const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const {
  getBrandById,
  createBrand,
  // getCategory,
  getAllBrand,
  // updateCategory,
  removeBrand,
} = require("../controllers/brand");
const { isSignedIn, isAdmin, isAuthenticated } = require("../middleware/index");
const { getUserById } = require("../controllers/user");

//params
router.param("userId", getUserById);
router.param("brandId", getBrandById);

//actual routers goes here
router.post(
  "/brand/create/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  [check("brandname", "brand name is required").notEmpty()],
  [check("description", "brand description is required").notEmpty()],
  createBrand
);

router.delete("/brand/:brandId/:userId", removeBrand);

router.get("/brands", getAllBrand);

// router.get("/category/:categoryId", getCategory);
// router.get("/categories", getAllCategory);
// router.put("/category/:categoryId/:userId", updateCategory);
// router.delete("/category/:categoryId/:userId", removeCategory);

module.exports = router;
