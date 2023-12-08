import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from '../../utils/constants';
import { ICategory, IProduct } from '../types';

export const productsApi = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL}),
  endpoints: (builder) => ({
    getAllCategories: builder.query<ICategory[], string>({
      query: () => ({
        url: `/categories`
      })
    }),
    getAllProducts: builder.query<IProduct[], string>({
      query: () => ({
        url: `/products`
      })
    }),
    getProductById: builder.query<IProduct, number>({
      query: (id) => ({
        url: `/products/${id}`
      })
    })
  })
})

export const { 
  useGetAllProductsQuery, 
  useGetProductByIdQuery,
  useGetAllCategoriesQuery,
} = productsApi