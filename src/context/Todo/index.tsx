import { createContext, ReactNode, useCallback, useState } from 'react'

interface ITodoServiceProps {
    children: ReactNode
}

interface ITodo {
    uid: string;
    task: string;
    done: boolean;
}

export interface ITodoReturn {
    todos: ITodo[];
    getCountDone: number;    
    remove: (uid: string) => void;
    toggle: (uid: string) => void;
    create: (task: string) => void;
}

export const TodoContext = createContext<ITodoReturn>(
    {} as ITodoReturn
)

export function TodoService ({ children }: ITodoServiceProps) {
    const [todos, setTodos] = useState<ITodo[]>([])

    const getCountDone = todos.filter((todo) => todo.done == true).length

    const remove = (uid: string) => {
        const newList = todos.filter((todo) => todo.uid !== uid)
        setTodos([...newList])
    }

    const toggle = (uid: string) => {
        const listTodos = todos
        const i = listTodos.findIndex(item => item.uid === uid)
        listTodos[i].done = !listTodos[i].done        

        setTodos([...listTodos])
    }

    const create = (task: string) => {
        console.log('aquiveio')
        const todo: ITodo = {
            uid: new Date().toISOString(),
            task: task,
            done: false,
        }
        
        const allTodos = [...todos, todo]
        setTodos(allTodos)
    }

    return <TodoContext.Provider value={{
        todos,
        getCountDone,
        remove,
        toggle,
        create
    }}>{ children }</TodoContext.Provider>
}