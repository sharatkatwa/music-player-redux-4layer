import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
  name: "player",
  initialState: {
    currentSong: null,
    isPlaying: false,
  },
  reducers: {
    play: (state) => {
      state.isPlaying = true;
    },
    pause: (state) => {
      state.isPlaying = false;
    },
    playNewSong: (state, action) => {
      state.currentSong = action.payload;
      state.isPlaying = true;
    },
  },
});

export default playerSlice.reducer;
export const { play, pause, playNewSong } = playerSlice.actions;
