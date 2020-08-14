import axios from "axios";
import {
  GET_ALL_BIKES,
  GET_ALL_BIKES_ERROR,
  GET_ALL_ACCESSORIES,
  GET_ALL_ACCESSORIES_ERROR,
  GET_SEARCH_RESULTS,
  GET_SEARCH_RESULTS_ERROR,
} from "./types";

import { setAlert } from "./alert";

//  Get all Bikes
export const getAllBikes = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/products");

    res.data = res.data.map((obj) => ({
      ...obj,
      searchString:
        obj.name +
        " " +
        obj.modelyear +
        " " +
        obj.price +
        " " +
        obj.color +
        " " +
        obj.gender +
        " " +
        obj.brand.brandname +
        " " +
        obj.category.name,
    }));

    dispatch({
      type: GET_ALL_BIKES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    const errors = err.response.data.errors;

    // Array of errors
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: GET_ALL_BIKES_ERROR,
    });
  }
};

//  Get all Accessories
//  Get Search Results
export const searchResult = (searchTerm, history) => async (
  dispatch,
  getState
) => {
  try {
    const { Bikes } = getState().products;

    if (searchTerm != "") {
      let regexpg = new RegExp(searchTerm, "i");

      const SearchResults = Bikes.filter((obj) =>
        regexpg.test(obj.searchString)
      );

      dispatch({
        type: GET_SEARCH_RESULTS,
        payload: SearchResults,
      });

      history.push("/products/search");
    } else {
      history.push("/products/bikes");
    }
  } catch (err) {
    console.log(err);
    const errors = err.response.data.errors;

    // Array of errors
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: GET_SEARCH_RESULTS_ERROR,
    });
  }
};
