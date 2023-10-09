import styles from "./ViewList.module.css";
import { useContext } from "react";
import FavListContext from "../context/FavListContext";

export default function ViewList() {
  const { favList, handlerDeleteButton } = useContext(FavListContext);

  return (
    <div>
      <h1>My Favourites</h1>
      <table className={`${styles.table}`}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {favList.map((item) => (
            <tr key={item.imdbID}>
              <td>{item.Title}</td>
              <td>{item.Year}</td>
              <td onClick={() => handlerDeleteButton(item)}>🗑️</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
