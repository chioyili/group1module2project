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

  const apiGet = async () => {
    try {
      setIsLoading(true);
      const response_mystery = await movieAPI.get(`/?apikey=628b4040&s=mystery&type=movie`);
      const response_romance = await movieAPI.get(`/?apikey=628b4040&s=romance&type=movie`);
      const response_comedy = await movieAPI.get(`/?apikey=628b4040&s=comedy&type=movie`);
      console.log("apiGet: data", response_mystery, response_romance, response_comedy);
      // Merge all genres to form a movie list
      const getmoviedata = [...response_mystery.data.Search, ...response_romance.data.Search, ...response_comedy.data.Search]
      // console.log("apiGet: merge movieData",getmoviedata);

      setMovieDate(() => getmoviedata);
      // console.log("apiGet: set movieData", movieData);
      
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
      console.log("apiGet: completed");
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

      <MovieSelect movieData={movieData} />
      <MovieList movieData={movieData} />
      <MyList />
    </div>
  );
}

export default App;
