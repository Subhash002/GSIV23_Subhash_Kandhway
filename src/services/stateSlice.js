import { createSlice } from "@reduxjs/toolkit";

const stateSlice = createSlice({
  name: "searchTerm",
  initialState: { searchTerm: null, currentPage: 1 },
  reducers: {
    setSearchTerm: (state, action) => {
      state.term = action.payload;
      console.log(action.payload);
    },
    clearSearchTerm: (state) => {
      state.term = null;
    },
    incrementCurrentPage: (state) => {
      state.currentPage += 1;
      console.log(state.currentPage);
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
