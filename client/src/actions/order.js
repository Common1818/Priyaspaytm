import {
  CREATE_ORDER,
  DELETE_ORDER,
  DELETE_ORDER_ERROR,
  GET_ALL_ORDERS,
  GET_ALL_ORDERS_ERROR,
} from "./types";

import { setAlert } from "./alert";
import axios from "axios";
const userId = localStorage.getItem("userId");

export const createOrder = (data) => async (dispatch) => {
  const userId = localStorage.getItem("userId");
  if (!userId) {
    dispatch(
      setAlert("You need to be logged in to complete an Order", "danger")
    );
  }
  //   console.log(data);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ ...data, user: userId });

  try {
    const res = await axios.post(`/api/order/create/${userId}`, body, config);
    const messagesArray = res.data.messages;
    // orderAdded added message alert
    messagesArray.forEach((message) =>
      dispatch(setAlert(message.msg, "danger"))
    );
    dispatch({
      type: CREATE_ORDER,
      payload: res.data.order,
    });
    // reset redirect boolean so that cart can be visited again
    setTimeout(() => {
      dispatch({
        type: "RESET_CART_REDIRECT",
      });
    }, 2000);

    console.log(res.data);
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    //    dispatch({
    //      payload: { errMessage: "Error getting all brands" },
    //      type: ADD_BRAND_FAIL,
    //    });
  }
};

export const fetchOrder = (orderId) => async (dispatch) => {
  const userId = localStorage.getItem("userId");
  try {
    const res = await axios.get(`/api/order/${orderId}/${userId}`);
    const messagesArray = res.data.messages;
    // orderAdded added message alert

    dispatch(setAlert("Order fetched successfully", "danger"));

    dispatch({
      type: CREATE_ORDER,
      payload: res.data,
    });
    console.log(res.data);
  } catch (err) {
    console.log(err);
    //    dispatch({
    //      payload: { errMessage: "Error getting all brands" },
    //      type: ADD_BRAND_FAIL,
    //    });
  }
};

export const deleteOrder = (orderId) => async (dispatch) => {
  const userId = localStorage.getItem("userId");
  try {
    const res = await axios.delete(`/api/order/${orderId}/${userId}`);
    const messagesArray = res.data.messages;
    // orderAdded added message alert
    messagesArray.forEach((message) =>
      dispatch(setAlert(message.msg, "danger"))
    );
    dispatch({
      type: DELETE_ORDER,
    });
    console.log(res.data);
  } catch (err) {
    console.log(err);
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: DELETE_ORDER_ERROR,
    });
  }
};

export const getAllOrders = () => async (dispatch) => {
  try {
    const res = await axios.get(`/api/orders/${userId}`);
    const messagesArray = res.data.messages;
    // Added successssfully wala message
    messagesArray.forEach((message) =>
      dispatch(setAlert(message.msg, "danger"))
    );
    dispatch({
      type: GET_ALL_ORDERS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      payload: { errMessage: "Error getting all brands" },
      type: GET_ALL_ORDERS_ERROR,
    });
  }
};
