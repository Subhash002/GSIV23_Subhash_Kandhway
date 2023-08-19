import { createSlice } from "@reduxjs/toolkit";

const stateSlice = createSlice({
  name: "searchTerm",
  initialState: { searchTerm: null, currentPage: 1 },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    clearSearchTerm: (state) => {
      state.searchTerm = null;
    },
    incrementCurrentPage: (state) => {
      state.currentPage += 1;
    },
    decrementCurrentPage: (state) => {
      state.currentPage -= 1;
    },
  },
});

export const {
  setSearchTerm,
  clearSearchTerm,
  incrementCurrentPage,
  decrementCurrentPage,
} = stateSlice.actions;

export default stateSlice.reducer;
