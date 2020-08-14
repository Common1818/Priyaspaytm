const Category = require("../models/category");
const Bicycle = require("../models/Bicycle");
const { validationResult } = require("express-validator");

exports.createCategory = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }
  const category = new Category(req.body);

  try {
    await category.save();
    res.json({
      category,
      messages: [{ msg: `"${category.name}" was added Successfully` }],
    });
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .json({ errors: [{ msg: `Error Adding ${category.name}` }] });
  }
};

exports.getAllCategory = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    console.error(err.message);
    return res.status(400).json({
      error: "NO categories found",
    });
  }
};

exports.getCategoryById = async (req, res, next, id) => {
  try {
    const category = await Category.findById(id);
    req.category = category;
    next();
  } catch (err) {
    console.error(err.message);
    return res.status(400).json({
      error: "Category not found in DB",
    });
  }
};

exports.removeCategory = async (req, res) => {
  const category = req.category;
  const categoryId = category._id;
  const bikes = await Bicycle.find({ category: categoryId });
  if (bikes.length > 1) {
    return res.status(400).json({
      errors: [
        {
          msg: `Category can not be deleted. Delete bikes under this category  First..`,
        },
      ],
    });
  }
  try {
    await category.remove();
    res.json({
      messages: [{ msg: `Deleted "${category.name}" Successfully` }],
    });
  } catch (err) {
    console.error(err.message);
    return res
      .status(400)
      .json({ errors: [{ msg: `Error deleting ${category.name}` }] });
  }
};
