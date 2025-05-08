export interface Todo {
    id: string;
    title: string;
    completed: boolean;
}

export type TodoTitle = Pick<Todo, "title">;
export type TodoId = Pick<Todo, "id">;
export type TodoCompleted = Pick<Todo, "completed">;

export type TodosProps = {
    todos: Todo[];
}

export type TodoItemProps = {
    todo: Todo;
}

export type FilterValue = typeof FILTER_BUTTONS[keyof typeof FILTER_BUTTONS];