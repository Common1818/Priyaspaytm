const mongoose = require("mongoose");

const BrandSchema = new mongoose.Schema({
  brandname: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("Brand", BrandSchema);
