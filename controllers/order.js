const Order = require("../models/Order");
const User = require("../models/User");
const { validationResult } = require("express-validator");

exports.getOrderById = async (req, res, next, id) => {
  try {
    const order = await Order.findById(id);
    req.order = order;
    next();
  } catch (err) {
    console.error(err.message);
    return res.status(400).json({
      error: "Order not found in DB",
    });
  }
};

exports.createOrder = async (req, res) => {
  const order = new Order(req.body);

  try {
    await order.save();
    res.json({
      order,
      messages: [{ msg: `Order was created Successfully` }],
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ errors: [{ msg: `Error creating order` }] });
  }
};

exports.getOrder = async (req, res) => {
  return res.json(req.order);
};

exports.deleteOrder = async (req, res) => {
  const order = req.order;
  res.json({
    order,
    messages: [{ msg: `Order was deleted Successfully` }],
  });
  try {
    await order.remove();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ errors: [{ msg: `Error deleting order` }] });
  }
};

exports.updateOrderAddress = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }
  const order = req.order;
  console.log(req.body);
  order.billingDetails = req.body;

  try {
    await order.save();
    res.json({
      order,
      messages: [{ msg: `billing Details were updated Successfully` }],
    });
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .json({ errors: [{ msg: `Error updating Billing details` }] });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("user", "firstname email");
    return res.json({
      orders,
      messages: [{ msg: `"orders fetched Successfully` }],
    });
  } catch (err) {
    console.log(err);
    res.json({
      messages: [{ msg: `Error getting Orders` }],
    });
  }
};
