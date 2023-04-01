const MovieCard = ({
  id,
  img,
  title,
  releaseDate,
  rating,
  overview,
  setSavedMovies,
  savedMovies,
}) => {
  const isAdded = savedMovies.find((movie) => movie.id === id);

  const addToWatchlist = () => {
    const savedMovie = {
      id,
      img,
      title,
      release_date: releaseDate,
      vote_average: rating,
      overview,
    };

    setSavedMovies((prevMovies) => [...prevMovies, savedMovie]);
  };

  const removeFromWatchlist = () => {
    const updatedList = savedMovies.filter((movie) => movie.id !== id);
    setSavedMovies(updatedList);
  };

  return (
    <div className="card">
      <div className="card--image_container">
        <img className="card--image" src={img} alt={`${title} poster`} />
        {isAdded ? (
          <button
            className="remove-button button"
            onClick={removeFromWatchlist}
          >
            Remove
          </button>
        ) : (
          <button className="add-button button" onClick={addToWatchlist}>
            Add to Watchlist
          </button>
        )}
      </div>

      <div className="card--content">
        <h3 className="card--title">{title}</h3>
        <p>
          <small>RELEASE DATE: {releaseDate}</small>
        </p>
        <p>
          <small>RATING: {rating}</small>
        </p>
        <p className="card--desc">{overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
