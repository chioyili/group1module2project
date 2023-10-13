import { createContext, useState } from "react";
import { useParams } from "react-router-dom";
import movieAPI from "../api/moveapi";

const FavListContext = createContext();

export function FavListProvider({ children }) {
  /* Below code are for genreNav */
  const genreNav = ["Mystery","Romance","Comedy","All"];

  /* Below code are for setting the api data */
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // New states for disecting of list
  const [mysteryMovieList, setMysteryMovieList] = useState([]);
  const [romanceMovieList, setRomanceMovieList] = useState([]);
  const [comedyMovieList, setComedyMovieList] = useState([]);
  const [fullMovieList, setFullMovieList] = useState([]);

  /* Booleans for determining whether to show MovieRandom and MovieList */
  const [randomSelect, setRandomSelect] = useState(false);
  const [movieListSelect, setMovieListSelect] = useState(false);

  const selectMovieHandler = (genre) => {
    switch (genre) {
      case "mystery":
        setMovieData(mysteryMovieList);
        setRandomSelect(false);
        setMovieListSelect(false);
        break;
      case "romance":
        setMovieData(romanceMovieList);
        setRandomSelect(false);
        setMovieListSelect(false);
        break;
      case "comedy":
        setMovieData(comedyMovieList);
        setRandomSelect(false);
        setMovieListSelect(false);
        break;
      case "all":
        setMovieData(fullMovieList);
        setRandomSelect(false);
        setMovieListSelect(false);
        break;
      default:
        console.log("went into default...");
        break;
    }};

  /* Below code are associated for liking a movie */
  const [favList, setFavList] = useState([]);

  const [like, setLike] = useState([]);

  //only update the heart button
  const toggleHeartButton = (imdbID) => {
    // create an array to store like status for all the movies
    const updatedLikeStatus = { ...like };

    // to toggle the like status for the specific movie
    updatedLikeStatus[imdbID] = !updatedLikeStatus[imdbID];
    setLike(updatedLikeStatus);
    console.log(like);
  };

  //only update the favlist
  const handlerDeleteItem = (movie) => {
    setFavList((curList) => {
      // makes a copy of original arr and filter out deleted item
      const updatedList = curList.filter(
        (item) => item.imdbID !== movie.imdbID
      );

      //returns filtered list
      return updatedList;
    });
  };

  //only update the favlist
  const handlerAddItem = (movie) => {
    setFavList((curList) => {
      const newList = [...curList, movie];
      return newList;
    });
  };

  //check if heart button is true before the click.
  //if true, user is trying to remove this movie => delete movie from list & update heart
  //if false, user is trying to add this movie => add movie to list & update heart
  const handleHeartButton = (movie) => {
    // create an array to store like status for all the movies
    const updatedLikeStatus = { ...like };

    //add or remove movie object from favlist
    if (updatedLikeStatus[movie.imdbID]) {
      handlerDeleteItem(movie);
    } else {
      handlerAddItem(movie);
    }

    // to toggle the like status for the specific movie
    toggleHeartButton(movie.imdbID);
  };

  //this button only applicable for movies already in the favlist, clicking it will remove the movie from the list and update the heart
  const handlerDeleteButton = (movie) => {
    // delete item from list
    handlerDeleteItem(movie);

    // to toggle the like status for the specific movie
    toggleHeartButton(movie.imdbID);
  };

  const context = {
    favList: favList,
    handlerDeleteButton: handlerDeleteButton,
    handlerAddItem: handlerAddItem,
    like: like,
    handleHeartButton: handleHeartButton,
    randomSelect: randomSelect,
    movieListSelect: movieListSelect,
    setRandomSelect: setRandomSelect,
    setMovieListSelect: setMovieListSelect,
    // apiGet: apiGet,
    isLoading: isLoading,
    setIsLoading: setIsLoading,
    movieData: movieData,
    setMovieData: setMovieData,
    setFullMovieList: setFullMovieList,
    setMysteryMovieList: setMysteryMovieList,
    setRomanceMovieList: setRomanceMovieList,
    setComedyMovieList: setComedyMovieList,
    selectMovieHandler: selectMovieHandler,
    genreNav: genreNav,
  };

  return (
    <FavListContext.Provider value={context}>
      {children}
    </FavListContext.Provider>
  );
}

export default FavListContext;
