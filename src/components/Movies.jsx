import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieList = ({ movies, isError, isLoading }) => {
  const { results } = !isLoading && movies;

  if (isError) {
    <h1>There is an error fetching the data</h1>;
  }
  if (isLoading || !movies) {
    <h1>Loading...</h1>;
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
