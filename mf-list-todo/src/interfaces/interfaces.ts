export interface Todo {
    id: number;
    desc: string;
    completed: boolean;
}

export interface TodoState {
    todoCount:number;
    todos: Todo[];
    filteredTodos: Todo[];
    completed: number;
    pending: number;
}