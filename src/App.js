import './App.css';
import movieAPI from './api/moveapi';
import MovieSelect from './components/MovieSelect';
import MovieList from './components/MovieList';
import MyList from './components/MyList';
import Header from './components/Header';

import { useState, useEffect, BrowserRouter } from "react";
import { useLoaderData } from 'react-router-dom';

function App() {
  /* On Page Load */
  useEffect(() => {
    apiGet();
    console.log("useEffect: apiGet");
  },[]);

  /* For apiGET */
  const [movieData, setMovieDate] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // New states for disecting of list
  const [mysteryMovieList, setMysteryMovieList] = useState([]);
  const [romanceMovieList, setRomanceMovieList] = useState([]);
  const [comedyMovieList, setComedyMovieList] = useState([]);
  const [fullMovieList, setFullMovieList] = useState([]);

  const apiGet = async () => {
    try {
      setIsLoading(true);
      const response_mystery = await movieAPI.get(`/?apikey=628b4040&s=mystery&type=movie`);
      const response_romance = await movieAPI.get(`/?apikey=628b4040&s=romance&type=movie`);
      const response_comedy = await movieAPI.get(`/?apikey=628b4040&s=comedy&type=movie`);

      setMysteryMovieList(response_mystery.data.Search);
      setRomanceMovieList(response_romance.data.Search);
      setComedyMovieList(response_comedy.data.Search);

      console.log("apiGet: data", response_mystery, response_romance, response_comedy);
      // Merge all genres to form a movie list
      const getmoviedata = [...response_mystery.data.Search, ...response_romance.data.Search, ...response_comedy.data.Search]
      // console.log("apiGet: merge movieData",getmoviedata);

      setMovieDate(() => getmoviedata);
      // For full list
      setFullMovieList(() => getmoviedata);
      // console.log("apiGet: set movieData", movieData);
      
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
      console.log("apiGet: completed");
    }
  }

  const selectMovieHandler = (genre) => {
    switch(genre){
      case 'mystery':
        setMovieDate(mysteryMovieList)
        break;
        case 'romance':
        setMovieDate(romanceMovieList)
        break;
        case 'comedy':
        setMovieDate(comedyMovieList)
        break;
        case 'full':
        setMovieDate(fullMovieList)
        break;
      default:
        console.log('went into default...')
        break;
    }
  }

  return (
    <div className="App">
      {/* Will work on routing, css, layout based on progress update during weekend */}
      {/* <BrowserRouter>
      <Header movieData={movieData} />
      </BrowserRouter> */}

      {isLoading ? <p>⏳ Loading ...</p>:
      (movieData.length === 0) && <p>No data loaded.</p>
      }

      <MovieSelect selectMovieHandler={selectMovieHandler}/>
      {/* {showWhichList == 'Movie' && <MovieList movieData={movieData} />}
      {showWhichList == 'My List' && <MyList />} */}
      <MovieList movieData={movieData} />
      <MyList />
    </div>
  );
}

export default App;
