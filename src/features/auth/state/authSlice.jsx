import { createSlice } from "@reduxjs/toolkit";
import { storage } from "../../../utils/storage";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loggedinUser: storage.get("login user") || null,
    registeredUsers: storage.get("all users") || [],
  },
  reducers: {
    registerAction: (state, action) => {
      let users = state.registeredUsers;
      users.push(action.payload);
      storage.set("all users", users);
      state.loggedinUser = action.payload;
      storage.set("login user", action.payload);

      return;
    },
    loginAction: (state, action) => {
      storage.set("login user", action.payload);
      state.loggedinUser = action.payload;

      return;
    },
  },
});

export default authSlice.reducer;
export const { registerAction, loginAction } = authSlice.actions;
