import { useState } from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import EmptyPage from "./EmptyPage";

const SearchMovies = ({ savedMovies, setSavedMovies }) => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();
    const url = `https://api.themoviedb.org/3/search/movie?api_key=00e713a08afd3adb87c85b8e3ce596a0&query=${query}&page=1&include_adult=false`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const getMoviesElements = movies
    .filter((movie) => movie.poster_path && movie.overview)
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

  return (
    <div className="container">
      <div className="top-container">
        <Link to="/mywatchlist">
          <span className="link--text">My Watchlist</span>
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

      {!movies.length ? (
        <EmptyPage text="Start Exploring" />
      ) : (
        <div className="card-list">{getMoviesElements}</div>
      )}
    </div>
  );
};

export default SearchMovies;
