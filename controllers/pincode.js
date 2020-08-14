const Pincode = require("../models/Pincode");
const { validationResult } = require("express-validator");

exports.addPincode = async (req, res) => {
  const pincode = new Pincode(req.body);

  try {
    await pincode.save();
    res.json({
      pincode,
      messages: [{ msg: `pincode was added Successfully` }],
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ errors: [{ msg: `Error Adding pincode` }] });
  }
};

exports.allPincodes = async (req, res) => {
  try {
    const pincodes = await Pincode.find();
    res.json(pincodes);
  } catch (err) {
    console.error(err.message);
    return res.status(400).json({
      error: "NO pincodes found",
    });
  }
};

exports.checkPincode = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }

  try {
    const { pincode } = req.body;
    // slice to get the citycode from pincode
    const cityCode = pincode.slice(0, 4);
    // find citycode in the database
    const data = await Pincode.findOne({ cityCode });
    console.log(data);
    if (!data) {
      return res.json({ Serviceable: false });
    }
    const { coverAllAreas } = data;
    const { excludedAreas } = data;
    const { includedAreas } = data;

    const isExcluded = excludedAreas.some((area) => {
      return area == pincode;
    });

    const isIncluded = includedAreas.some((area) => {
      return area == pincode;
    });

    if (includedAreas.length == 0) {
      coverAllAreas
        ? res.json({ Serviceable: true })
        : isExcluded
        ? res.json({ Serviceable: false })
        : res.json({ Serviceable: true });
    }
    if (includedAreas.length > 0) {
      coverAllAreas
        ? res.json({ Serviceable: true })
        : isIncluded
        ? res.json({ Serviceable: true })
        : res.json({ Serviceable: false });
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json({ errors: [{ msg: `Error Adding pincode` }] });
  }
};

exports.getPincodeById = async (req, res, next, id) => {
  try {
    const pincode = await Pincode.findById(id);
    req.pincode = pincode;
    next();
  } catch (err) {
    console.error(err.message);
    return res.status(400).json({
      error: "pincode not found in DB",
    });
  }
};

exports.removePincode = async (req, res) => {
  const pincode = req.pincode;
  try {
    await pincode.remove();
    res.json({
      pincode,
      messages: [{ msg: `Pincode was removed Successfully` }],
    });
  } catch (err) {
    console.error(err.message);
    return res
      .status(400)
      .json({ errors: [{ msg: `Error Removing Pincode` }] });
  }
};
