import { useParams } from "react-router";
import {
  useGetCreditsByIdQuery,
  useGetMovieByIdQuery,
} from "../services/movieAPISlice";

const SingleMovie = () => {
  const { id } = useParams();
  const { data: movie, isLoading } = useGetMovieByIdQuery(id);
  const { data: creditData, isLoading: creditLoading } =
    useGetCreditsByIdQuery(id);

  const { crew, cast } = !creditLoading && creditData;

  let casts = cast?.map((obj) => obj?.name);
  let crews = crew
    ?.map((obj) => {
      if (obj.known_for_department === "Directing") return obj.name;
      return null;
    })
    .filter((i) => i !== null);

  const imageUrl = `https://image.tmdb.org/t/p/w500${movie?.poster_path}`;
  return isLoading ? (
    <div className="loading"></div>
  ) : (
    <div className="movie-details-wrapper">
      <img
        src={imageUrl || "https://demofree.sirv.com/nope-not-here.jpg"}
        alt={movie?.title}
        style={{ width: "300px" }}
        className="movie-image"
      />
      <div className="movie-info">
        <h2 className="movie-title-label">
          {movie?.title}
          <span className="movie-rating-label" style={{ color: "#9B9B9B" }}>
            {" "}
            ({movie?.vote_average.toFixed(1)})
          </span>
        </h2>
        <p className="movie-year-length-director-label">
          {new Date(movie?.release_date).getFullYear()} | Length:{" "}
          {movie?.runtime} mins | Directors: {crews?.join(", ")}
        </p>
        <p className="movie-cast-label">Casts: {casts?.join(", ")}</p>
        <p className="movie-description-label">
          Description: {movie?.overview}
        </p>
      </div>
    </div>
  );
};

export default SingleMovie;
