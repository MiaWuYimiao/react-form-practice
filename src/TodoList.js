import React, {useState} from "react";
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import {v4 as uuid} from "uuid";

const TodoList = () => {
    const initialTodoList = [{
        id: uuid(),
        task: "laundary"
    }, {
        id: uuid(),
        task:  "send an email"
    }]

    const [todos, setTodos] = useState(initialTodoList)

    const addTodo = (todo) => {
        setTodos(todos => [...todos, {...todo, id:uuid()}]);
    }
    const deleteTodo = (id) => {
        setTodos(todos => (todos.filter(todo => todo.id != id)));
    }

    return (
        <div>
            {todos.map(todo => <Todo key={todo.id} id={todo.id} task={todo.task} deleteTodo={deleteTodo}/>)}
            {<NewTodoForm addTodo={addTodo}/>}
        </div>
    )
}

export default TodoList;