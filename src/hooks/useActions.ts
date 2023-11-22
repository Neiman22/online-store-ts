import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import * as CategoriesActionCreators from '../features/action-creator/categories'

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(CategoriesActionCreators, dispatch);
}