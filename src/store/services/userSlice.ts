import  { createSlice } from '@reduxjs/toolkit';
import { UserState } from '../types';
import { userApi } from './userApi';

const initialState: UserState = {
  currentUser: null,
  cart: [],
  favorites: [],
  formType: "signup",
  showForm: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addItemToCart: (state, { payload }) => {
      const { product, quantities } = payload;
      const index = state.cart.findIndex((item) => item.product.id === product.id);
      if (index !== -1) {
        state.cart[index].quantities += quantities;
      } else {
        state.cart.push({ product, quantities })
      }
    },
    addItemToFavorites: (state, { payload }) => {
      const isAlreadyFavorite = state.favorites.some((item) => item.id === payload.id);
      if (!isAlreadyFavorite) {
        state.favorites.push(payload);
      }
    },
    toggleForm: (state, { payload }) => {
      state.showForm = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(userApi.endpoints.createUser.matchFulfilled, (state, { payload }) => {
      state.currentUser = payload;
    })
  }
})

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
