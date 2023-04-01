import { useEffect, useState } from "react";

const MovieCard = ({ img, title, releaseDate, rating, overview }) => {
  const [showWatchlistText, setShowWatchlistText] = useState(false);

  useEffect(() => {
    if (showWatchlistText) {
      const timeoutId = setTimeout(() => {
        setShowWatchlistText(false);
      }, 1500);
      return () => clearTimeout(timeoutId);
    }
  }, [showWatchlistText]);

  return (
    <div className="card">
      <div className="card--image_container">
        <img className="card--image" src={img} alt={`${title} poster`} />
        <button
          className={`${
            showWatchlistText ? "added-button" : "add-button"
          } button`}
          onClick={() => setShowWatchlistText(true)}
          disabled={showWatchlistText}
        >
          {showWatchlistText ? "Added" : "Add to Watchlist"}
        </button>
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
