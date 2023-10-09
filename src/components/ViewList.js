import styles from "./ViewList.module.css";
import { useContext } from "react";
import FavListContext from "../context/FavListContext";

export default function ViewList() {
  const { favList, handlerDeleteItem } = useContext(FavListContext);

  return (
    <div>
      <h1>My Favourites</h1>
      <table className={`${styles.table}`}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Rated</th>
            <th>Genre</th>
            <th style={{ width: "60%" }}>Synopsis</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {favList.map((item) => (
            <tr key={item.IMBDid}>
              <td>{item.Title}</td>
              <td>{item.Year}</td>
              <td>{item.Rated}</td>
              <td>{item.Genre}</td>
              <td>{item.Plot}</td>
              <td onClick={() => handlerDeleteItem(item.IMBDid)}>🗑️</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
