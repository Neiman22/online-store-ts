import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct, IUser } from "../types";

export interface CartItem {
  product: IProduct;
  quantity: number;
}
interface UserState {
  currentUser: IUser | null;
  cart: CartItem[];
  isLoading: boolean;
}

const initialState: UserState = {
  currentUser: null,
  cart: [],
  isLoading: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addItemToCart: (state, { payload }: PayloadAction<IProduct>) => {
      const found = state.cart.find((item) => item.product.id === payload.id);
      if (found) {
        state.cart = state.cart.map((item) => {
          return item.product.id === payload.id 
            ? {...item, quantity: item.quantity + 1}
            : item;
        })
      } else {
        state.cart.push({ product: payload, quantity: 1 })
      }
    }
  },
});

export const { addItemToCart } = userSlice.actions;

export default userSlice.reducer



