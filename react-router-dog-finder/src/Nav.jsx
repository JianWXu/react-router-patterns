import React from "react";
import { Link} from "react-router-dom";

function Nav(props){
    return(
        <>
        <ul>            
            
            <li><Link to="/dogs">Home</Link></li>
            {props.dogs.map((d, index)=>(
                <li key={index}><Link to={`/dogs/${d.name}`}>{d.name}</Link></li>
            ))}
        </ul>
        </>
    )
}

export default Nav;