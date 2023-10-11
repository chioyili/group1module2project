import React from "react";
import { useContext } from "react";

import styles from "./MovieList.module.css";
import HeartButton from "./HeartButtton";
import FavListContext from "../context/FavListContext";

function MovieList() {
  const { movieData, like, handleHeartButton } = useContext(FavListContext);

  return (
    <div>
      <div className={styles.movielist}>
        {movieData &&
          movieData.length > 0 &&
          movieData.map((movie) => (
            <div key={movie.imdbID} className="movieblock">
              <p className={styles.title}>
                {movie.Title}
                <HeartButton
                  // checking like status of the specified movie at the given movie id (imbdID)
                  like={like[movie.imdbID]}
                  // when button clicked, it calles the handleHeartButton with movie.imdbID parameter (id given by the api)
                  onClick={() => handleHeartButton(movie)}
                ></HeartButton>
              </p>
              <img
                className={styles.poster}
                src={movie.Poster}
                alt={movie.Title}
              />
              <p className={styles.year}>Released on {movie.Year} </p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default MovieList;
