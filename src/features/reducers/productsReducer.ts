import { ProductsAction, ProductsActionType, ProductsState } from "../types/products";

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
  filtered: [],
}

export const productsReducer = (state = initialState, action: ProductsAction): ProductsState => {
  switch (action.type) {
    case ProductsActionType.FETCH_PRODUCTS:
      return { ...state, loading: true }
    case ProductsActionType.FETCH_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload }
    case ProductsActionType.FETCH_PRODUCTS_ERROR:
      return { ...state, error: action.payload }
    case ProductsActionType.FILTER_BY_PRICE:
      const filteredProducts = state.products.filter((product) => product.price <= action.payload);
      return { ...state, filtered: filteredProducts }
    default:
      return state;
  }
}
