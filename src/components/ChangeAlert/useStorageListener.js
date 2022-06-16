import React from "react";

function useStorageListener(sincronize) {
  const [storageChange, setStorageChange] = React.useState(false);

  window.addEventListener("storage", (change) => {
    if (change.key === "TODOS_V1") {
      setStorageChange(true);
    }
  });

  const toggleStorage = () => {
    sincronize();
    setStorageChange(false);
  };
  return {
    show: storageChange,
    toggleStorage,
  };
}

export { useStorageListener };
