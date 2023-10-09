import React from "react";
import { useState, useContext } from "react";

import styles from "./MovieList.module.css";
import HeartButton from "./HeartButtton";
import FavListContext from "../context/FavListContext";

function MovieList({
  movieData,
  // genre
}) {
  const { handlerAddItem } = useContext(FavListContext);

  const [like, setLike] = useState([]);

  const handleHeartButton = (imdbID) => {
    // create an array to store like status for all the movies
    const updatedLikeStatus = { ...like };
    // to toggle the like status for the specific movie
    updatedLikeStatus[imdbID] = !updatedLikeStatus[imdbID];
    setLike(updatedLikeStatus);
    //add this item to the FavList using handlerAddItem,
    //but this handler accepts a movie object, so we need to figure out how to get the object from the api based on the id in this func!
    console.log(like);
  };

  //
  // const handlerAddItem = (newItem) => {
  //   setFavList((curList) => {
  //     const newList = [...curList, newItem];
  //     setList(newList);
  //   });
  // };

  return (
    <div>
      {/* <div>{genre !== '' && `Here is our top picks from ${genre} Genre!`}</div>   */}

      <div className={styles.movielist}>
        {movieData &&
          movieData.length > 0 &&
          movieData.map((movie) => (
            <div key={movie.imdbID}>
              <p className={styles.title}>
                {movie.Title}
                <HeartButton
                  // checking like status of the specified movie at the given movie id (imbdID)
                  // label={like[movie.imdbID] ? "❤️" :"♡"}
                  like={like[movie.imdbID]}
                  // when button clicked, it calles the handleHeartButton with movie.imdbID parameter (id given by the api)
                  onClick={() => handleHeartButton(movie.imdbID)}
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
