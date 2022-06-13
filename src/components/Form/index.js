import React from "react";
import "./Form.css";

function Form({ onAdd, setOpenModal }) {
  const [todo, setTodo] = React.useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    onAdd(todo);
    setOpenModal(false);
  };

  const setNewTodoValue = (event) => {
    setTodo(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };
  return (
    <form onSubmit={onSubmit}>
      <label>Entre la tarea</label>
      <textarea placeholder="Que desea recordar" onChange={setNewTodoValue} />
      <div className="TodoForm-buttonContainer">
        <button
          onClick={onCancel}
          type="button"
          className="TodoForm-button TodoForm-button-cancel"
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button-add">
          Add
        </button>
      </div>
    </form>
  );
}

export { Form };
