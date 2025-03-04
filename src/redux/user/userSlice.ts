import { createSlice } from '@reduxjs/toolkit';
import { onSignUp, onLogin, onLogout, onRefresh, onLikeTour, onEditUser } from './userOperations';
import IUserState from '../../types/IUserState';

const initialState: IUserState = {
  userInfo: {
    name: null,
    email: null,
  },
  token: null,
  isLogging: false,
  isLogged: false,
  totalToursViewed: 0,
  likedTours: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    onAccDelete() {
      return initialState;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(onSignUp.pending, state => ({
        ...state,
        isLogging: true,
      }))

      .addCase(onSignUp.fulfilled, (_, { payload }) => ({
        ...initialState,
        ...payload,
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
        ...payload,
        isLogged: true,
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
        ...payload,
        isLogged: true,
      }))

      .addCase(onRefresh.rejected, state => ({
        ...state,
        isLogging: false,
      }))

      .addCase(onLikeTour.fulfilled, (state, { payload }) => {
        if (typeof payload === 'string') {
          return {
            ...state,
            likedTours: state.likedTours.filter(item => item._id !== payload),
          };
        }

        return {
          ...state,
          likedTours: [...state.likedTours, payload],
        };
      })

      .addCase(onEditUser.pending, state => ({
        ...state,
        isLogging: true,
      }))

      .addCase(onEditUser.fulfilled, (state, { payload }) => ({
        ...state,
        userInfo: payload,
        isLogging: false,
      }))

      .addCase(onEditUser.rejected, state => ({
        ...state,
        isLogging: false,
      }));
  },
});

export const { onAccDelete } = userSlice.actions;

export default userSlice.reducer;
