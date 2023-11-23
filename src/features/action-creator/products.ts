import { Dispatch } from "redux";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import { ProductsAction, ProductsActionType } from "../types/products";

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

export const filterByPrice = (maxPrice: number): ProductsAction => ({
  type: ProductsActionType.FILTER_BY_PRICE,
  payload: maxPrice,
});