import React from "react";
import ColorForm from './ColorForm'

function Nav({ onAddColor }) {
    return (
      <nav>
        <h3>Welcome to the color factory.</h3>
        <button onClick={onAddColor}>Add a color</button>
      </nav>
    );
  }

export default Nav