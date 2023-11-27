import { ProductAction, ProductActionType, ProductState } from "../types/product";

const initialState: ProductState = {
  data: undefined,
  loading: false,
  error: null,
  filtered: [],
}

export const singleProductReducer = (state = initialState, action: ProductAction): ProductState => {
  switch (action.type) {
    case ProductActionType.FETCH_PRODUCT:
      return { ...state, loading: true }
    case ProductActionType.FETCH_PRODUCT_SUCCESS:
      return { ...state, data: action.payload }
    case ProductActionType.FETCH_PRODUCT_ERROR:
      return { ...state, error: action.payload }
    default:
      return state;
  }
}
