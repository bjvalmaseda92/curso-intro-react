import React from "react";
import { TodoCounter } from "./components/TodoCounter/TodoCounter";
import { TodoSearch } from "./components/TodoSearch/TodoSearch";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton/CreateTodoButton";
import { Modal } from "./components/Modal";
import { Form } from "./components/Form";
import { Loading } from "./components/States/Loading";
import { TodoHeader } from "./components/TodoHeader";
import { useTodos } from "./useTodos";

// const item = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Tomar el cursso de intro a React", completed: false },
//   { text: "Llorar con la llorona", completed: false },
//   { text: "LALALALAA", completed: true },
// ];

function App() {
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
    onAdd,
    searchValue,
  } = useTodos();
  return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />
        <TodoSearch setSearchValue={setSearchValue} />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        totalTodos={totalTodos}
        searchText={searchValue}
        searchedTodos={searchedTodos}
        onError={() => <p>Desepera ha ocurrido un error</p>}
        onLoading={() => <Loading />}
        onEmpty={() => <p>Crea un nuevo todo</p>}
        onEmptySearch={(searchText) => <p>No hay todos con {searchText} </p>}
        render={(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onCompleted={() => onCompleted(todo.text)}
            onDeleted={() => onDeleted(todo.text)}
          />
        )}
      />

      {openModal && (
        <Modal>
          <Form onAdd={onAdd} setOpenModal={setOpenModal} />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal} />
    </React.Fragment>
  );
}

export default App;
