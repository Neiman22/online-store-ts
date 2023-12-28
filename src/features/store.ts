import { configureStore } from '@reduxjs/toolkit';
import { fakeApi } from './services/fakeApi';
import userSlice from './user/userSlice';

export const store = configureStore({
  reducer: {
    [fakeApi.reducerPath]: fakeApi.reducer,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fakeApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;