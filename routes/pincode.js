const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const { isSignedIn, isAdmin, isAuthenticated } = require("../middleware/index");
const {
  addPincode,
  allPincodes,
  checkPincode,
  removePincode,
} = require("../controllers/pincode");
const { getUserById } = require("../controllers/user");
const { getPincodeById } = require("../controllers/pincode");

//params
router.param("userId", getUserById);
router.param("pincodeId", getPincodeById);
// Add pincode route
router.post(
  "/pincode/add/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  [check("cityCode", "cityCode is required").notEmpty()],
  //   [check("description", "brand description is required").notEmpty()]
  addPincode
);
// get all pincodes for admin panel
router.get(
  "/pincodes/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  allPincodes
);
// checkPincode
router.post(
  "/pincode/check",
  [check("pincode", "pincode is required").notEmpty()],
  checkPincode
);

router.delete("/pincode/:pincodeId/:userId", removePincode);

module.exports = router;
