<<<<<<< HEAD
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit;;
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
=======
import { createSlice } from '@reduxjs/toolkit;'';
import type { PayloadAction } from '@reduxjs/toolkit;'
;'';
export interface AuthState {;;
  token: "string | null;",;";";";";""
  isLoggedIn: "boolean;";";";""
};";";";""
;";";";";"";
const initialState: unknown "AuthState = {;",;";";";";""
  token: "null",;";";";";""
  isLoggedIn: "false",;";""
};";";""
;";";";"";
const authSlice: unknown = createSlice({;";,";";";""
  name: 'auth',;'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
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
<<<<<<< HEAD
})'
;
export const { setToken, clearAuth } = authSlice.actions;
export default authSlice.reducer'
'''''
=======
});''
;
export const { setToken, clearAuth } = authSlice.actions;
export default authSlice.reducer;''
''''''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
