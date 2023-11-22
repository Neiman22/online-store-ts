export interface ICategory {
  id: number;
  name: string;
  image: string;
}

export interface CategoriesState {
  categories: ICategory[];
  loading: boolean;
  error: null | string;
}

export enum CategoriesActionType {
  FETCH_CATEGORIES = 'FETCH_CATEGORIES',
  FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS',
  FETCH_CATEGORIES_ERROR = 'FETCH_CATEGORIES_ERROR',
}

interface IFetchCategoriesAction {
  type: CategoriesActionType.FETCH_CATEGORIES;
}

interface IFetchCategoriesSuccessAction {
  type: CategoriesActionType.FETCH_CATEGORIES_SUCCESS;
  payload: ICategory[];
}

interface IFetchCategoriesErrorAction {
  type: CategoriesActionType.FETCH_CATEGORIES_ERROR;
  payload: string;
}

export type CategoriesAction = IFetchCategoriesAction | IFetchCategoriesSuccessAction | IFetchCategoriesErrorAction
