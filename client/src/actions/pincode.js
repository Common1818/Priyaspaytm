import {
  ADD_PINCODE,
  ADD_PINCODE_FAIL,
  CHECK_PINCODE,
  CHECK_PINCODE_FAIL,
  FETCH_PINCODES,
  FETCH_PINCODES_FAIL,
} from "./types";

import { setAlert } from "./alert";
import axios from "axios";
const userId = localStorage.getItem("userId");

export const checkPincode = ({ pincode }) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ pincode });

  try {
    const res = await axios.post(`/api/pincode/check`, body, config);
    console.log(res.data);
    dispatch({
      type: CHECK_PINCODE,
      payload: res.data,
    });

    setTimeout(() => {
      dispatch({
        type: "RESET_LOADER",
      });
    }, 2000);
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: CHECK_PINCODE_FAIL,
    });
  }
};

export const getAllPincodes = () => async (dispatch) => {
  try {
    const res = await axios.get(`/api/pincodes/${userId}`);
    console.log(res.data);
    dispatch({
      type: FETCH_PINCODES,
      payload: { pincodes: res.data },
    });
  } catch (err) {
    dispatch({
      payload: { errMessage: "Error getting all brands" },
      type: FETCH_PINCODES_FAIL,
    });
  }
};

export const deletePincode = (pincodeId) => async (dispatch) => {
  const userId = localStorage.getItem("userId");
  try {
    const res = await axios.delete(`/api/pincode/${pincodeId}/${userId}`);
    console.log(res.data);
    const messagesArray = res.data.messages;
    messagesArray.forEach((message) =>
      dispatch(setAlert(message.msg, "danger"))
    );
  } catch (err) {
    const errors = err.response.data.errors;
    console.log(errors);
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
  }
};

export const addPincode = (pincode) => async (dispatch) => {
  const userId = localStorage.getItem("userId");
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify(pincode);
  try {
    const res = await axios.post(`/api/pincode/add/${userId}`, body, config);
    console.log(res.data);
    const messagesArray = res.data.messages;
    messagesArray.forEach((message) =>
      dispatch(setAlert(message.msg, "danger"))
    );
    dispatch({
      type: ADD_PINCODE,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    console.log(errors);
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: ADD_PINCODE_FAIL,
    });
  }
};
