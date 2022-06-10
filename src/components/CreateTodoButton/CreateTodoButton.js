import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton(props) {
  const onCreateEvent = () => {
    props.setOpenModal((prevState) => !prevState);
  };

  return (
    <button className="CreateTodoButton" onClick={onCreateEvent}>
      +
    </button>
  );
}

export { CreateTodoButton };
