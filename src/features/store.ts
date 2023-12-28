import { configureStore } from '@reduxjs/toolkit'
import { fakeApi } from './services/fakeApi';

export const store = configureStore({
  reducer: {
    [fakeApi.reducerPath]: fakeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fakeApi.middleware),
})