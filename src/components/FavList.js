import { useContext, useState } from "react";
import ViewList from "./ViewList";

export default function FavList() {
  return (
    <div>
      <h1>My Favourites</h1>
      <ViewList />
    </div>
  );
}
