const MovieCard = ({ movie }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <div className="movie-card">
      <img
        src={imageUrl || "https://demofree.sirv.com/nope-not-here.jpg"}
        alt={movie?.original_title}
      />
      <div className="movie-details">
        <div className="title-rating">
          <p className="movie-title">
            {movie?.original_title.split(" ").slice(0, 4).join(" ")}
          </p>
          <p className="movie-rating">({movie?.vote_average})</p>
        </div>
        <p className="movie-description">
          {movie?.overview.split(" ").splice(0, 10).join(" ")}...
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
