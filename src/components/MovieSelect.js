import React from 'react'
import styles from './MovieSelect.module.css'

import { useEffect, useContext } from "react";
import FavListContext from "../context/FavListContext";
import MovieList from './MovieList';
import MovieRandom from './MovieRandom';

function MovieSelect() {
  const {
    isLoading,
    movieData,
    selectMovieHandler,
    genreSelect,
    randomSelect,
    movieListSelect,
    setGenreSelect,
    setRandomSelect,
    setMovieListSelect
  } = useContext(FavListContext);

  return (
  <div>   
    {isLoading ? (
          <p>⏳ Loading ...</p>
        ) : (
          movieData.length === 0 && <p>No data loaded.</p>
        )}

    <h1 className={styles.header} >Movie Randomizer!</h1>
    <h3>What do you want to watch today?</h3>
        <button className={styles.button} onClick={() => selectMovieHandler('mystery')}>Mystery</button>         
        <button className={styles.button} onClick={() => selectMovieHandler('romance')}>Romance</button>    
        <button className={styles.button} onClick={() => selectMovieHandler('comedy')}>Comedy</button>     
        <button className={styles.button} onClick={() => selectMovieHandler('full')}>All Genre</button>      
        <br />                                                                                    
        <button className={styles.selectbutton} onClick={ () => {setRandomSelect(!randomSelect); setMovieListSelect(false);} }>I want a random movie</button>
        <button className={styles.selectbutton} onClick={ () => {setMovieListSelect(!movieListSelect); setRandomSelect(false);} }>Give me a list</button>
        <br />
        {randomSelect && <MovieRandom />}
        {movieListSelect && <MovieList />}
  </div>
  )
}

export default MovieSelect