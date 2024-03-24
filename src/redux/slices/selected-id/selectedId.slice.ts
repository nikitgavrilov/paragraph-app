import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface InitialState {
  id: null | string;
}

const initialState: InitialState = { id: null };

export const selectedIdSlice = createSlice({
  name: "selectedIdSlice",
  initialState,
  reducers: {
    setPostIdToEdit: (state, { payload: id }: PayloadAction<null | string>) => {
      state.id = id;
    },
  },
});

export const { actions, reducer } = selectedIdSlice;
