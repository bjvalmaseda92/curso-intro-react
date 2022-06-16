import React from "react";

function withStorageListener(WrappedComponent) {
  return function WrappedComponentWithStorgeListener(props) {
    const [storageChange, setStorageChange] = React.useState(false);

    window.addEventListener("storage", (change) => {
      if (change.key === "TODOS_V1") {
        setStorageChange(true);
      }
    });

    const toggleStorage = () => {
      props.sincronize();
      setStorageChange(false);
    };
    return (
      <WrappedComponent show={storageChange} toggleStorage={toggleStorage} />
    );
  };
}

export { withStorageListener };
