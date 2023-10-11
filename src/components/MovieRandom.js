/* 
    This component generates a random movie from the list of movies

    To do:
    - implement styling/css
    - implement a component to display the random movie
*/

import styles from "./MovieList.module.css";

import { useContext, useEffect, useState } from "react";
import HeartButton from "./HeartButtton";
import FavListContext from "../context/FavListContext";

function MovieRandom({ genre, mysteryMovieList, comedyMovieList, romanceMovieList }) {
  
  
  const { like, handleHeartButton } = useContext(FavListContext);

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
  const [randomIndex, setRandomIndex] = useState(null)

  useEffect( () => {
    if (selectedMovieList !== null)  {
      setRandomIndex(Math.floor(Math.random() * selectedMovieList.length));
      console.log("randomIndex: ", randomIndex)
    }
  }, [selectedMovieList])
  // const randomIndex = Math.floor(Math.random() * selectedMovieList.length);
  // console.log("randomIndex: ", randomIndex)

  // Get the randomly selected movie
  const randomMovie = selectedMovieList[randomIndex];

  return (
    <div>
      <h2>Random {genre} Movie</h2>

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
        <p>No {genre} movies available.</p>
      )}
    </div>
  );
}

export default MovieRandom;
