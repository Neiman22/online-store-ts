import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import type { ICategories } from '../types/types';
import { BASE_URL } from '../../utils/constants';

export const fakeApi = createApi({
  reducerPath: 'fakeApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllCategories: builder.query<ICategories[], null>({
      query: () => `/categories`,
    }),
  }),
})

export const { useGetAllCategoriesQuery } = fakeApi