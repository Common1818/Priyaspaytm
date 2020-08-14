const mongoose = require('mongoose');

// City Electric Hybrid Road

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Category', CategorySchema);
