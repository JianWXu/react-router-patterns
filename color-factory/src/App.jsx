import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Nav from './Nav'
import ColorForm from './ColorForm'
import ColorList from './ColorList'
import ColorPage from './ColorPage'
import './App.css'

function App() {

  const [colors, setColor] = useState([])
  const [showForm, setShowForm] = useState(false)

  const addColor = newColor =>(
    setColor(colors => [...colors, newColor])
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
    <Nav onAddColor={handleAddColorClick} />    
    {showForm && <ColorForm onSubmit={handleColorSubmit} addColor={addColor} />}
    <Routes>
    <Route path="/colors" element={<ColorList colors={colors} />} />
    <Route path="/colors/:color" element={<ColorPage colors={colors} />} />
    <Route path="*" element={<Navigate to="/colors" replace />} />
    </Routes>
    </>
  )
}

export default App;
