import axios from "axios";
import {
  ADD_BIKE,
  ADD_BIKE_ERROR,
  FETCH_BIKE,
  FETCH_BIKE_ERROR,
  FETCH_ALL_BIKES,
  DELETE_BIKE,
  DELETE_BIKE_ERROR,
  UPDATE_BIKE,
  UPDATE_BIKE_ERROR,
  ADD_TO_CART,
} from "./types";
import { setAlert } from "./alert";
import { type } from "jquery";

// useId from localstorage
const userId = localStorage.getItem("userId");

export const addBike = (bikeData) => async (dispatch) => {
  const userId = localStorage.getItem("userId");
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify(bikeData);
  console.log(bikeData);
  try {
    //
    const res = await axios.post(`/api/product/create/${userId}`, body, config);
    const messagesArray = res.data.messages;
    // Added successssfully wala message
    messagesArray.forEach((message) =>
      dispatch(setAlert(message.msg, "danger"))
    );
    // ye naya vala product store mein product ke andar hai agar use karna ho toh
    dispatch({
      type: ADD_BIKE,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    // Array of errors
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: ADD_BIKE_ERROR,
    });
  }
};

export const addBikecolor = (bikeData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify(bikeData);
  try {
    const res = await axios.post(
      `/api/product/createcolor/${userId}`,
      body,
      config
    );
    const messagesArray = res.data.messages;
    // Added successssfully wala message
    messagesArray.forEach((message) =>
      dispatch(setAlert(message.msg, "danger"))
    );
    dispatch({
      type: ADD_BIKE,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    // Array of errors
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: ADD_BIKE_ERROR,
    });
  }
};

export const fetchBike = (productId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/product/${productId}`);
    dispatch({
      type: FETCH_BIKE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: FETCH_BIKE_ERROR,
    });
  }
};

export const fetchAllBikes = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/products");
    dispatch({
      type: FETCH_ALL_BIKES,
      payload: { products: res.data },
    });
  } catch (err) {
    dispatch({
      type: FETCH_BIKE_ERROR,
    });
  }
};

export const deleteBike = (productId, userId) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/product/${productId}/${userId}`);
    const messagesArray = res.data.messages;
    // Added successssfully wala message
    messagesArray.forEach((message) =>
      dispatch(setAlert(message.msg, "danger"))
    );
    dispatch({
      type: DELETE_BIKE,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    // Array of errors
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: DELETE_BIKE_ERROR,
    });
  }
};

export const updateBike = (bikedata, productId) => async (dispatch) => {
  console.log(bikedata);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify(bikedata);
  const res = await axios.put(
    `/api/product/${productId}/${userId}`,
    body,
    config
  );
  const messagesArray = res.data.messages;
  messagesArray.forEach((message) => dispatch(setAlert(message.msg, "danger")));
  dispatch({
    type: UPDATE_BIKE,
    payload: res.data,
  });
  try {
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      payload: { errMessage: "Error Updating Bike" },
      type: UPDATE_BIKE_ERROR,
    });
  }
};

export const emptyProductState = () => (dispatch) => {
  dispatch({
    type: "EMPTY_PRODUCT_STATE",
  });
};
