import React from "react";
import { useLocalStorage } from "./TodoLocalStorage";

function useTodos() {
  const {
    item: todos,
    saveItem: saveStorage,
    sicronizeItem: sincronizeTodo,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);
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

  const onAdd = (text) => {
    const newTodos = [...todos];
    newTodos.push({ completed: false, text });
    saveStorage(newTodos);
  };

  const statesUpdaters = {
    setSearchValue,
    onDeleted,
    onCompleted,
    setOpenModal,
    onAdd,
    sincronizeTodo,
  };

  const states = {
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    searchedTodos,
    openModal,
  };

  return {
    states,
    statesUpdaters,
  };
}

export { useTodos };
