import  { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IProduct, IUser } from '../types';

export interface ItemCart {
  product: IProduct;
  quantities: number;
}

interface UserState {
  currentUser: IUser | null;
  cart: ItemCart[];
}

const initialState: UserState = {
  currentUser: null,
  cart: [],
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addItemToCart(state, { payload }: PayloadAction<ItemCart>) {
      const { product, quantities } = payload;
      const index = state.cart.findIndex((item) => item.product.id === product.id);
      if (index !== -1) {
        state.cart[index].quantities += quantities;
      } else {
        state.cart.push({ product, quantities })
      }
    }
  }
})

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;




