import React from "react";
import duke from "./react-router-patterns/duke.jpg"
import perry from "./react-router-patterns/perry.jpg"
import tubby from "./react-router-patterns/tubby.jpg"
import whiskey from "./react-router-patterns/whiskey.jpg"


const DogList =(props)=>{
    return (
        <>
        {props.dogs.map((d, index)=>(
            <div key={index}>
            <h1>{d.name}</h1>
            <p>age: {d.age}</p>
            <img src={d.src} alt={d.name} />
            <ul>
                {d.facts.map(f=>(
                    <li>{f}</li>
                ))}
            </ul>
            </div>
        ))}
        </>
    )
}

export default DogList;