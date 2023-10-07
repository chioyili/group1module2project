import React from 'react'
import styles from './MovieSelect.module.css'

function MovieSelect({selectMovieHandler}) {
  return (
  <div>   
    <h1 className={styles.header} >Movie Randomizer!</h1>
    <h3>What do you want to watch today?</h3>
        <button className={styles.button} onClick={() => selectMovieHandler('mystery')}>Mystery</button>         
        <button className={styles.button} onClick={() => selectMovieHandler('romance')}>Romance</button>    
        <button className={styles.button} onClick={() => selectMovieHandler('comedy')}>Comedy</button>     
        <button className={styles.button} onClick={() => selectMovieHandler('full')}>All Genre</button>      
        <br />                                                                                    
        <button className={styles.button}>I want a random movie</button>
        <button className={styles.button}>Give me a list</button>
        <br />
  </div>
  )
}

export default MovieSelect