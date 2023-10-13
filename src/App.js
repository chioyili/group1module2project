import "./App.css";
// import movieAPI from "./api/moveapi";
import MovieSelect from "./components/MovieSelect";
import MovieList from "./components/MovieList";
import Header from "./components/Header";
import ViewList from "./components/ViewList";

import { FavListProvider } from "./context/FavListContext";
import FavListContext from "./context/FavListContext";

import { useState, useEffect, useContext } from "react";
// import { useLoaderData } from "react-router-dom";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import MovieRandom from "./components/MovieRandom";

function App() {
  /* Route */
  const DefaultPage = () => <p>Nothing to see here</p>;

  return (
    <div className="App">
      <BrowserRouter>
        <FavListProvider>
          <Routes>
            <Route element={<Header />}>
              <Route path="/" element={<MovieSelect />}>
                <Route path=":genreN" element={<MovieRandom />} >
                  <Route path="random" element={<MovieRandom />} />
                </Route>
                <Route path=":genreN" element={<MovieList />} >
                  <Route path="list" element={<MovieList />} />
                </Route>
              </Route>
              <Route path="mylist" element={<ViewList />} />
              <Route path="*" element={<DefaultPage />} />
            </Route>
          </Routes>
        </FavListProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

<FavListProvider>
  <Header />
  <MovieSelect />
  <MovieList />
  <ViewList />
</FavListProvider>