import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieList = ({ movies, isError, isLoading }) => {
  let results;
  if (!isLoading && movies) {
    results = movies.results;
  }
  if (isError) {
    return <h1>There is an error fetching the data</h1>;
  }
  if (isLoading || !movies) {
    return <div className="loading"></div>;
  }
  return (
    <div className="movie-list">
      {results?.map((movie) => (
        <Link key={movie.id} to={`/movies/${movie.id}`}>
          <MovieCard movie={movie} />
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
