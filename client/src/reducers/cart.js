import { ADD_TO_CART } from "../actions/types";

const initialState = { cart: [{}] };

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
}
