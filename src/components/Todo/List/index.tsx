import { useCallback, useContext, useEffect, useState } from 'react'
import clipboard from '../../../assets/clipboard.svg'
import { AppContext } from '../../../context';
import { Item } from '../Item';
import styles from './Styles.module.css'

interface ITodo {
    uid: string;
    task: string;
    done: boolean;
}

export function List () {
    const { todos, setData } = useContext(AppContext)    

    const [countCreated, setCountCreated] = useState(0)
    const [countDone, setCountDone] = useState(0)

    const handleDone = (uid: string) => {
        const listTodos = todos
        const i = listTodos.findIndex(item => item.uid === uid)
        listTodos[i].done = !listTodos[i].done

        setData(listTodos)
    }
    
    const handleRemove = (uid: string) => {
        const newList = todos.filter((todo) => todo.uid !== uid)
        setData([...newList])
    }

    const getCountDone = () => {
        return todos.filter((todo) => todo.done == true).length
    }

    useEffect(() => {
        setCountCreated(todos.length)
        setCountDone(getCountDone())

        const totalDone = todos.filter((todo) => todo.done == true)
        setCountDone(totalDone.length)
    }, [todos])

    return (
        <main className={styles.container}>
            <section className={styles.resume}>
                <p className={styles.resume__created}>Tarefas criadas <span className={styles.resume__total}>{ countCreated }</span></p>
                <p className={styles.resume__finished}>Concluídas <span className={styles.resume__total}>{ countDone }</span></p>
            </section>    

            {todos.length === 0 ? (
                <section className={styles.box_todo}>
                    <img src={clipboard} />

                    <p className={styles.box_todo__empty}><strong>Você ainda não tem tarefas cadastradas</strong><br />
                    Crie tarefas e organize seus itens a fazer</p>
                </section> 
                ) : 
            (
                todos.map((todo) => {
                    return <Item 
                                key={todo.uid}
                                task={todo.task} 
                                uid={todo.uid} 
                                done={todo.done}
                                handleDone={handleDone}
                                handleRemove={handleRemove}
                            />
                })
            )}   
        </main>
    )
}