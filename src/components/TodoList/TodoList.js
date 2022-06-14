import React from "react";
import "./TodoList.css";

function TodoList(props) {
  return (
    <section>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {!props.loading && !props.searchedTodos.length && props.onEmpty()}
      <ul>{props.searchedTodos.map((todo) => props.render(todo))}</ul>
      {/* can be props.searchedTodos.map(props.render) */}
    </section>
  );
}

export { TodoList };
