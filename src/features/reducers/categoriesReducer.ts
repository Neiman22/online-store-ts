import { CategoriesState, CategoriesAction, CategoriesActionType  } from "../types/categories";

const initialState: CategoriesState = {
  categories: [],
  loading: false,
  error: null,
}

export const categoriesReducer = (state = initialState, action: CategoriesAction): CategoriesState => {
  switch (action.type) {
    case CategoriesActionType.FETCH_CATEGORIES:
      return { ...state, loading: true }
    case CategoriesActionType.FETCH_CATEGORIES_SUCCESS:
      return { ...state, loading: false, categories: action.payload }
    case CategoriesActionType.FETCH_CATEGORIES_ERROR:
      return { ...state, loading: false, error: action.payload }
    default:
      return state;
  }
}