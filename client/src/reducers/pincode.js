import {
  ADD_PINCODE,
  ADD_PINCODE_FAIL,
  CHECK_PINCODE,
  CHECK_PINCODE_FAIL,
  FETCH_PINCODES,
  FETCH_PINCODES_FAIL,
} from "../actions/types";

const initialState = { pincodes: [], pincode: {} };

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CHECK_PINCODE:
      return {
        ...state,
        ...payload,
        loading: false,
      };
    case "RESET_LOADER":
      return {
        ...state,
        loading: null,
      };
    case FETCH_PINCODES:
      return {
        ...state,
        ...payload,
        loading: false,
      };
    case FETCH_PINCODES_FAIL:
      return {
        ...state,
        ...payload,
        loading: false,
      };
    default:
      return state;
  }
}
