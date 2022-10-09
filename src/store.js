import { confirgureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";

export const store = confirgureStore({
  reducer: {
    user: userSlice,
  },
});
