/* 
    This component generates a random movie from the list of movies

    To do:
    - implement like button
    - implement genre selection (i.e. takes in a 'genre' prop and selects the relevant list of movies)
    - implement styling/css
*/

import { useState } from "react";

import styles from "./MovieList.module.css";

import HeartButton from "./HeartButtton";

function MovieRandom({ movieList }) {
  const [like, setLike] = useState([]);

  // Generate a random number to select a random movie
  const randomIndex = Math.floor(Math.random() * movieList.length);

  // Get the randomly selected movie
  const randomMovie = movieList[randomIndex];

  const handleHeartButton = (imdbID) => {};

  return (
    <div>
      <h2>Random Movie</h2>

      {randomMovie ? (
        <div key={randomMovie.imdbID}>
          <p className={styles.title}>
            {randomMovie.Title}
            <HeartButton
              // checking like status of the specified movie at the given movie id (imbdID)
              // label={like[movie.imdbID] ? "❤️" :"♡"}
              like={like[randomMovie.imdbID]}
              // when button clicked, it calles the handleHeartButton with movie.imdbID parameter (id given by the api)
              onClick={() => handleHeartButton(randomMovie.imdbID)}
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
