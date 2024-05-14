import { Todo, TodoState } from "../interfaces/interfaces";

export type TodoContextProps = {
    todoState: TodoState
    toggleTodo: (id: number) => void
    addTodo:  (todo: Todo) => void
    filterTodo:  (status: 'Completed' | 'Incomplete' | 'All') => void
}