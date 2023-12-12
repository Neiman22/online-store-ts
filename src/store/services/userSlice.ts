import  { PayloadAction, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IProduct, IUser } from '../types';
import axios from 'axios';
import { BASE_URL } from '../../utils/constants';

export interface ItemCart {
  product: IProduct;
  quantities: number;
}

interface UserState {
  currentUser: IUser | null;
  cart: ItemCart[];
  favorites: IProduct[];
  formType: string;
  showForm: boolean;
}

export const createUser = createAsyncThunk(
  'users/createUser',
  async (payload, thunkApi) => {
    try {
      const res = await axios.post(`${BASE_URL}/users`, payload);
      return res.data;
    } catch(err) {
      console.log(err);
      return thunkApi.rejectWithValue(err);
    }
  }
)

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
    addItemToCart: (state, { payload }: PayloadAction<ItemCart>) => {
      const { product, quantities } = payload;
      const index = state.cart.findIndex((item) => item.product.id === product.id);
      if (index !== -1) {
        state.cart[index].quantities += quantities;
      } else {
        state.cart.push({ product, quantities })
      }
    },
    addItemToFavorites: (state, { payload }: PayloadAction<IProduct>) => {
      const isAlreadyFavorite = state.favorites.some((item) => item.id === payload.id);
      if (!isAlreadyFavorite) {
        state.favorites.push(payload);
      }
    },
    toggleForm: (state, { payload }: PayloadAction<boolean>) => {
      state.showForm = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, (state, { payload }) => {
      state.currentUser = payload;
    })
  }
})

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
