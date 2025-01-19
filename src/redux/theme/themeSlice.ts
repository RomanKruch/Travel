import { createSlice } from '@reduxjs/toolkit';

export interface IThemeState {
  isDark: boolean;
}

const initialState: IThemeState = {
  isDark: false,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: state => {
      state.isDark = !state.isDark;
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
