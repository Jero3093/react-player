import { configureStore } from "@reduxjs/toolkit";
import { SongSlice } from "./SongSlice";

export const store = configureStore({
  reducer: {
    SongSlice: SongSlice.reducer,
  },
});
