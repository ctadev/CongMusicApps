import { createSlice } from "@reduxjs/toolkit";
import data from '../data'

const currentSongSlice = createSlice({
  name: "currentsongs",
  initialState: data[0],
  reducers: {
    selectSong: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { selectSong } = currentSongSlice.actions;

export default currentSongSlice.reducer;
