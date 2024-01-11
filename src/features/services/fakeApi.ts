import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import type { ICategory, IProduct, IUser } from '../types/types';
import { BASE_URL } from '../../utils/constants';

export const fakeApi = createApi({
  reducerPath: 'fakeApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['User'],
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
    createUser: builder.mutation<IUser, IUser>({
      query: (user) => ({
        url: '/users',
        method: 'POST',
        body: user,
      }),
    }),
  }),
})

export const { 
  useGetAllCategoriesQuery, 
  useGetAllProductsQuery,
  useGetProductByIDQuery,
  useCreateUserMutation,
} = fakeApi;