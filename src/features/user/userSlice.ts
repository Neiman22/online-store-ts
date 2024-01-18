import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ICartItem, IProduct, IUser } from '../types/types';
import axios from 'axios';
import { BASE_URL } from '../../utils/constants';

export enum TypesForm {
  login = 'login',
  signup = 'signup'
}

interface UserState {
  currentUser: IUser | undefined;
  cart: ICartItem[];
  favourites: IProduct[];
  isLoading: boolean;
  formType: TypesForm,
  showForm: boolean,
}

const initialState: UserState = {
  currentUser: undefined,
  cart: [],
  favourites: [],
  isLoading: false,
  formType: TypesForm.signup,
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

export const updateUser = createAsyncThunk(
  "users/updateUser",
  async (payload: IUser, thunkAPI) => {
    try {
      const res = await axios.put(`${BASE_URL}/users/${payload.id}`, payload);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

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
    changeQuantityToCart: (state, { payload }: PayloadAction<ICartItem>) => {
      const existProduct = state.cart.find(item => item.product.id === payload.product.id);
      if (existProduct) existProduct.quantity = payload.quantity;
    },
    removeProductFromCart: (state, { payload }: PayloadAction<IProduct>) => {
      state.cart = state.cart.filter((item) => item.product.id !== payload.id);
    },
    addProductToFavourites: (state, { payload }: PayloadAction<IProduct>) => {
      state.favourites.push(payload);
    },
    removeProductFromFavourites: (state, { payload }: PayloadAction<IProduct>) => {
      state.favourites = state.favourites.filter((item) => item.id !== payload.id);
    },
    toggleForm: (state, { payload }:  PayloadAction<boolean>) => {
      state.showForm = payload;
    },
    toggleFormType: (state, { payload }:  PayloadAction<TypesForm>) => {
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
    builder.addCase(updateUser.fulfilled, (state, { payload }) => {
      state.currentUser = payload;
    });
  }
});

export const { 
  addProductToCart, 
  changeQuantityToCart, 
  removeProductFromCart,
  addProductToFavourites,
  removeProductFromFavourites,
  toggleForm, 
  toggleFormType 
} = userSlice.actions;

export default userSlice.reducer;