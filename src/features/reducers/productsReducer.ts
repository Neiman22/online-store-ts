import { ProductsAction, ProductsActionType, ProductsState } from "../types/products"

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
}

export const productsReducer = (state = initialState, action: ProductsAction): ProductsState => {
  switch (action.type) {
    case ProductsActionType.FETCH_PRODUCTS:
      return { loading: true, error: null, products:[] }
    case ProductsActionType.FETCH_PRODUCTS_SUCCESS:
      return { loading: false, error: null, products: action.payload }
    case ProductsActionType.FETCH_PRODUCTS_ERROR:
      return { loading: false, error: action.payload, products:[] }
    default:
      return state;
  }
}