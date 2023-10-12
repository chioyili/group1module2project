/* 
    This component generates a random movie from the list of movies

    Future improvments:
    - implement styling/css
    - implement a component to display the random movie
*/

import styles from "./MovieList.module.css";

import { useContext, useEffect, useState } from "react";
import HeartButton from "./HeartButtton";
import FavListContext from "../context/FavListContext";

function MovieRandom() {
  
  const { movieData, like, handleHeartButton } = useContext(FavListContext);

  const randomIndex = Math.floor(Math.random() * movieData.length);
  // console.log("randomIndex: ", randomIndex)

  // Get the randomly selected movie
  const randomMovie = movieData[randomIndex];

  return (
    <div>
      <h2>Shall we watch...</h2>

      {randomMovie ? (
        <div key={randomMovie.imdbID}>
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
