const mongoose = require("mongoose");

const SpecificationsSchema = new mongoose.Schema({
  frontderailleur: {
    type: String,
    default: "Generic",
  },
  rearderailleur: {
    type: String,
    default: "Generic",
  },
  shifter: {
    type: String,
    default: "Generic",
  },
  handlebar: {
    type: String,
    default: "Generic",
  },
  tire: {
    type: String,
    default: "Generic",
  },
  rim: {
    type: String,
    default: "Generic",
  },
  suspension: {
    type: String,
    default: "Generic",
  },
  chain: {
    type: String,
    default: "Generic",
  },
  framematerial: {
    type: String,
  },
  brakes: {
    type: String,
  },
  color: {
    type: String,
  },
  size: {
    typee: String,
  },
});

module.exports = mongoose.model("Specifications", SpecificationsSchema);
