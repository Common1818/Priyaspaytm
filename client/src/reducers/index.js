import { combineReducers } from "redux";
import auth from "./auth";
import alert from "./alert";
import category from "./category";
import brand from "./brand";
import product from "./product";
import products from "./products";
import user from "./user";
import pincode from "./pincode";
import cart from "./cart";
import order from "./order";

export default combineReducers({
  auth,
  alert,
  category,
  brand,
  product,
  user,
  products,
  pincode,
  cart,
  order,
});
