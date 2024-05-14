import React from "react";
import TodoList from "./components-todo/TodoList";
import useTodo from "./hooks/useTodo";



const TodoHook = () => {


  const { todoState,
    toggleTodo,
    filterTodo } = useTodo();
  return (
    <>
      <h1>Todo Hook List:</h1>
      <TodoList  todoState={todoState} toggleTodo={toggleTodo} filterTodo={filterTodo}/>
    </>
  )
}

export default TodoHook