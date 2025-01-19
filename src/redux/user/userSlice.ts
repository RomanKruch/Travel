import { createSlice } from '@reduxjs/toolkit';
import {
  onSignUp,
  onLogin,
  onLogout,
  onRefresh,
  onAddToLike,
  onDeleteFromLike,
} from './userOperations';
import IUserState from '../../types/IUserState';

const initialState: IUserState = {
  userInfo: {
    name: null,
    email: null,
  },
  token: null,
  isLogging: false,
  isLogged: false,
  likedTours: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(onSignUp.pending, state => ({
        ...state,
        isLogging: true,
      }))

      .addCase(onSignUp.fulfilled, (_, { payload }) => ({
        ...initialState,
        userInfo: payload.user,
        token: payload.token,
        isLogged: true,
      }))

      .addCase(onSignUp.rejected, state => ({
        ...state,
        isLogging: false,
      }))

      .addCase(onLogin.pending, state => ({
        ...state,
        isLogging: true,
      }))

      .addCase(onLogin.fulfilled, (_, { payload }) => ({
        ...initialState,
        userInfo: payload.user,
        token: payload.token,
        isLogged: true,
        likedTours: payload.likedTours,
      }))

      .addCase(onLogin.rejected, state => ({
        ...state,
        isLogging: false,
      }))

      .addCase(onLogout.fulfilled, () => ({
        ...initialState,
      }))

      .addCase(onRefresh.pending, state => ({
        ...state,
        isLogging: true,
      }))

      .addCase(onRefresh.fulfilled, (_, { payload }) => ({
        ...initialState,
        userInfo: payload.userInfo,
        token: payload.token,
        likedTours: payload.likedTours,
        isLogged: true,
      }))

      .addCase(onRefresh.rejected, state => ({
        ...state,
        isLogging: false,
      }))

      .addCase(onAddToLike.fulfilled, (state, { payload }) => ({
        ...state,
        likedTours: [...state.likedTours, payload],
      }))

      .addCase(onDeleteFromLike.fulfilled, (state, { payload }) => ({
        ...state,
        likedTours: state.likedTours.filter(item => item.id !== payload),
      }));
  },
});

export default userSlice.reducer;