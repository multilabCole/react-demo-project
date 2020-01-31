import * as types from "./actionTypes";
import * as productApi from "../../api/productApi";

export function productsLoadedSuccess(products) {
  return { type: types.LOAD_PRODUCTS_SUCCESS, products };
}

export function loadProducts() {
  return function(dispatch) {
    return productApi
      .getProducts()
      .then(products => {
        dispatch(productsLoadedSuccess(products))
      })
      .catch(error => {
        throw error;
      });
  };
}
