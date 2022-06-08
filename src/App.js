import React from "react";
import { AppUI } from "./AppUI";

// const defaulutTodos = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Tomar el cursso de intro a React", completed: false },
//   { text: "Llorar con la llorona", completed: false },
//   { text: "LALALALAA", completed: true },
// ];

function App() {
  const localStorageTodos = localStorage.getItem("TODOS_V1");
  let defaulutTodos;
  if (!localStorageTodos) {
    defaulutTodos = localStorage.setItem("TODOS_V1", JSON.stringify([]));
    defaulutTodos = [];
  } else {
    defaulutTodos = JSON.parse(localStorage.getItem("TODOS_V1"));
  }

  const [todos, setTodos] = React.useState(defaulutTodos);
  const [searchValue, setSearchValue] = React.useState("");
  let searchedTodos = [];

  if (searchValue.length >= 1) {
    searchedTodos = todos.filter((todo) => {
      const searchText = searchValue.toLowerCase();
      const todoText = todo.text.toLocaleLowerCase();
      return todoText.includes(searchText);
    });
  } else {
    searchedTodos = todos;
  }

  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.completed).length;

  const saveStorage = (newTodos) => {
    localStorage.setItem("TODOS_V1", JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  const onCompleted = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveStorage(newTodos);
  };

  const onDeleted = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveStorage(newTodos);
  };

  return (
    <AppUI
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      searchedTodos={searchedTodos}
      setSearchValue={setSearchValue}
      onCompleted={onCompleted}
      onDeleted={onDeleted}
    />
  );
}

export default App;
