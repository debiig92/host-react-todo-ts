import { useReducer } from "react"
import { todoReducer } from "../context/todoReducer"
import { Todo, TodoState } from "../interfaces/interfaces";

const useTodo = () => {

    const INITIAL_STATE: TodoState = {
        todoCount: 0,
        todos: [{
            id: 1,
            desc: "Study",
            completed: true,
        },
        {
            id: 2,
            desc: "Play Soccer",
            completed: false,
        }],
        filteredTodos: [],
        completed: 0,
        pending: 2
    }

    const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE)


    const toggleTodo = (id: number) => {
        dispatch({ type: 'toggleTodo', payload: { id } })
    }

    const addTodo = (todo: Todo) => {
        dispatch({ type: 'addTodo', payload: { ...todo } })

    }

    const filterTodo = (status: 'Completed' | 'Incomplete' | 'All') => {
        dispatch({ type: 'filterTodo', payload: { status } })
    }


    return {
        todoState,
        toggleTodo,
        addTodo,
        filterTodo
    }
}

export default useTodo