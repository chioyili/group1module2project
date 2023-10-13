import "../App.css";
import { Link, Outlet } from "react-router-dom";
import movieAPI from "../api/moveapi";

import FavListContext from "../context/FavListContext";
import { useEffect, useContext } from "react";
import MovieSelect from "./MovieSelect";

function Header() {
  const {
    setIsLoading,
    setMovieData,
    setFullMovieList,
    setMysteryMovieList,
    setRomanceMovieList,
    setComedyMovieList,
    setRandomSelect,
    setMovieListSelect,
  } = useContext(FavListContext);

  /* On Page Load */
  useEffect(() => {
    apiGet();
    // console.log("useEffect: apiGet", apiGet);
  }, []);

  const apiGet = async () => {
    try {
      setIsLoading(true);
      const response_mystery = await movieAPI.get(
        `/?apikey=628b4040&s=mystery&type=movie`
      );
      const response_romance = await movieAPI.get(
        `/?apikey=628b4040&s=romance&type=movie`
      );
      const response_comedy = await movieAPI.get(
        `/?apikey=628b4040&s=comedy&type=movie`
      );

      setMysteryMovieList(response_mystery.data.Search);
      setRomanceMovieList(response_romance.data.Search);
      setComedyMovieList(response_comedy.data.Search);

      // console.log(
      //   "apiGet: data",
      //   response_mystery,
      //   response_romance,
      //   response_comedy
      // );
      // Merge all genres to form a movie list
      const getmoviedata = [
        ...response_mystery.data.Search,
        ...response_romance.data.Search,
        ...response_comedy.data.Search,
      ];
      // console.log("apiGet: merge movieData",getmoviedata);

      setMovieData(() => getmoviedata);
      // For full list
      setFullMovieList(() => getmoviedata);
      // console.log("apiGet: set movieData", movieData);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
      console.log("apiGet: completed");
    }
  };

  return (
    <>
      <nav>
        <Link to="/" onClick={() => {setRandomSelect(false);setMovieListSelect(false);}}>Home</Link> |{" "}
        <Link to="/mylist">My List</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default Header;
