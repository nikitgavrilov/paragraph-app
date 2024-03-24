import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isActive: false,
  mode: "add" as "add" | "edit",
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal: (state, { payload: prev }: PayloadAction<boolean>) => {
      state.isActive = prev;
    },
    toggleMode: (state, { payload: currentMode }: PayloadAction<"add" | "edit">) => {
      state.mode = currentMode;
    },
  },
});

export const { actions, reducer } = modalSlice;
