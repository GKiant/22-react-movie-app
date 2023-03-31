const MovieCard = ({ img, title, releaseDate, rating, overview }) => {
  return (
    <div className="card">
      <img className="card--image" src={img} alt={`${title} poster`} />
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
