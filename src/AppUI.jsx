import React from "react";
import { TodoContext } from "./components/TodoContext/TodoContext";
import { TodoCounter } from "./components/TodoCounter/TodoCounter";
import { TodoSearch } from "./components/TodoSearch/TodoSearch";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton/CreateTodoButton";
import { Modal } from "./components/Modal";
import { Form } from "./components/Form";
import { Loading } from "./components/States/Loading";
import { TodoHeader } from "./components/TodoHeader";

// import './App.css';

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    onDeleted,
    onCompleted,
    openModal,
    setOpenModal,
    completedTodos,
    totalTodos,
    setSearchValue,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />
        <TodoSearch setSearchValue={setSearchValue} />
      </TodoHeader>
      {loading && <Loading />}
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

      {openModal && (
        <Modal>
          <Form />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal} />
    </React.Fragment>
  );
}

export { AppUI };
