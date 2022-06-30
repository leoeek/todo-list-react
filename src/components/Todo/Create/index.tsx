import { useContext, useState } from "react"
import { AppContext } from "../../../context"

import styles from "./Styles.module.css"

interface ITodoProps {
    fixed: boolean
}

interface ITodo {
    uid: string;
    task: string;
    done: boolean;
}

export function CreateTodo ({ fixed }: ITodoProps) {

    const { todos, setData } = useContext(AppContext)
    const [newTodo, setNewTodo] = useState('')

    const handleChangeTodo = function (event: React.ChangeEvent<HTMLInputElement>) {
        setNewTodo(event?.target.value)        
    }

    const handleCreate = function () {
        event?.preventDefault()

        const todo: ITodo = {
            uid: new Date().toISOString(),
            task: newTodo,
            done: false
        }

        setNewTodo('')
        const listTodos = todos
        listTodos.push(todo)

        setData(listTodos)
    }

    return (
        <form 
            className={`${styles.formTodo} ${fixed ? styles.fixed : ''}`}            
            onSubmit={handleCreate}
        >
            <input
                value={newTodo}
                onChange={handleChangeTodo}
                placeholder="Crie uma nova tarefa"
            />
            <button onClick={() => handleCreate()}>
                Criar 
            </button>
        </form>
    )
}