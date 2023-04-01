import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { setStorage } from "./js/utils";
import SearchMovies from "./components/SearchMovies";
import MyWatchlist from "./components/MyWatchlist";
function App() {
  const [savedMovies, setSavedMovies] = useState(
    JSON.parse(localStorage.getItem("movies")) || []
  );
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
            />
          }
        />
        <Route
          path="/mywatchlist"
          element={
            <MyWatchlist
              savedMovies={savedMovies}
              setSavedMovies={setSavedMovies}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
