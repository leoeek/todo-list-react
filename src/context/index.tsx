import React, { createContext, ReactNode, useEffect, useState } from 'react'

type ITodo = {
    uid: string;
    task: string;
    done: boolean;
}

export interface IContextData {
    todos: ITodo[];    
    setData: (todos: ITodo[]) => void;
}

interface IProviderProps {
    children: ReactNode;
}

export const AppContext = createContext<IContextData>(
    {} as IContextData
)

export function AppProvider ({ children }: IProviderProps) {
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        const todo: ITodo[] =  []

        setTodos(todo);
    }, [])

    const setData = (data: ITodo[]) => {
        setTodos([...data])
    }

    return <AppContext.Provider value={{ todos, setData }}>{ children }</AppContext.Provider>
}
