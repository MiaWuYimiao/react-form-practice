import React, {useState} from "react";

const Todo = ({id, task, deleteTodo}) => {
    const handleDelete = () => {
        deleteTodo(id);
    }
    return (
        <div>
            {task}
            <button onClick={handleDelete}>X</button>
        </div>
    )
}

export default Todo;