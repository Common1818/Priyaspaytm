const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const {
  createOrder,
  getOrder,
  deleteOrder,
  getAllOrders,
} = require("../controllers/order");

const { isSignedIn, isAdmin, isAuthenticated } = require("../middleware/index");
const { getUserById } = require("../controllers/user");
const { getOrderById } = require("../controllers/order");

//params
router.param("userId", getUserById);
router.param("orderId", getOrderById);

//create an order

router.post(
  "/order/create/:userId",
  isSignedIn,
  isAuthenticated,
  //   [check("brandname", "brand name is required").notEmpty()],
  //   [check("description", "brand description is required").notEmpty()],
  createOrder
);

// get an order

router.get(
  "/order/:orderId/:userId",
  isSignedIn,
  isAuthenticated,
  //   [check("brandname", "brand name is required").notEmpty()],
  //   [check("description", "brand description is required").notEmpty()],
  getOrder
);

// delete an order

router.delete(
  "/order/:orderId/:userId",
  isSignedIn,
  isAuthenticated,
  //   [check("brandname", "brand name is required").notEmpty()],
  //   [check("description", "brand description is required").notEmpty()],
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
