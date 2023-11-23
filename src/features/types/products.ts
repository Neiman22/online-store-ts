import { ICategory } from "./categories";

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: ICategory;
  images: string[];
}

export interface ProductsState {
  products: IProduct[];
  loading: boolean;
  error: null | string;
  filtered: IProduct[];
}

export enum ProductsActionType {
  FETCH_PRODUCTS = 'FETCH_PRODUCTS',
  FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
  FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR',
  FILTER_BY_PRICE = 'FILTER_BY_PRICE',
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

interface IFilterByPriceAction {
  type: ProductsActionType.FILTER_BY_PRICE;
  payload: number;
}

export type ProductsAction = 
  IFetchProductsAction 
  | IFetchProductsSuccessAction 
  | IFetchProductsErrorAction
  | IFilterByPriceAction