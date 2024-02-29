import React, {useState} from "react"

function ColorForm({addColor, onSubmit}){
    const INITIAL_STATE = {
        color: ""
    }

    const [formData, setFormData] = useState(INITIAL_STATE)

    
    
    const handleChange =e => {
        const {name, value} = e.target;
        setFormData(data => ({
            ...data, 
            [name]: value
        }))
    }

    const handleSubmit = e =>{
        e.preventDefault()
        addColor({...formData})
        setFormData(INITIAL_STATE)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="color">Enter New Color: </label>
            <input
                id="color"
                type="text"
                name="color"
                placeholder="New color"
                value={formData.color}
                onChange={handleChange}
            />
            <button>Add Task to List</button>
        </form>
    )

}

export default ColorForm