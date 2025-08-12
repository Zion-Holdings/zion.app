import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  token: string | null;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string | null>) {
      state.token = action.payload;
      state.isLoggedIn = !!action.payload;
    },
    clearAuth(state) {
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setToken, clearAuth } = authSlice.actions;
export default authSlice.reducer;
