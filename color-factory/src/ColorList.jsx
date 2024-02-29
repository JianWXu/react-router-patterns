import React from "react";
import { Link} from "react-router-dom";

function ColorList(props) {


  return (
    <div className="ColorList">
        <h3>Please select a color.</h3>
        <ul>
        {props.colors.map((color)=>(
            <li><Link to={`/colors/${color}`}>{color}</Link></li>
        ))}
        </ul>
    </div>
  )
}

export default ColorList