import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  CurrentSong: 0,
};

export const SongSlice = createSlice({
  name: "SongSlice",
  initialState,
  reducers: {
    setNextSong: (state) => {
      state.CurrentSong = state.CurrentSong += 1;
    },
    setPreviousSong: (state) => {
      if ((state.CurrentSong === 0)) {
        state.CurrentSong = state.CurrentSong = 0;
      } else {
        state.CurrentSong = state.CurrentSong -= 1;
      }
    },
    resetSongs: (state) => {
      state.CurrentSong = state.CurrentSong = 0;
    },
  },
});
