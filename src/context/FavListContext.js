import { createContext, useState } from "react";

const FavListContext = createContext();

export function FavListProvider({ children }) {
  const [favList, setFavList] = useState([]);
  const [like, setLike] = useState([]);

  const handleHeartButton = (imdbID) => {
    // create an array to store like status for all the movies
    const updatedLikeStatus = { ...like };
    // to toggle the like status for the specific movie
    updatedLikeStatus[imdbID] = !updatedLikeStatus[imdbID];
    setLike(updatedLikeStatus);
    console.log(like);
  };

  const handlerDeleteItem = (id) => {
    setFavList((curList) => {
      // makes a copy of original arr and filter out deleted item
      const updatedList = curList.filter((item) => item.id !== id);

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

  const context = {
    favList: favList,
    handlerDeleteItem: handlerDeleteItem,
    handlerAddItem: handlerAddItem,
    handleHeartButton: handleHeartButton,
  };

  return (
    <FavListContext.Provider value={context}>
      {children}
    </FavListContext.Provider>
  );
}
export default FavListContext;
