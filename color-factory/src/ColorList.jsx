import React from "react";
import { Link} from "react-router-dom";

function ColorList({colors}) {

  return (
    <div className="ColorList">
        <h3>Please select a color.</h3>
        <ul>
        {colors.map((color, index)=>(
            <li key={color.colorName}>
                <Link to={`/colors/${color.colorName}`}>{color.colorName}</Link>
            </li>
        ))}
        </ul>
    </div>
  )
}

export default ColorList