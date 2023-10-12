/* 
    This component generates a random movie from the list of movies

    Future improvements:
    - implement a component to display the random movie
*/

import styles from "./MovieRandom.module.css";

import { useContext, useEffect, useState } from "react";
import HeartButton from "./HeartButtton";
import FavListContext from "../context/FavListContext";

function MovieRandom() {
  const { movieData, like, handleHeartButton } = useContext(FavListContext);
  const [randomIndex, setRandomIndex] = useState(null);

  useEffect(() => {
    if (movieData && movieData.length > 0 && randomIndex === null) {
      // Generate a random index only once when movieData is available.
      const newIndex = Math.floor(Math.random() * movieData.length);
      setRandomIndex(newIndex);
    }
  }, [movieData, randomIndex]);

  const randomMovie = movieData && movieData[randomIndex];

  return (
    <div>
      <h2>Shall we watch...</h2>

      {randomMovie ? (
        <div>
          <p className={styles.title}>
            {randomMovie.Title}
            <HeartButton
              like={like[randomMovie.imdbID]}
              onClick={() => handleHeartButton(randomMovie)}
            ></HeartButton>
          </p>
          <img
            className={styles.poster}
            src={randomMovie.Poster}
            alt={randomMovie.Title}
          />
          <p className={styles.year}>Released on {randomMovie.Year} </p>
        </div>
      ) : (
        <p>No movies available.</p>
      )}
    </div>
  );
}

export default MovieRandom;
