import React from 'react'
import { TodoContextProps } from "../context/TodoContext";
import useLocalStorage from "../hooks/useLocalStorage";

const TodoFilters = ({filterTodo, todoState } : Partial<TodoContextProps>) => {

    const {saveToLocalStorage } = useLocalStorage()

    const handleFilter = (type: 'Completed' | 'Incomplete' | 'All') => {
       filterTodo!(type)
       saveToLocalStorage('todos', todoState!.filteredTodos.length > 0 ? todoState!.filteredTodos : todoState!.todos)
    };

    return (
        <>
            <form className='mb-10' >
                <button className="btn btn-primary ml-1" type="button" onClick={() =>  handleFilter('All')}>All</button>
                <button className="btn btn-success ml-1" type="button" onClick={() =>  handleFilter('Completed')}>Completed</button>
                <button className="btn btn-warning ml-1" type="button" onClick={() =>  handleFilter('Incomplete')}>Incomplete</button>
            </form>
        </>
    )
}

export default TodoFilters