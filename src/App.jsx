import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { setStorage } from "./js/utils";
import SearchMovies from "./components/SearchMovies";
import MyWatchlist from "./components/MyWatchlist";

function App() {
  const [savedMovies, setSavedMovies] = useState(
    JSON.parse(localStorage.getItem("movies")) || []
  );
  const [currentPage, setCurrentPage] = useState(1);

  const MOVIES_PER_PAGE = 8;
  const lastMovieIndex = currentPage * MOVIES_PER_PAGE;
  const firstMovieIndex = lastMovieIndex - MOVIES_PER_PAGE;

  useEffect(() => {
    setStorage(savedMovies);
  }, [savedMovies]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <SearchMovies
              savedMovies={savedMovies}
              setSavedMovies={setSavedMovies}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              lastMovieIndex={lastMovieIndex}
              firstMovieIndex={firstMovieIndex}
              MOVIES_PER_PAGE={MOVIES_PER_PAGE}
            />
          }
        />
        <Route
          path="/mywatchlist"
          element={
            <MyWatchlist
              savedMovies={savedMovies}
              setSavedMovies={setSavedMovies}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              lastMovieIndex={lastMovieIndex}
              firstMovieIndex={firstMovieIndex}
              MOVIES_PER_PAGE={MOVIES_PER_PAGE}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
