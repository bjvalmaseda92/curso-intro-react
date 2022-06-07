import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  const onCompleted = () =>
    alert("The task " + props.text + " has ben completed");
  const onDeleted = () => {
    alert("The task has ben deleted");
  };

  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={onCompleted}
      >
        √
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={onDeleted}>
        X
      </span>
    </li>
  );
}

export { TodoItem };
