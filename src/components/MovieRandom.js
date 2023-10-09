/* 
    This component generates a random movie from the list of movies

    To do:
    - implement like button (check with the team about how we store mylist information)
    - implement styling/css
*/

import { useState } from "react";

import styles from "./MovieList.module.css";

import HeartButton from "./HeartButtton";

function MovieRandom({ genre, mysteryMovieList, comedyMovieList, romanceMovieList }) {
  
  const [like, setLike] = useState([]);

  // Determine the appropriate movie list based on the 'genre' prop
  let selectedMovieList = [];
  switch (genre) {
    case 'Mystery':
      selectedMovieList = mysteryMovieList;
      console.log(genre, " movie selected");
      break;
    case 'Comedy':
      selectedMovieList = comedyMovieList;
      console.log(genre, " movie selected");
      break;
    case 'Romance':
      selectedMovieList = romanceMovieList;
      console.log(genre, " movie selected");
      break;
    default:
      selectedMovieList = [];
      console.log("no movie selected");
  }

  // Generate a random number to select a random movie
  const randomIndex = Math.floor(Math.random() * selectedMovieList.length);

  // Get the randomly selected movie
  const randomMovie = selectedMovieList[randomIndex];

  const handleHeartButton = (imdbID) => {
    /* some code to add it to mylist? */
  };

  return (
    <div>
      <h2>Random {genre} Movie</h2>

      {randomMovie ? (
        <div key={randomMovie.imdbID}>
          <p className={styles.title}>
            {randomMovie.Title}
            <HeartButton
              like={like[randomMovie.imdbID]}
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
        <p>No {genre} movies available.</p>
      )}
    </div>
  );
}

export default MovieRandom;
