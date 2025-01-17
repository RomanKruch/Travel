import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
//import tagsReducer from './tags/tagsSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import IUserState  from '../types/IUserState';

const userPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    user: persistReducer<IUserState>(userPersistConfig, userReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: true,
});

export type IState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store);
