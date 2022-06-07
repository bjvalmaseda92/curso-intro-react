import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
// import './App.css';

const defaulutTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el cursso de intro a React", completed: false },
  { text: "Llorar con la llorona", completed: false },
  { text: "LALALALAA", completed: true },
];

function App() {
  const [searchValue, setSearchValue] = React.useState("");
  let searchedTodos = [];

  if (searchValue.length >= 1) {
    searchedTodos = defaulutTodos.filter((todo) => {
      const searchText = searchValue.toLowerCase();
      const todoText = todo.text.toLocaleLowerCase();
      return todoText.includes(searchText);
    });
  } else {
    searchedTodos = defaulutTodos;
  }

  const totalTodos = searchedTodos.length;
  const completedTodos = searchedTodos.filter((todo) => todo.completed).length;

  return (
    <React.Fragment>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
