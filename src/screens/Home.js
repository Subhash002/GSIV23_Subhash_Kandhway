import React from "react";
import { Movies } from "../components";
import {
  useGetUpcomingMoviesQuery,
  useSearchMoviesQuery,
} from "../services/movieAPISlice";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCurrentPage,
  incrementCurrentPage,
} from "../services/stateSlice";

const Home = ({ setSearchTerm }) => {
  const dispatch = useDispatch();
  const { searchTerm, currentPage } = useSelector((state) => state.stateSlice);
  const {
    data: upcomingMovies,
    isLoading: upcomingLoading,
    isError: upcomingError,
  } = useGetUpcomingMoviesQuery(currentPage, { skip: searchTerm !== null });
  const {
    data: searchedMovies,
    isLoading: searchLoading,
    isError: searchError,
  } = useSearchMoviesQuery(searchTerm, { skip: searchTerm === null });

  const moviesData = searchTerm ? searchedMovies : upcomingMovies;
  const isLoading = searchTerm ? searchLoading : upcomingLoading;
  const isError = searchTerm ? searchError : upcomingError;
  const handleGoBack = () => {
    setSearchTerm(null);
  };
  // Function to go to the next page
  const nextPage = () => {
    if (currentPage < moviesData?.total_pages) {
      dispatch(incrementCurrentPage());
    }
  };

  // Function to go to the previous page
  const prevPage = () => {
    if (currentPage > 1) {
      dispatch(decrementCurrentPage());
    }
  };
  return searchLoading || upcomingLoading ? (
    <div className="loading"></div>
  ) : (
    <main>
      {searchTerm && (
        <h3 style={{ marginTop: "10px", marginLeft: "20px" }}>
          You are seeing results for "{searchTerm}"{" "}
          <Link to={"/"} onClick={handleGoBack}>
            Go Back
          </Link>{" "}
        </h3>
      )}

      <Movies movies={moviesData} isLoading={isLoading} isError={isError} />
      <div style={{ textAlign: "center" }}>
        <button onClick={prevPage} className="buttonStyle">
          Previous
        </button>
        <span className="current-button">Page {currentPage}</span>
        <button onClick={nextPage} className="buttonStyle">
          Next
        </button>
      </div>
    </main>
  );
};

export default Home;
