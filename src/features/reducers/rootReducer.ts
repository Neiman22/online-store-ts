import { combineReducers } from "redux";
import { categoriesReducer } from "./categoriesReducer";
import { productsReducer } from "./productsReducer";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
})
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>
