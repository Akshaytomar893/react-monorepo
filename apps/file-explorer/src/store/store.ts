import { configureStore } from "@reduxjs/toolkit";
import dataSliceReducer from "../slices/data-slice";
export const store = configureStore({
  reducer: {
    appState: dataSliceReducer,
  },
});

// Infer RootState and AppDispatch types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
