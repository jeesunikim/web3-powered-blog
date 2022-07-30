import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { reducer as paymentReducer } from "store/slices/paymentSlice";
import { reducer as userWalletSettingReducer } from "store/slices/userWalletSettingSlice";
import { reducer as blogSettingReducer } from "store/slices/blogSettingSlice";

export const store = configureStore({
  reducer: {
    payment: paymentReducer,
    userWalletSetting: userWalletSettingReducer,
    blogSetting: blogSettingReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
