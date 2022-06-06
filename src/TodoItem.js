import React from "react";

function TodoItem(props) {
  return (
    <li>
      <span>X</span>
      <span>{props.text}</span>
    </li>
  );
}

export { TodoItem };
