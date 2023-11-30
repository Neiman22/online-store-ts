import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../utils/constants';
import { ICategory } from '../types';

export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL}),
  endpoints: (builder) => ({
    getAllCategories: builder.query<ICategory[], string>({
      query: () => ({
        url: `/categories`
      })
    })
  })
})

export const { useGetAllCategoriesQuery } = categoriesApi