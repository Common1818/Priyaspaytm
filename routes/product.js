const express = require('express');
const router = express.Router();

const {
   getProductById,
   createProduct,
   createProductcolor,
   getProduct,
   //   photo,
   updateProduct,
   deleteProduct,
   getAllProducts,
   //   getAllUniqueCategories,
} = require('../controllers/product');
const { isSignedIn, isAuthenticated, isAdmin } = require('../middleware/index');
const { getUserById } = require('../controllers/user');

//all of params
router.param('userId', getUserById);
router.param('productId', getProductById);

//create route
router.post(
   '/product/create/:userId',
   isSignedIn,
   isAuthenticated,
   isAdmin,
   createProduct
);
// add bike color route
router.post(
   '/product/createcolor/:userId',
   isSignedIn,
   isAuthenticated,
   isAdmin,
   createProductcolor
);

//update route
router.put(
   '/product/:productId/:userId',
   isSignedIn,
   isAuthenticated,
   isAdmin,
   updateProduct
);
// get product route
router.get('/product/:productId', getProduct);

// get all products
router.get('/products', getAllProducts);

//update route
router.put(
   '/product/:productId/:userId',
   isSignedIn,
   isAuthenticated,
   isAdmin,
   updateProduct
);

//delete route
router.delete(
   '/product/:productId/:userId',
   isSignedIn,
   isAuthenticated,
   isAdmin,
   deleteProduct
);

module.exports = router;
