import React from 'react'
import { useState } from "react";
import { TodoContextProps } from "../context/TodoContext";
import { Todo } from "../interfaces/interfaces";

const TodoCreate = ({ addTodo} : Partial<TodoContextProps>) => {

    const todoInitial: Todo = { id: 0,  desc: "", completed: false  };

    const [formData, setFormData] = useState<Todo>(todoInitial);

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value , id: Date.now() }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(formData.desc === "") return;

        addTodo!(formData)

        setFormData(todoInitial);
        
    };

    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)} className='d-flex flex-column my-5 form'>
                <label className="form-label" htmlFor="desc">Description:</label>
                <textarea id="desc" name="desc" value={formData.desc} onChange={(e) => handleChange(e)}  className='form-control'/>
                <button type="submit" className="btn btn-primary mt-1">Create Todo</button>
            </form>
        </>
    )
}

export default TodoCreate