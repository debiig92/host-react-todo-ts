import React from 'react'
import { Todo } from "../interfaces/interfaces"

interface props {
    todo: Todo;
    toggleTodo: undefined | ( (id: number) => void )
}

const TodoItem = ({ todo , toggleTodo } : props) => {


    const handleClick = () => {
       toggleTodo!(todo.id)
    }

  return (
   <li 
   className='list-group-item'
   key={todo.id}
        style={{
            cursor: 'pointer',
            textDecoration: todo.completed ? 'line-through' : ''
        }}>
     <input
     style={{
        cursor: 'pointer'
     }}
          type="checkbox"
          checked={todo.completed}
          onChange={handleClick}
        />
   <span onClick={handleClick}> { todo.desc }</span>
   </li>
  )
}

export default TodoItem