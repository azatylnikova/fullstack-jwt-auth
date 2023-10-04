import { createSlice } from "@reduxjs/toolkit";
import { IAuth } from "../../models/IAuth";

interface AuthState {
  user: any;
  token: any;
}
const initialState: AuthState = {
  user: null,
  token: null
};
const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.token = accessToken;
    },
    logOut: (state, action) => {
      const { user, accessToken } = action.payload;
      state.user = null;
      state.token = null;
    }
  }
});

export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;
