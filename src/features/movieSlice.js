import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movie: null,
  },
  reducers: {
    MainingMovie: (state, action) => {
      state.movie = action.payload;
    },
    bannerMovie: (state, action) => {
      state.movie.banner = action.payload;
    },
  },
});

export const { MainingMovie, bannerMovie } = movieSlice.actions;

export const selectMovie = (state) => state.movie.movie;

export default movieSlice.reducer;
