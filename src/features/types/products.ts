import { ICategory } from "./categories";

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: ICategory
  images: string[];
}

export interface ProductsState {
  products: IProduct[];
  loading: boolean;
  error: null | string;
}

export enum ProductsActionType {
  FETCH_PRODUCTS = 'FETCH_PRODUCTS',
  FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
  FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR',
}

interface IFetchProductsAction {
  type: ProductsActionType.FETCH_PRODUCTS;
}

interface IFetchProductsSuccessAction {
  type: ProductsActionType.FETCH_PRODUCTS_SUCCESS;
  payload: IProduct[];
}

interface IFetchProductsErrorAction {
  type: ProductsActionType.FETCH_PRODUCTS_ERROR;
  payload: string;
}

export type ProductsAction = IFetchProductsAction | IFetchProductsSuccessAction | IFetchProductsErrorAction