import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import './App.css'
import Nav from './Nav'
import DogList from "./DogList"
import DogDetails from './DogDetails'
import duke from "./react-router-patterns/duke.jpg"
import perry from "./react-router-patterns/perry.jpg"
import tubby from "./react-router-patterns/tubby.jpg"
import whiskey from "./react-router-patterns/whiskey.jpg"


function App(props) {  

  return (
    <>
    <Nav dogs={props.dogs}/>
    
    <Routes>
      <Route path="/dogs" element={<DogList dogs={props.dogs} />} />
      
      <Route path="/dogs/:name" element={<DogDetails dogs={props.dogs} />}/>
        // what props will this need?
      
      <Route path="*" element={<Navigate to="/dogs" replace />} />

    </Routes>
    </>
  )
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App;
