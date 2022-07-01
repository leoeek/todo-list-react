import { ReactNode } from 'react'
import { TodoService } from './Todo';

interface IProviderProps {
    children: ReactNode;
}

export function AppProvider ({ children }: IProviderProps) {
    return <TodoService>{ children }</TodoService>
}
