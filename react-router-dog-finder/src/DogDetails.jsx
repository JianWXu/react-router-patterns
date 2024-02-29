import React, {useState, useEffect} from "react";
import { useParams, Navigate } from "react-router-dom";
import duke from "./react-router-patterns/duke.jpg"
import perry from "./react-router-patterns/perry.jpg"
import tubby from "./react-router-patterns/tubby.jpg"
import whiskey from "./react-router-patterns/whiskey.jpg"

function DogDetails({dogs}){
    const {name} = useParams()
    const dog = dogs.find(dog => dog.name === name);
    if (!dog) {
        return <Navigate to="/dogs" replace />;
      }

    return (
        <>
        <h1>{dog.name}</h1>
        <p>age: {dog.age}</p>
        {dog.src && <img src={dog.src} alt={dog.name} />}
        <ul>
                {dog.facts.map((f, index)=>(
                    <li key={index}>{f}</li>
                ))}
        </ul>
        </>
    )
}


export default DogDetails