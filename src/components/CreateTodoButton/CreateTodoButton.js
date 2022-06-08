import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton(props) {
  const onCreateEvent = (msg) => {
    alert(msg);
  };

  return (
    <button
      className="CreateTodoButton"
      onClick={() => onCreateEvent("Aqui aparece modal")}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
