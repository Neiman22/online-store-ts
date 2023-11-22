import { Dispatch } from "redux"
import { CategoriesAction, CategoriesActionType } from "../types/categories"
import axios from "axios";
import { BASE_URL } from "../../utils/constants";

export const fetchCategories = () => {
  return async (dispatch: Dispatch<CategoriesAction>) => {
    try {
      dispatch({type: CategoriesActionType.FETCH_CATEGORIES});
      const response = await axios.get(`${BASE_URL}/categories`);
      dispatch({type: CategoriesActionType.FETCH_CATEGORIES_SUCCESS, payload: response.data});
    } catch (err) {
      dispatch({
        type: CategoriesActionType.FETCH_CATEGORIES_ERROR, 
        payload: 'Error loading categories: ' + err})
    }
  }
}