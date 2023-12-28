import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import type { ICategory, IProduct } from '../types/types';
import { BASE_URL } from '../../utils/constants';

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
  }),
})

export const { useGetAllCategoriesQuery, useGetAllProductsQuery } = fakeApi;