<<<<<<< HEAD
import { createSlice, PayloadAction } from '@reduxjs/toolkit;

interface AuthState {
  token: string | null;

const initialState: AuthState = {
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    clearToken: (state) => {
      state.token = null;
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;
export default authSlice.reducer;
=======
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit;
'
export interface AuthState {
  token: "string | null"
  isLoggedIn: "boolean"
}"
;"
const initialState: unknown "AuthState = {;"
  token: "null"
  isLoggedIn: false,;"
};"
;"
const authSlice = createSlice({;";,"
  name: 'auth',;';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
