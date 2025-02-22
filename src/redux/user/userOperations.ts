import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IState } from '../store';
import ITourItem from '../../types/ITourItem';
import { ISign, IUserInfoSing, ILogin, IUserInfo, IRefresh, IDeletedTour } from './types';

const token = {
  set(token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unSet() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const onSignUp = createAsyncThunk<ISign, IUserInfoSing, { rejectValue: null }>(
  'user/signUp',
  async (userBody, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/register', userBody);
      token.set(data.token);
      return data;
    } catch {
      return rejectWithValue(null);
    }
  },
);

export const onLogin = createAsyncThunk<ILogin, IUserInfo, { rejectValue: null }>(
  'user/login',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/login', userData);
      token.set(data.token);
      return data;
    } catch {
      return rejectWithValue(null);
    }
  },
);

export const onLogout = createAsyncThunk<void, void, { rejectValue: null }>(
  'user/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/auth/logout');
      token.unSet();
      return;
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
      token.set(persistToken);
      const { data } = await axios.get('/auth/refresh');
      return data;
    } catch {
      return rejectWithValue(null);
    }
  },
);

export const onLikeTour = createAsyncThunk<ITourItem | string, string, { rejectValue: null }>(
  'user/likeTour',
  async (tourId, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/users/like/${tourId}`);
      if (data.id) {
        return data.id;
      }

      return data;
    } catch {
      return rejectWithValue(null);
    }
  },
);