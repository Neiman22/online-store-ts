import { combineReducers } from "redux";
import { categoriesReducer } from "./categoriesReducer";
import { productsReducer } from "./productsReducer";
import { singleProductReducer } from './singleProductReducer';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  product: singleProductReducer,
})
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>
