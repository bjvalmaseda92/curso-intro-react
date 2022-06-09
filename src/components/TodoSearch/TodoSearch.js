import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import "./TodoSearch.css";

function TodoSearch() {
  const { setSearchValue } = React.useContext(TodoContext);
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      onChange={onSearchValueChange}
      placeholder="Cebolla"
    />
  );
}

export { TodoSearch };
