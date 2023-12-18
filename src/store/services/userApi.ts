import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../utils/constants';
import { IUser } from '../types';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL}),
  endpoints: (builder) => ({
    createUser: builder.mutation<IUser, IUser>({
      query: (payload) => ({
        url: '/users',
        method: 'POST',
        body: payload,
      })
    })
  })
})

export const { useCreateUserMutation } = userApi;