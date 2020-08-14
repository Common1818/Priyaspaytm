import {
  ADD_BRAND,
  ADD_BRAND_FAIL,
  GET_ALL_BRANDS,
  GET_ALL_BRANDS_ERROR,
  DELETE_BRAND,
  DELETE_BRAND_ERROR,
} from "./types";
import { setAlert } from "./alert";
import axios from "axios";

export const addBrand = ({ brandname, description }) => async (dispatch) => {
  const userId = localStorage.getItem("userId");
  console.log(userId);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ brandname, description });
  try {
    const res = await axios.post(`/api/brand/create/${userId}`, body, config);
    const messagesArray = res.data.messages;
    // brand added message alert
    messagesArray.forEach((message) =>
      dispatch(setAlert(message.msg, "danger"))
    );
    dispatch({
      type: ADD_BRAND,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      payload: { errMessage: "Error getting all brands" },
      type: ADD_BRAND_FAIL,
    });
  }
};

export const getAllBrands = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/brands");
    dispatch({
      type: GET_ALL_BRANDS,
      payload: { brands: res.data },
    });
  } catch (err) {
    dispatch({
      payload: { errMessage: "Error getting all brands" },
      type: GET_ALL_BRANDS_ERROR,
    });
  }
};

export const deleteBrand = (brandId) => async (dispatch) => {
  const userId = localStorage.getItem("userId");
  try {
    const res = await axios.delete(`/api/brand/${brandId}/${userId}`);
    console.log(res.data);
    const messagesArray = res.data.messages;
    messagesArray.forEach((message) =>
      dispatch(setAlert(message.msg, "danger"))
    );
    dispatch({
      type: DELETE_BRAND,
      payload: { deletedBrand: res.data },
    });
  } catch (err) {
    const errors = err.response.data.errors;
    console.log(errors);
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: DELETE_BRAND_ERROR,
    });
  }
};
