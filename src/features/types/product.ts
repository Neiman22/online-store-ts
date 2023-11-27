import { ICategory } from "./categories";

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: ICategory;
  images: string[];
}

export interface ProductState {
  data: IProduct | undefined;
  loading: boolean;
  error: null | string;
  filtered: IProduct[];
}

export enum ProductActionType {
  FETCH_PRODUCT = 'FETCH_PRODUCT',
  FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS',
  FETCH_PRODUCT_ERROR = 'FETCH_PRODUCT_ERROR',
}

interface IFetchProductAction {
  type: ProductActionType.FETCH_PRODUCT;
}

interface IFetchProductSuccessAction {
  type: ProductActionType.FETCH_PRODUCT_SUCCESS;
  payload: IProduct;
}

interface IFetchProductErrorAction {
  type: ProductActionType.FETCH_PRODUCT_ERROR;
  payload: string;
}

export type ProductAction = 
  IFetchProductAction 
  | IFetchProductSuccessAction 
  | IFetchProductErrorAction