import React, {useState} from "react"
import { Routes } from "react-router-dom"

function ColorForm({addColor, onSubmit}){
    const INITIAL_STATE = {
        colorName: "",
        color: ""
    }

    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(data => ({
            ...data, 
            [name]: value
        }))
    }

    const handleSubmit = e =>{
        e.preventDefault()
        addColor(formData);
        setFormData(INITIAL_STATE)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="colorName">Enter New Color Name: </label>
            <input
                id="colorName"
                type="text"
                name="colorName"
                placeholder="New Color"
                value={formData.colorName}
                onChange={handleChange}
            />
            <label htmlFor="color">Select a color: </label>
            <input
                id="color"
                type="color"
                name="color"
                value={formData.color}
                onChange={handleChange}
            />
            <button>Add New Color</button>
        </form>
    )

}

export default ColorForm