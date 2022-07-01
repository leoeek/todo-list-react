import { useEffect, useState } from 'react'
import clipboard from '../../../assets/clipboard.svg'
import { useTodoContext } from '../../../context/Todo';
import { useTodo } from '../../../hooks/useTodo';
import { Item } from '../Item';
import styles from './Styles.module.css'

export function List () {

    const { todos, setTodos } = useTodoContext();
    const { getCountDone } = useTodo({ todos, setTodos })

    const [countCreated, setCountCreated] = useState(0)
    const [countDone, setCountDone] = useState(0)

    useEffect(() => {
        setCountCreated(todos?.length)
        setCountDone(getCountDone)
    }, [todos])

    return (
        <main className={styles.container}>
            <section className={styles.resume}>
                <p className={styles.resume__created}>Tarefas criadas <span className={styles.resume__total}>{ countCreated }</span></p>
                <p className={styles.resume__finished}>Concluídas <span className={styles.resume__total}>{ countDone }</span></p>
            </section>    

            {countCreated === 0 ? (
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
                            />
                })
            )}   
        </main>
    )
}