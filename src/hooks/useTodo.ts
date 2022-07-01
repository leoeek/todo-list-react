import { useContext } from 'react'
import { ITodoReturn, TodoContext, TodoService } from '../context/Todo'

function useTodo (): ITodoReturn {
    return useContext(TodoContext)
}

export { useTodo, TodoService }