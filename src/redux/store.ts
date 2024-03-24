"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { api } from "./api/api";
import { reducer as modalReducer } from "./slices/modal/modal.slice";
import { reducer as selectedIdReducer } from "./slices/selected-id/selectedId.slice";

const rootReducer = combineReducers({
  modalReducer,
  selectedIdReducer,
  [api.reducerPath]: api.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
