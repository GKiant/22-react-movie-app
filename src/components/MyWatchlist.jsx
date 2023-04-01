import { Link } from "react-router-dom";
import EmptyPage from "./EmptyPage";
import MovieCard from "./MovieCard";

const MyWatchlist = ({ savedMovies, setSavedMovies }) => {
  const getMoviesElements = savedMovies.map((movie) => (
    <MovieCard
      key={movie.id}
      id={movie.id}
      img={movie.img}
      title={movie.title}
      releaseDate={movie.release_date}
      rating={movie.vote_average}
      overview={movie.overview}
      setSavedMovies={setSavedMovies}
      savedMovies={savedMovies}
    />
  ));
  return (
    <div className="container">
      <div className="top-container">
        <Link to="/">
          <span className="link--text">Search Movies</span>
        </Link>
        <h1 className="title">My Watchlist</h1>
      </div>
      {savedMovies.length ? (
        <div className="card-list">{getMoviesElements}</div>
      ) : (
        <EmptyPage text="Watchlist is empty" />
      )}
    </div>
  );
};

export default MyWatchlist;
