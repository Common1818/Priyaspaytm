import {
  ADD_BRAND,
  ADD_BRAND_FAIL,
  GET_ALL_BRANDS,
  GET_ALL_BRANDS_ERROR,
  DELETEBRANDY,
  DELETE_BRAND_ERROR,
  ADD_CATEGORY_FAIL,
  DELETE_BRAND,
} from "../actions/types";

const initialState = { brands: [], brand: {} };

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_BRAND:
      return {
        ...state,
        ...payload,
        loadingComplete: true,
      };
    case ADD_BRAND_FAIL:
      return {
        ...state,
        loadingComplete: true,
      };
    case GET_ALL_BRANDS:
      return {
        ...state,
        ...payload,
        loadingComplete: true,
      };
    case ADD_BRAND_FAIL:
      return {
        ...state,
        loadingComplete: true,
      };
    case DELETE_BRAND:
      return {
        ...state,
        ...payload,
        loadingComplete: true,
      };
    case DELETE_BRAND_ERROR:
      return {
        ...state,
        loadingComplete: true,
      };

    case GET_ALL_BRANDS_ERROR:
      return {
        ...state,
        ...payload,
        loadingComplete: true,
      };
    default:
      return state;
  }
}
