import {
  ADD_BIKE,
  ADD_BIKE_ERROR,
  FETCH_BIKE,
  FETCH_BIKE_ERROR,
  FETCH_ALL_BIKES,
  UPDATE_BIKE,
  UPDATE_BIKE_ERROR,
} from "../actions/types";

const initialState = { product: null };

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_BIKE:
      return {
        ...state,
        ...payload,
      };
    case ADD_BIKE_ERROR:
      return {
        ...state,
      };
    case FETCH_BIKE:
      return {
        ...state,
        product: { ...payload },
        loading: false,
      };
    case FETCH_ALL_BIKES:
      return {
        ...state,
        ...payload,
      };
    case FETCH_BIKE_ERROR:
      return {
        ...state,
      };
    case UPDATE_BIKE:
      return {
        ...state,
      };
    case UPDATE_BIKE_ERROR:
      return {
        ...state,
      };
    case "EMPTY_PRODUCT_STATE":
      return {
        ...state,
        product: null,
        loading: null,
      };

    default:
      return state;
  }
}
