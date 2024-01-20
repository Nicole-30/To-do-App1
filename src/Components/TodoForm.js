import React, { useState } from 'react';

export const TodoForm = ({ addTodo }) => {

    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();//to prevent the default loading of a new page when task is submited
        addTodo(value);
        if (value) {
            //add value
            addTodo(value);
            //clear form after submission
            setValue('')
        }
    }
    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input type="text" className="todo-input" value={value} placeholder='What is the task today?' onChange={(e) => setValue(e.target.value)} />
            <button type="submit" className='todo-btn'>Add Task</button>
        </form>
    );

}