import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function productReducer(state = initialState.products, action) {
  switch (action.type) {
    case types.LOAD_PRODUCTS_SUCCESS:
      // return a copy of the new state
      console.log("checking the products -- productReducer", action, action.products)
      return action.products;
    default:
      return state;
  }
}
