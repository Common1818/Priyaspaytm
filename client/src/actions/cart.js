import axios from "axios";
import { ADD_TO_CART } from "./types";
import { setAlert } from "./alert";

export const addProductToCart = (cartItem) => (dispatch) => {
  const userId = localStorage.getItem("userId");
  if (localStorage.getItem("cart") == null) {
    const cartProducts = [{ ...cartItem }];
    localStorage.setItem("cart", JSON.stringify(cartProducts));
  } else {
    const tempCart = JSON.parse(localStorage.getItem("cart"));
    const newCart = [...tempCart, { ...cartItem }];
    localStorage.setItem("cart", JSON.stringify(newCart));
  }

  console.log(userId);

  dispatch({
    type: ADD_TO_CART,
  });
};
