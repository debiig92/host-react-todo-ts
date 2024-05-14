import { Todo, TodoState } from "../interfaces/interfaces";

type TodoAction = {
  type: 'addTodo', payload: Todo
} | {
  type: 'toggleTodo', payload: { id: number }
} | {
  type: 'filterTodo', payload: { status: 'Completed' | 'Incomplete' | 'All' }
}
export const todoReducer = (state: TodoState, action: TodoAction) => {
  switch (action.type) {
    case 'addTodo':

      return {
        ...state,
        todos: [...state.todos, action.payload]
      }

    case 'toggleTodo':

      return {
        ...state,
        todos: state.todos.map(({ ...todo }) => {
          if (todo.id === action.payload.id) {
            todo.completed = !todo.completed
          }
          return todo;
        })
      }

    case 'filterTodo':


      switch (action.payload.status) {
        case 'Completed':

          return {
            ...state,
            filteredTodos: state.todos.filter(({ ...todo }) => todo.completed)
          }

        case 'Incomplete':
          return {
            ...state,
            filteredTodos: state.todos.filter(({ ...todo }) => !todo.completed)
          }
        case 'All':
        default:
          return {
            ...state,
            filteredTodos: []
          }
      }

    default:
      return state;
  }
}
