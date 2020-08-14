import {
  ADD_CATEGORY,
  ADD_CATEGORY_FAIL,
  GET_ALL_CATEGORIES,
  GET_ALL_CATEGORIES_ERROR,
  DELETE_CATEGORY,
  DELETE_CATEGORY_ERROR,
} from "../actions/types";

const initialState = { categories: [], category: {} };

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_CATEGORY:
      return {
        ...state,
        category: payload.category,
        loadingComplete: true,
      };
    case ADD_CATEGORY_FAIL:
      return {
        ...state,
        loadingComplete: true,
      };
    case GET_ALL_CATEGORIES:
      return {
        ...state,
        categories: payload,
        loadingComplete: true,
        loadingComplete: true,
      };
    case ADD_CATEGORY_FAIL:
      return {
        ...state,
        loadingComplete: true,
      };
    case DELETE_CATEGORY:
      return {
        ...state,
        ...payload,
        loadingComplete: true,
      };
    case DELETE_CATEGORY_ERROR:
      return {
        ...state,
        loadingComplete: true,
      };
    default:
      return state;
  }
}
