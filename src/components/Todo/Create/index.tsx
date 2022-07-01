import { useCallback, useState } from "react"
import { useTodoContext } from "../../../context/Todo";
import { useTodo } from "../../../hooks/useTodo";

import styles from "./Styles.module.css"
interface ITodoProps {
    fixed: boolean
}

export function CreateTodo ({ fixed }: ITodoProps) {

    const { setTodos, todos } = useTodoContext()
    const {create } = useTodo({ todos, setTodos })

    const [newTodo, setNewTodo] = useState('')

    const handleChangeTodo = function (event: React.ChangeEvent<HTMLInputElement>) {
        setNewTodo(event?.target.value)        
    }

    const handleCreate = useCallback(() => {
        event?.preventDefault()

        create(newTodo)
        setNewTodo('')
    }, [newTodo, create])

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
            <button 
                disabled={newTodo.length === 0}
                onClick={() => handleCreate()}
            >
                Criar 
            </button>
        </form>
    )
}