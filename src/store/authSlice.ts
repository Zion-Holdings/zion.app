import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit;
'
export interface AuthState {;
  token: "string | null;"
  isLoggedIn: "boolean;"
};"
;"
const initialState: unknown "AuthState = {;"
  token: "null"
  isLoggedIn: "false",;"
};"
;"
const const authSlice = createSlice({;";,"
  name: 'auth',;
  initialState,;
  reducers: {;
    setToken(state, action: PayloadAction<string | null>) {;
      state.token = action.payload;
      state.isLoggedIn = !!action.payload;
    },;
    clearAuth(state) {;
      state.token = null;
      state.isLoggedIn = false;
    },;
  },;
})'
;
export const { setToken, clearAuth } = authSlice.actions;
export default authSlice.reducer'
'''''