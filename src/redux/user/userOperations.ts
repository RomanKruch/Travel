import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IState } from '../store';
import ITourItem from '../../types/ITourItem';
import {
  ISign,
  IUserDataLogin,
  ILogin,
  IUserDataSign,
  IRefresh,
  IUserInfo,
} from './types';
import { addNotification } from '../notifications/notificationsSlice';

const token = {
  set(token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unSet() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const onSignUp = createAsyncThunk<ISign, IUserDataSign, { rejectValue: null }>(
  'user/signUp',
  async (userBody, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.post('/auth/register', userBody);
      token.set(data.token);
      dispatch(addNotification({ message: 'Sign up successful!', type: 'success' }));
      return data;
    } catch (err: any) {
      const { message } = err?.response.data;
      dispatch(addNotification({ message, type: 'error' }));
      return rejectWithValue(null);
    }
  },
);

export const onLogin = createAsyncThunk<ILogin, IUserDataLogin, { rejectValue: null }>(
  'user/login',
  async (userData, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.post('/auth/login', userData);
      token.set(data.token);
      dispatch(addNotification({ message: 'Log in successful!', type: 'success' }));
      return data;
    } catch (err: any) {
      const { message } = err?.response.data;
      dispatch(addNotification({ message, type: 'error' }));
      return rejectWithValue(null);
    }
  },
);

export const onLogout = createAsyncThunk<void, void, { rejectValue: null }>(
  'user/logout',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      await axios.post('/auth/logout');
      token.unSet();
      dispatch(addNotification({ message: 'Logout successful!', type: 'info' }));
      return;
    } catch (err: any) {
      const { message } = err?.response.data;
      dispatch(addNotification({ message, type: 'error' }));
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
  async (tourId, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.post(`/users/like/${tourId}`);
      if (data.id) {
        return data.id;
      }

      return data;
    } catch (err: any) {
      const { message } = err?.response.data;
      dispatch(addNotification({ message, type: 'error' }));
      return rejectWithValue(null);
    }
  },
);

export const onEditUser = createAsyncThunk<IUserInfo, IUserInfo, { rejectValue: null }>(
  'user/edit',
  async (userData, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.patch('/users', userData);
      dispatch(addNotification({ message: 'Edit successful!', type: 'success' }));
      return data.userInfo;
    } catch (err: any) {
      const { message } = err?.response.data;
      dispatch(addNotification({ message, type: 'error' }));
      return rejectWithValue(null);
    }
  },
);