const Brand = require("../models/Brand");
const Bicycle = require("../models/Bicycle");
const { validationResult } = require("express-validator");

exports.createBrand = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }
  const brand = new Brand(req.body);

  try {
    await brand.save();
    res.json({
      brand,
      messages: [{ msg: `"${brand.brandname}" was added Successfully` }],
    });
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .json({ errors: [{ msg: `Error Adding ${brand.brandname}` }] });
  }
};

exports.getAllBrand = async (req, res) => {
  try {
    const brands = await Brand.find();
    res.json(brands);
  } catch (err) {
    console.error(err.message);
    return res.status(400).json({
      error: "NO brands found",
    });
  }
};

exports.getBrandById = async (req, res, next, id) => {
  try {
    const brand = await Brand.findById(id);
    req.brand = brand;
    next();
  } catch (err) {
    console.error(err.message);
    return res.status(400).json({
      error: "Brand not found in DB",
    });
  }
};

exports.removeBrand = async (req, res) => {
  const brand = req.brand;
  const brandId = brand._id;
  // check if bikes exisst with this brand
  // if yes then escape deletion
  const bikes = await Bicycle.find({ brand: brandId });
  if (bikes.length > 1) {
    return res.status(400).json({
      errors: [
        {
          msg: `Brand can not be deleted. Delete bikes of this brand first First..`,
        },
      ],
    });
  }

  try {
    await brand.remove();
    res.json({
      messages: [{ msg: `Deleted "${brand.brandname}" Successfully` }],
    });
  } catch (err) {
    console.error(err.message);
    return res
      .status(400)
      .json({ errors: [{ msg: `Error deleting ${brand.brandname}` }] });
  }
};
