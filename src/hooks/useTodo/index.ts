import { Dispatch, SetStateAction } from 'react'
import { ITodo } from '../../types/ITodo';

export interface ITodoReturn {
    getCountDone: number;    
    remove: (uid: string) => void;
    toggle: (uid: string) => void;
    create: (task: string) => void;
}

interface IProps {
    todos: ITodo[];
    setTodos: Dispatch<SetStateAction<ITodo[]>>;
}

function useTodo({ todos, setTodos }: IProps): ITodoReturn {
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
        const todo: ITodo = {
            uid: new Date().toISOString(),
            task: task,
            done: false,
        }
        
        const allTodos = [...todos, todo]
        setTodos(allTodos)
    }

    return {
        getCountDone,
        remove,
        toggle,
        create
    }
}

export { useTodo }