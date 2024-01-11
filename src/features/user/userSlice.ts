import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ICartItem, IProduct, IUser } from '../types/types';
import axios from 'axios';
import { BASE_URL } from '../../utils/constants';

interface UserState {
  currentUser: IUser | undefined;
  cart: ICartItem[];
  favourites: IProduct[];
  isLoading: boolean;
  formType: string,
  showForm: boolean,
}

const initialState: UserState = {
  currentUser: undefined,
  cart: [],
  favourites: [],
  isLoading: false,
  formType: 'signup',
  showForm: false,
}

export const createUser = createAsyncThunk(
  'users/createUser',
  async (payload: IUser, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}/users/`, payload);
      return response.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err)
    }
  }
)

export const loginUser = createAsyncThunk(
  'users/loginUser',
  async (payload: Partial<IUser>, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, payload);
      const login = await axios(`${BASE_URL}/auth/profile`, {
        headers: {
          Authorization: `Bearer ${response.data.access_token}`,
        }
      });
      return login.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err)
    }
  }
)

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
    toggleForm: (state, { payload }:  PayloadAction<boolean>) => {
      state.showForm = payload;
    },
    toggleFormType: (state, { payload }:  PayloadAction<string>) => {
      state.formType = payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, (state, { payload }) => {
      state.currentUser = payload;
    });
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.currentUser = payload;
    });
  }
});

export const { addProductToCart, toggleForm, toggleFormType } = userSlice.actions;

export default userSlice.reducer;