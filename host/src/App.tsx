import React from "react";
import ReactDOM from "react-dom";
import TodoCreate from 'todoCreate/TodoCreate'
import TodoList from 'todoList/TodoList'
import useTodo from 'todoList/useTodo'
const App = () => {
  const { todoState,
    toggleTodo,
    addTodo,
    filterTodo } = useTodo();
  return (
    <>
      <div className="container d-flex flex-column justify-content-center w-100 vh-100 align-items-center gap-10">
        <h1 className="h1">Todo List</h1>
        <TodoCreate addTodo={addTodo} className="mb-5" />
        <TodoList todoState={todoState} toggleTodo={toggleTodo} filterTodo={filterTodo} />
      </div>
    </>
  )
};
ReactDOM.render(<App />, document.getElementById("app"));

