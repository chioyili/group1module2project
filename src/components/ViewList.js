import styles from "./ViewList.module.css";
import FavListContext from "../context/FavListContext";

export default function Viewlist() {
  const { list, handlerDeleteItem } = useContext(FavListContext);

  return (
    <div>
      <table className={`${styles.table}`}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Rated</th>
            <th>Genre</th>
            <th style="width:60%">Synopsis</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.year}</td>
              <td>{item.rated}</td>
              <td>{item.genre}</td>
              <td>{item.plot}</td>
              <td onClick={() => handlerDeleteItem(item.id)}>🗑️</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
