import React, {useState} from "react";

const NewBoxForm = ({addBox}) => {
    const INITIAL_STATE = {
        backgroundColor : "",
        height : 0,
        width : 0,
    }

    const [formData, setFormData] = useState ( INITIAL_STATE );

    const handleSubmit = evt => {
        evt.preventDefault();
        addBox(formData);
        setFormData(INITIAL_STATE);
    }

    const handleChange = evt => {
        const {name, value} = evt.target;
        setFormData(oldFormData => ({
            ...oldFormData,
            [name]: value
        }))
    }

    return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor='backgroundColor'>BackgroundColor:</label>
            <input 
                type="text" 
                name="backgroundColor"
                placeholder="backgroundColor"
                id="backgroundColor"
                value={formData.backgroundColor}
                onChange={handleChange}
            ></input>
            <label htmlFor='width'>Width:</label>
            <input 
                type="Number" 
                name="width"
                placeholder="width"
                id="width"
                value={formData.width}
                onChange={handleChange}
            ></input>
            <label htmlFor='height'>Height:</label>
            <input 
                type="Number" 
                name="height"
                placeholder="height"
                id="height"
                value={formData.height}
                onChange={handleChange}
            ></input>

            <button>Add</button>
        </form>
    </div>
    )
}

export default NewBoxForm;