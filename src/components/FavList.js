import { useContext, useState } from "react";
import Viewlist from "./ViewList";

export default function FavList() {
  //   const [favList, setFavList] = useState([]);

  //   const handlerDeleteItem = (id) => {
  //     setFavList((curList) => {
  //       // makes a copy of original arr and filter out deleted item
  //       const updatedList = curList.filter((item) => item.id !== id);

  //       //returns filtered list
  //       return updatedList;
  //     });
  //   };

  return (
    <div>
      <h1>My Favourites</h1>
      <ViewList />
    </div>
  );
}
