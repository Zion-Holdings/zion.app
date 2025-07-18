import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
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
  name: 'auth',;