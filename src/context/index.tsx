import { ReactNode } from 'react'
import { TodoProvider } from './Todo';

interface IProviderProps {
    children: ReactNode;
}

export function AppProvider ({ children }: IProviderProps) {
    return <TodoProvider>{ children }</TodoProvider>
}
