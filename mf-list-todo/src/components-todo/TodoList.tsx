import React from 'react'
import { useLayoutEffect } from "react"
import { TodoContextProps } from "../context/TodoContext"
import TodoItem from "./TodoItem";
import TodoFilters from "./TodoFilters";
import useLocalStorage from "../hooks/useLocalStorage";

const TodoList = ({todoState, filterTodo, toggleTodo}: Partial<TodoContextProps>) => {

  const { todos, filteredTodos,  } = todoState!;

  const {saveToLocalStorage } = useLocalStorage()

  useLayoutEffect(() => {
    saveToLocalStorage('todos',filteredTodos.length > 0 ? filteredTodos : todos);
  }, [todos, filteredTodos])

  return (
    <>
      <TodoFilters todoState={todoState} filterTodo={filterTodo} />
      <ul className='list-group my-5'>
        {
          filteredTodos.length > 0 ? filteredTodos.map((todo) => <TodoItem   key={todo.id} todo={todo} toggleTodo={toggleTodo} />) : todos.map((todo) => <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />)
        }
      </ul>
    </>
  )
}

export default TodoList