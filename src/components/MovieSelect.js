import styles from './MovieSelect.module.css';
import "../App.css";
import { NavLink, useParams, Outlet } from "react-router-dom";

import { useEffect, useContext } from "react";
import FavListContext from "../context/FavListContext";
import MovieList from './MovieList';
import MovieRandom from './MovieRandom';

function MovieSelect() {
  // const {genreN} = useParams();

  const {
    isLoading,
    movieData,
    setMovieData,
    selectMovieHandler,
    genreSelect,
    randomSelect,
    movieListSelect,
    setGenreSelect,
    setRandomSelect,
    setMovieListSelect,
    genreNav
  } = useContext(FavListContext);

  return (
    <div>
      {isLoading ? (
        <p>⏳ Loading ...</p>
      ) : (
        movieData.length === 0 && <p>No data loaded.</p>
      )}

      <h1 className={styles.header}>Movie Randomizer!</h1>
      <h3>What do you want to watch today?</h3>

      <div>
        {genreNav.map((item) => (
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.selectbutton : styles.button
            }
            // style={({ isActive }) => ({
            //   isActive && linkActive
            // })}
            to={`/${item.toLowerCase()}`}
            key={item}
            onClick={() => selectMovieHandler(item.toLowerCase())}
          >
            {item}
          </NavLink>
        ))}
        </div>

        <br />
        <button
          className={styles.selectbutton}
          onClick={() => {
            setRandomSelect(!randomSelect);
            setMovieListSelect(false);
          }}
        >
          I want a random movie
        </button>
        <button
          className={styles.selectbutton}
          onClick={() => {
            setMovieListSelect(!movieListSelect);
            setRandomSelect(false);
          }}
        >
          Give me a list
        </button>
      
      <br />
      {randomSelect && <MovieRandom />}
      {movieListSelect && <MovieList />}
      {/* {(movieListSelect  === false && randomSelect  === false) && <Outlet />} */}
    </div>
  );
}

export default MovieSelect