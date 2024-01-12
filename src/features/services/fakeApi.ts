import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import type { ICategory, IProduct } from '../types/types';
import { BASE_URL } from '../../utils/constants';
import { buildUrl } from '../../utils/functions';

export const fakeApi = createApi({
  reducerPath: 'fakeApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllCategories: builder.query<ICategory[], null>({
      query: () => `/categories`,
    }),
    getAllProducts: builder.query<IProduct[], null>({
      query: () => `/products`,
    }),
    getProductByID: builder.query<IProduct, number>({
      query: (id) => `/products/${id}`,
    }),
    getSearchProducts: builder.query<IProduct[], object>({
      query: (params) => buildUrl('/products', params),
    }),
  }),
})

export const { 
  useGetAllCategoriesQuery, 
  useGetAllProductsQuery,
  useGetProductByIDQuery,
  useGetSearchProductsQuery,
} = fakeApi;