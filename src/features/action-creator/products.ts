import { Dispatch } from "redux";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import { ProductsAction, ProductsActionType } from "../types/products";
import { ProductAction, ProductActionType } from "../types/product";

export const fetchProducts = () => {
  return async (dispatch: Dispatch<ProductsAction>) => {
    try {
      dispatch({type: ProductsActionType.FETCH_PRODUCTS});
      const response = await axios.get(`${BASE_URL}/products`);
      dispatch({type: ProductsActionType.FETCH_PRODUCTS_SUCCESS, payload: response.data});
    } catch (err) {
      dispatch({
        type: ProductsActionType.FETCH_PRODUCTS_ERROR, 
        payload: 'Error loading products: ' + err})
    }
  }
}

export const fetchSingleProduct = (id: number) => {
  return async (dispatch: Dispatch<ProductAction>) => {
    try {
      dispatch({type: ProductActionType.FETCH_PRODUCT});
      const response = await axios.get(`${BASE_URL}/products/${id}`);
      dispatch({type: ProductActionType.FETCH_PRODUCT_SUCCESS, payload: response.data});
    } catch (err) {
      dispatch({
        type: ProductActionType.FETCH_PRODUCT_ERROR, 
        payload: 'Error loading products: ' + err})
    }
  }
}

export const filterByPrice = (maxPrice: number): ProductsAction => ({
  type: ProductsActionType.FILTER_BY_PRICE,
  payload: maxPrice,
});