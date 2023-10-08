import { createContext, useState } from "react";

const FavListContext = createContext();

export function FavListProvider({ children }) {
  const [favList, setFavList] = useState([]);

  const handlerDeleteItem = (id) => {
    setFavList((curList) => {
      // makes a copy of original arr and filter out deleted item
      const updatedList = curList.filter((item) => item.id !== id);

      //returns filtered list
      return updatedList;
    });
  };

  const context = {
    list: favList,
    handlerDeleteItem: handlerDeleteItem,
  };

  return (
    <FavListContext.Provider value={context}>
      {children}
    </FavListContext.Provider>
  );
}
export default FavListContext;
