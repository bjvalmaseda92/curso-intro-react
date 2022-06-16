import React from "react";

import { withStorageListener } from "./withStorageListener";

function ChangeAlert({ show, toggleStorage }) {
  if (show) {
    return (
      <div>
        <p>Hubo cambios</p>
        <button onClick={toggleStorage}>Actualizar</button>
      </div>
    );
  }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };
