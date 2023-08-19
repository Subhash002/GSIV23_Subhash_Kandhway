import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { movieAPI } from "./services/movieAPISlice";
import stateSliceReducer from "./services/stateSlice";

export const store = configureStore({
  reducer: {
    [movieAPI.reducerPath]: movieAPI.reducer,
    stateSlice: stateSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieAPI.middleware),
});

setupListeners(store.dispatch);
