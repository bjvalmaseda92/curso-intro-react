import React from "react";
import { TodoContext } from "./components/TodoContext/TodoContext";
import { TodoCounter } from "./components/TodoCounter/TodoCounter";
import { TodoSearch } from "./components/TodoSearch/TodoSearch";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton/CreateTodoButton";

// import './App.css';

function AppUI() {
  const { loading, error, searchedTodos, onDeleted, onCompleted } =
    React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      {loading && <p>Estamos cargando, por favor no desesperes...</p>}
      {error && <p>Desepera ha ocurrido un error</p>}
      {!loading && !searchedTodos.length && <p>Crea un nuevo todo</p>}
      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onCompleted={() => onCompleted(todo.text)}
            onDeleted={() => onDeleted(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export { AppUI };
