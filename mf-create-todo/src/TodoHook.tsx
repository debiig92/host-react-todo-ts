import React from "react";
import useTodo from "./hooks/useTodo";
import TodoCreate from "./components-todo/TodoCreate";



const TodoHook = () => {


  const {
    addTodo } = useTodo();
  return (
    <>
      <TodoCreate addTodo={addTodo} />
    </>
  )
}

export default TodoHook