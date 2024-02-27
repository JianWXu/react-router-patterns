import React from "react";
import { Link} from "react-router-dom";

function Nav(props){
    return(
        <ul>
            {/* <li><Link to="/dogs">Home</Link></li>
            <li><Link to="/dogs/whiskey">Whiskey</Link></li>
            <li><Link to="/dogs/duke">Duke</Link></li>
            <li><Link to="/dogs/perry">Perry</Link></li>
            <li><Link to="/dogs/Tubby">Tubby</Link></li> */}
            <li><Link to="/dogs">Home</Link></li>
            {props.dogs.map(d=>(
                `<li><Link to="/dogs/${d.name}">${d.name}</Link></li>`
            ))}

        </ul>
    )
}

export default Nav;