import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "store";

export interface BlogSettingState {
  sharedTopics: Array<String>;
}

const initialState = {
  sharedTopics: [],
} as BlogSettingState;

const slice = createSlice({
  name: "blogSetting",
  initialState,
  reducers: {
    setSharedTopics: (
      state,
      { payload: sharedTopics }: { payload: Array<String> },
    ) => {
      state.sharedTopics = sharedTopics;
    },

    resetSharedTopics: () => initialState,
  },
});

export const { reducer } = slice;
export const { setSharedTopics, resetSharedTopics } = slice.actions;

export const selectSetSharedTopics = (state: RootState) =>
  state.blogSetting.sharedTopics;
