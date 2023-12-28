import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ICartItem, IProduct, IUser } from '../types/types';

interface UserState {
  currentUser: IUser | undefined;
  cart: ICartItem[];
  favourites: IProduct[];
}

const initialState: UserState = {
  currentUser: undefined,
  cart: [],
  favourites: [],
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addProductToCart: (state, { payload }: PayloadAction<IProduct>) => {
      const existProduct = state.cart.find(item => item.product.id === payload.id);

      if (existProduct) {
        existProduct.quantity += 1;
      } else {
        state.cart.push({ product: payload, quantity: 1})
      }
    },
  },
});


export const { addProductToCart } = userSlice.actions;

export default userSlice.reducer;