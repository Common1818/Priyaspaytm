const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const { createOrder, getOrder, deleteOrder } = require("../controllers/order");

const { isSignedIn, isAuthenticated, isAdmin } = require("../middleware/index");
const { getUserById } = require("../controllers/user");
const {
  getOrderById,
  updateOrderAddress,
  getAllOrders,
} = require("../controllers/order");

//params
router.param("userId", getUserById);
router.param("orderId", getOrderById);

//create an order
router.post("/order/create/:userId", isSignedIn, isAuthenticated, createOrder);

// get an order
router.get("/order/:orderId/:userId", isSignedIn, isAuthenticated, getOrder);
// update address
router.put(
  "/order/:orderId/:userId",
  isSignedIn,
  isAuthenticated,
  [
    check("firstName", "First Name is required").notEmpty(),
    check("lastName", "Last Name is required").notEmpty(),
    check("email", "Email address is required").notEmpty(),
    check("mobileNumber", "Mobile Number is required").notEmpty(),
    check("address", "Address is required").notEmpty(),
    check("city", "City Name is required").notEmpty(),
    check("pincode", "Pincodes is required").isLength({ max: 6 }),
  ],
  updateOrderAddress
);

// delete an order
router.delete(
  "/order/:orderId/:userId",
  isSignedIn,
  isAuthenticated,
  deleteOrder
);
router.get(
  "/orders/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  getAllOrders
);

module.exports = router;
