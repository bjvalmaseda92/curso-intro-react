import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "./components/TodoContext/TodoContext";

// const item = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Tomar el cursso de intro a React", completed: false },
//   { text: "Llorar con la llorona", completed: false },
//   { text: "LALALALAA", completed: true },
// ];

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
