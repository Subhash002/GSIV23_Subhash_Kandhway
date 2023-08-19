import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const movieAPI = createApi({
  reducerPath: "movieAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3",
    prepareHeaders: (headers) => {
      headers.set("accept", "application/json");
      headers.set(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYTM3YzQyZDZmY2VjNTlkMTFlZjZlOGJjYWIyOGFlMSIsInN1YiI6IjY0ZGQ4NmJhMzcxMDk3MDBjNTFkOWE4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GI5z926OePYwlA2Bo61VCDmUDbzDiQ1rQ1dtjdnhAeE"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUpcomingMovies: builder.query({
      query: (page = 1) => `movie/upcoming?language=en-US&page=${page}`,
    }),
    searchMovies: builder.query({
      query: (searchTerm) => `search/movie?query=${searchTerm}`,
    }),
    getMovieById: builder.query({
      query: (id) => `movie/${id}?language=en-US`,
    }),
    getCreditsById: builder.query({
      query: (id) => `movie/${id}/credits?language=en-US`,
    }),
  }),
});

export const {
  useGetCreditsByIdQuery,
  useGetUpcomingMoviesQuery,
  useSearchMoviesQuery,
  useGetMovieByIdQuery,
} = movieAPI;
