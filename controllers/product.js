const Bicycle = require('../models/Bicycle');
const Specifications = require('../models/Specifications');

exports.createProduct = async (req, res) => {
   const { specifications } = req.body;
   const specs = new Specifications(specifications);

   try {
      const spec = await specs.save();

      req.body.specifications = spec._id;

      const bike = new Bicycle(req.body);

      await bike.save();

      return res.json({
         bike,
         messages: [{ msg: `Bike was added Successfully !!!` }],
      });
   } catch (err) {
      console.log(err);

      res.json({
         messages: [{ msg: `Error addding Bike` }],
      });
   }
};

exports.createProductcolor = async (req, res) => {
   const bike = new Bicycle(req.body);
   try {
      await bike.save();

      return res.json({
         bike,
         messages: [{ msg: `Bike was added Successfully !!!` }],
      });
   } catch (err) {
      console.log(err);
      res.json({
         messages: [{ msg: `Error addding Color` }],
      });
   }
};

exports.getProductById = async (req, res, next, id) => {
   try {
      const product = await Bicycle.findById(id)
         .populate('category')
         .populate('brand')
         .populate('specifications');
      req.product = product;
      next();
   } catch (err) {
      console.log(err);
      res.json({
         messages: [{ msg: `Error getting bike` }],
      });
   }
};

exports.getAllProducts = async (req, res) => {
   try {
      const products = await Bicycle.find()
         .populate('category')
         .populate('brand')
         .populate('specifications');

      return res.json(products);
   } catch (err) {
      console.log(err);
      res.json({
         messages: [{ msg: `Error getting bikes` }],
      });
   }
};

exports.updateProduct = async (req, res) => {
   const { productId } = req.params;
   const specificationId = req.product.specifications._id;
   const updatedProduct = req.body;
   const updatedSpecs = req.body.specifications;
   updatedProduct.specifications = specificationId;
   try {
      const newSpecs = await Specifications.findByIdAndUpdate(
         specificationId,
         updatedSpecs
      );
      const newBike = await Bicycle.findByIdAndUpdate(
         productId,
         updatedProduct
      );
      res.json({
         newBike,
         newSpecs,
         messages: [
            { msg: `"${updatedProduct.brandname}" was updated Successfully` },
         ],
      });
   } catch (err) {
      return res
         .status(400)
         .json({ errors: [{ msg: `Error updating ${updatedProduct.name}` }] });
   }
};

// delete controllers
exports.deleteProduct = async (req, res) => {
   let product = req.product;
   const specificationId = product.specifications._id;
   const bikes = await Bicycle.find({ specifications: specificationId });
   console.log(bikes);
   console.log(bikes.length);
   // Tera wala solution ;) , if specification is'nt nessted with any other bike then delete specification also

   if (bikes.length > 1) {
      try {
         const deletedProduct = await product.remove();
         return res.json({
            messages: [{ msg: `deleted Successfully` }],
            deletedProduct,
         });
      } catch (err) {
         return res
            .status(400)
            .json({ errors: [{ msg: `Error deleting product` }] });
      }
   } else {
      try {
         const deletedProduct = await product.remove();
         await Specifications.findByIdAndRemove(specificationId);
         res.json({
            messages: [{ msg: `"DELETED Successfully` }],
         });
      } catch (err) {
         return res
            .status(400)
            .json({ errors: [{ msg: `Error deleting product` }] });
      }
   }
};

exports.getProduct = (req, res) => {
   return res.json(req.product);
};
