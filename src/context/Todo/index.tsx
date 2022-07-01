import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react'
import { ITodo } from '../../types/ITodo';

interface ITodoProviderProps {
    children: ReactNode
}
export interface ITodoReturn {
    todos: ITodo[];
    setTodos: Dispatch<SetStateAction<ITodo[]>>;
}

export const TodoContext = createContext<ITodoReturn>(
    {} as ITodoReturn
)

export function TodoProvider ({ children }: ITodoProviderProps) {
    const [todos, setTodos] = useState<ITodo[]>([])

    return <TodoContext.Provider value={{
        todos,
        setTodos,
    }}>{ children }</TodoContext.Provider>
}

export const useTodoContext = () => useContext(TodoContext)