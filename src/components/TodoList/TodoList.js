import React from "react";
import "./TodoList.css";

function TodoList(props) {
  const renderFunction = props.children || props.render;
  return (
    <section>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {!props.loading && !props.totalTodos && props.onEmpty()}
      {props.totalTodos > 0 &&
        !props.searchedTodos.length &&
        props.onEmptySearch(props.searchText)}
      {!props.loading && !props.error && (
        <ul>{props.searchedTodos.map((todo) => renderFunction(todo))}</ul>
      )}
      {/* can be props.searchedTodos.map(props.render) */}
    </section>
  );
}

export { TodoList };
