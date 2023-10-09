import { createContext, useState } from "react";

const FavListContext = createContext();

export function FavListProvider({ children }) {
  const [favList, setFavList] = useState([]);

  const [like, setLike] = useState([]);

  const toggleHeartButton = (imdbID) => {
    // create an array to store like status for all the movies
    const updatedLikeStatus = { ...like };

    // to toggle the like status for the specific movie
    updatedLikeStatus[imdbID] = !updatedLikeStatus[imdbID];
    setLike(updatedLikeStatus);
    console.log(like);
  };

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

  const handlerAddItem = (newItem) => {
    setFavList((curList) => {
      const newList = [...curList, newItem];
      return newList;
    });
  };

  const handleHeartButton = (movie) => {
    // create an array to store like status for all the movies
    const updatedLikeStatus = { ...like };

    //add or remove movie object from favlist
    if (updatedLikeStatus[movie.imdbID]) {
      handlerDeleteItem(movie.imdbID);
    } else {
      handlerAddItem(movie);
    }

    // to toggle the like status for the specific movie
    toggleHeartButton(movie.imdbID);
  };

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
  };

  return (
    <FavListContext.Provider value={context}>
      {children}
    </FavListContext.Provider>
  );
}
export default FavListContext;
