import { createSlice } from "@reduxjs/toolkit";

const playingSlice = createSlice({
  name: "playing",
  initialState: false,
    reducers: {
        togglePlaying: (state) => {
            return (!state)
        },
        setPlaying: (state, action) => {
            return (state = action.payload)
        }
  },
});

export const { togglePlaying, setPlaying } = playingSlice.actions;

export default playingSlice.reducer;
