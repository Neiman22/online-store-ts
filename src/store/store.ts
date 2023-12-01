import { configureStore } from '@reduxjs/toolkit'

import { categoriesApi } from './services/categoriesApi'
import { productsApi } from './services/productsApi'
import { userSlice } from './services/userApi'

export const store = configureStore({
  reducer: {
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    user: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    categoriesApi.middleware, productsApi.middleware)
})


