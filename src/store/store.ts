import { configureStore } from '@reduxjs/toolkit'

import { productsApi } from './services/productsApi'
import { userSlice } from './services/userSlice'
import { setupListeners } from "@reduxjs/toolkit/query"

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    user: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware)
})

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
