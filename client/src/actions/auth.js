import axios from "axios";
import { setAlert } from "./alert";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  SEND_RESET_EMAIL,
  SEND_RESET_EMAIL_FAIL,
  LOGOUT,
} from "./types";

import { setAuthToken } from "../utils/setAuthToken";

// Load User : Every time we logged in or register or refresh the page its gonna load.

export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  if (localStorage.userId) {
    const userId = localStorage.getItem("userId");
    try {
      const res = await axios.get(`/api/user/${userId}`);

      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: AUTH_ERROR,
      });
    }
  }
};

export const register = ({ firstname, lastname, email, password }) => async (
  dispatch
) => {
  console.log(" in register");
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ firstname, lastname, email, password });

  try {
    const res = await axios.post("/api/signup", body, config);

    console.log(res);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (err) {
    console.log("Whatever" + err);
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

export const login = ({ email, password }) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post("/api/signin", body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err && err.response.data.errors;
    console.log(errors);
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.clear();
  dispatch({
    type: "LOGOUT",
  });
};

export const sendResetEmail = ({ email }) => async (dispatch) => {
  console.log(email);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ email });

  try {
    const res = await axios.post("/api/forgotpassword", body, config);

    const messagesArray = res.data.messages;
    // brand added message alert
    messagesArray.forEach((message) =>
      dispatch(setAlert(message.msg, "danger"))
    );
    dispatch({
      type: SEND_RESET_EMAIL,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    const errors = err && err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: SEND_RESET_EMAIL_FAIL,
    });
  }
};
