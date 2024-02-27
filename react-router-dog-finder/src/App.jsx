import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dogs from "./Dogs"
import Nav from './Nav'

let nameArr = []

function App() {
  for (let i of props.dogs){
    nameArr.push(i.name)
  }

  return (
    <>
    <Nav dogs={dogs}/>
    <Switch>
    <Route exact path="/dogs" >
      <DogList dogs={dogs}/> // what props will this need?
    </Route>
    <Route path="/dogs/:name" >
      <DogDetails name={}/> // what props will this need?
    </Route>
    <Redirect to="/dogs" />
  </Switch>
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
