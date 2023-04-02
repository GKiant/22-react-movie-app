import { useState } from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import EmptyPage from "./EmptyPage";
import Pagination from "./Pagination";

const SearchMovies = ({
  savedMovies,
  setSavedMovies,
  lastMovieIndex,
  firstMovieIndex,
  currentPage,
  setCurrentPage,
  MOVIES_PER_PAGE,
}) => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();
    const url = `https://api.themoviedb.org/3/search/movie?api_key=00e713a08afd3adb87c85b8e3ce596a0&query=${query}&include_adult=false`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
      console.log(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const getMoviesElements = movies
    .filter((movie) => movie.poster_path && movie.overview)
    .slice(firstMovieIndex, lastMovieIndex)
    .map((movie) => (
      <MovieCard
        key={movie.id}
        id={movie.id}
        img={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
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
      totalMovies={
        movies.filter((movie) => movie.poster_path && movie.overview).length
      }
      MOVIES_PER_PAGE={MOVIES_PER_PAGE}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    />
  );

  return (
    <div className="container">
      <div className="top-container">
        <Link to="/mywatchlist">
          <span className="link--text" onClick={() => setCurrentPage(1)}>
            My Watchlist
          </span>
        </Link>
        <h1 className="title">Movie Search</h1>
        <form className="form" onSubmit={searchMovies}>
          <label htmlFor="query" className="label">
            Movie title
          </label>
          <input
            type="text"
            name="query"
            className="query--input"
            placeholder="i.e. John Wick 4"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="submit-button button" type="submit">
            Search
          </button>
        </form>
      </div>
      {pagination}
      {!movies.length ? (
        <EmptyPage text="Start Exploring" />
      ) : (
        <div className="card-list">{getMoviesElements}</div>
      )}
      {pagination}
    </div>
  );
};

export default SearchMovies;
