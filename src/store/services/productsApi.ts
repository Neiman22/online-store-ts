import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from '../../utils/constants';
import { IProduct } from '../types';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL}),
  endpoints: (builder) => ({
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

export const { useGetAllProductsQuery, useGetProductByIdQuery } = productsApi