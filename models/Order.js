const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

// const ProductCartSchema = new mongoose.Schema({
//   product: {
//     type: ObjectId,
//     ref: "Product",
//   },
//   name: String,
//   quantity: Number,
//   price: Number,
// });

// const ProductCart = mongoose.model("ProductCart", ProductCartSchema);

const OrderSchema = new mongoose.Schema(
  {
    products: [
      {
        name: { type: String },
        quantity: { type: Number },
        price: { type: Number },
        color: { type: String },
        image: { type: String },
      },
    ],
    // transaction_id: {},
    total: { type: Number },
    totalQuantity: { type: Number },
    status: { type: String, default: "Payment Pending" },
    billingDetails: {
      firstName: { type: String },
      lastName: { type: String },
      email: { type: String },
      address: { type: String },
      city: { type: String },
      pincode: { type: String },
      mobileNumber: { type: String },
    },
    user: {
      type: ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
