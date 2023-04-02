import { Link } from "react-router-dom";
import EmptyPage from "./EmptyPage";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";

const MyWatchlist = ({
  savedMovies,
  setSavedMovies,
  lastMovieIndex,
  firstMovieIndex,
  currentPage,
  setCurrentPage,
  MOVIES_PER_PAGE,
}) => {
  const getMoviesElements = savedMovies
    .slice(firstMovieIndex, lastMovieIndex)
    .map((movie) => (
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

  const pagination = (
    <Pagination
      totalMovies={savedMovies.length}
      MOVIES_PER_PAGE={MOVIES_PER_PAGE}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    />
  );
  return (
    <div className="container">
      <div className="top-container">
        <Link to="/">
          <span className="link--text" onClick={() => setCurrentPage(1)}>
            Search Movies
          </span>
        </Link>
        <h1 className="title">My Watchlist</h1>
      </div>
      {pagination}
      {savedMovies.length ? (
        <div className="card-list">{getMoviesElements}</div>
      ) : (
        <EmptyPage text="Watchlist is empty" />
      )}
      {pagination}
    </div>
  );
};

export default MyWatchlist;
