const Pagination = ({
  totalMovies,
  MOVIES_PER_PAGE,
  currentPage,
  setCurrentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalMovies / MOVIES_PER_PAGE); i++) {
    pages.push(i);
  }

  const getPagesElements = pages.map((page, i) => (
    <button
      key={i}
      className={
        page === currentPage
          ? "pagination--button_active"
          : "pagination--button"
      }
      onClick={() => setCurrentPage(page)}
    >
      {page}
    </button>
  ));
  return <div className="pagination-container">{getPagesElements}</div>;
};

export default Pagination;
