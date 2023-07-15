import React, {useState} from "react";

const NewTodoForm = ({addTodo}) => {
    const INITIAL_STATE = {task:""}
    const [todo, setTodo] = useState(INITIAL_STATE)

    const handleSubmit = evt => {
        evt.preventDefault();
        addTodo(todo);
        setTodo(INITIAL_STATE);
    }

    const handleChange = evt => {
        const {name, value} = evt.target;
        setTodo({[name]: value})
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="task">Task: </label>
            <input 
                id="task"
                type="text"
                name="task"
                placeholder="task"
                onChange={handleChange}
                value={todo.task}
            />
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodoForm;