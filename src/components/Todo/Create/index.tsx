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

    const { setData } = useContext(AppContext)
    const [newTodo, setNewTodo] = useState('')

    const handleCreateTodo = function () {
        event?.preventDefault()
        console.log('criado')
    }

    const handleChangeTodo = function (event: React.ChangeEvent<HTMLInputElement>) {
        setNewTodo(event?.target.value)        
    }

    const handleCreate = function () {
        const todo: ITodo = {
            uid: new Date().toISOString(),
            task: newTodo,
            done: false
        }
        setData([todo])
    }

    return (
        <form 
            className={`${styles.formTodo} ${fixed ? styles.fixed : ''}`}            
            onSubmit={handleCreateTodo}
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