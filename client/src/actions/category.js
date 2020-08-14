import {
  ADD_CATEGORY,
  ADD_CATEGORY_FAIL,
  GET_ALL_CATEGORIES,
  GET_ALL_CATEGORIES_ERROR,
  DELETE_CATEGORY,
  DELETE_CATEGORY_ERROR,
} from "./types";
import { setAlert } from "./alert";
import axios from "axios";

export const addCategory = ({ name }) => async (dispatch) => {
  const userId = localStorage.getItem("userId");
  console.log(userId);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ name });
  try {
    const res = await axios.post(
      `/api/category/create/${userId}`,
      body,
      config
    );
    const messagesArray = res.data.messages;
    messagesArray.forEach((message) =>
      dispatch(setAlert(message.msg, "danger"))
    );
    dispatch({
      type: ADD_CATEGORY,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: "ADD_CATEGORY_FAIL",
    });
  }
};

export const getAllCategories = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/categories");
    dispatch({
      type: GET_ALL_CATEGORIES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ALL_CATEGORIES_ERROR,
    });
  }
};

export const deleteCategory = (categoryId) => async (dispatch) => {
  const userId = localStorage.getItem("userId");
  try {
    const res = await axios.delete(`/api/category/${categoryId}/${userId}`);
    const messagesArray = res.data.messages;
    messagesArray.forEach((message) =>
      dispatch(setAlert(message.msg, "danger"))
    );
    dispatch({
      type: DELETE_CATEGORY,
      payload: { deletedCategory: res.data },
    });
  } catch (err) {
    const errors = err.response.data.errors;
    console.log(errors);
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: DELETE_CATEGORY_ERROR,
    });
  }
};
