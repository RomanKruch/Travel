import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
import { IState } from '../store';
import ITourItem from '../../types/ITourItem';
import { ISign, IUserInfoSing, ILogin, IUserInfo, IRefresh } from './types';

import toursBase from '../../data/tours.json';

// const token = {
//   set(token: string) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unSet() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

export const onSignUp = createAsyncThunk<ISign, IUserInfoSing, { rejectValue: null }>(
  'user/signUp',
  async (userInfo, { rejectWithValue }) => {
    try {
      //example

      const { email, name } = userInfo;

      const res = {
        user: {
          name,
          email,
        },
        token: '123',
      };
      return res;

      // const { data } = await axios.post('/auth/register', userInfo);
      // token.set(data.data.token);
      // return data.data;
    } catch {
      return rejectWithValue(null);
    }
  },
);

export const onLogin = createAsyncThunk<ILogin, IUserInfo, { rejectValue: null }>(
  'user/login',
  async (userInfo, { rejectWithValue }) => {
    try {
      //example
      const { email } = userInfo;

      const res = {
        user: {
          name: 'user',
          email,
        },
        token: '123',
        likedTours: [],
      };
      return res;
      // const { data } = await axios.post('/auth/login', userInfo);
      // token.set(data.data.token);
      // return {
      //   ...data.data,
      //   cart: data.data.cart.map((item: IProduct) => ({ ...item, qty: 1 })),
      //   liked: data.data.liked,
      // };
    } catch {
      return rejectWithValue(null);
    }
  },
);

export const onLogout = createAsyncThunk<void, void, { rejectValue: null }>(
  'user/logout',
  async (_, { rejectWithValue }) => {
    try {
      return;
      // await axios.post('/auth/logout');
      // token.unSet();
    } catch {
      return rejectWithValue(null);
    }
  },
);

export const onRefresh = createAsyncThunk<IRefresh, void, { state: IState; rejectValue: null }>(
  'user/refresh',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistToken = state.user.token;

    if (persistToken === null) {
      return rejectWithValue(null);
    }

    try {
      //example
      const res = {
        userInfo: {
          name: 'user',
          email: 'user@ex.com',
        },
        token: persistToken,
        likedTours: [],
      };

      return res;
      //   token.set(persistToken);
      //   const {
      //     data: { data },
      //   } = await axios.get('/auth/refresh');
      //   return {
      //     userInfo: { ...data.user },
      //     token: persistToken,
      //     likedTours: data.liked,
      //   };
    } catch {
      return rejectWithValue(null);
    }
  },
);

export const onAddToLike = createAsyncThunk<ITourItem, string, { rejectValue: null }>(
  'user/addTourToLiked',
  async (tourId, { rejectWithValue }) => {
    try {
      const tour = toursBase.find(({ id }) => id === tourId)!;
      return tour;

      // const { data } = await axios.post('/liked', { productId });
      // return data.data.newProduct;
    } catch {
      return rejectWithValue(null);
    }
  },
);

export const onDeleteFromLike = createAsyncThunk<string, string, { rejectValue: null }>(
  'user/deleteTourFromLiked',
  async (tourId, { rejectWithValue }) => {
    try {
      // await axios.delete(`/liked/${productId}`);
      return tourId;
    } catch {
      return rejectWithValue(null);
    }
  },
);
