import { useState } from 'react'
import { Routes, Route, Navigate, useParams } from 'react-router-dom'
import Nav from './Nav'
import ColorForm from './ColorForm'
import ColorList from './ColorList'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [colors, setColor] = useState(["red", "green", "blue"])
  const [showForm, setShowForm] = useState(false)

  const addColor = newColor =>(
    setColor(colors => [...colors, ...newColor])
  )

  

  const handleAddColorClick = () => {
    setShowForm(true);
  };

  const handleColorSubmit = (color) => {
    console.log('Submitted color:', color);
    setShowForm(false); // Hide the form after submission
  };

  return (
    <>
    <Nav addColor={handleAddColorClick} />    
    {showForm && <ColorForm onSubmit={handleColorSubmit} addColor={addColor} />}
    <ColorList colors={colors}/>

    </>
  )
}

export default App
