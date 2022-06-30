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
    const { todos } = useContext(AppContext)    

    const [todos1, setTodos] = useState<ITodo[]>([]);
    const [countCreated, setCountCreated] = useState(0)
    const [countDone, setCountDone] = useState(0)

    const handleDone = (uid: string) => {
        const listTodos = todos
        const i = listTodos.findIndex(item => item.uid === uid)
        listTodos[i].done = !listTodos[i].done

        setTodos([...listTodos]);
    }
    
    const handleRemove = (uid: string) => {
        const newList = todos.filter((todo) => todo.uid !== uid)
        setTodos([...newList])
    }

    useEffect(() => {
        setCountCreated(todos.length)

        const totalDone = todos.filter((todo) => todo.done == true)
        setCountDone(totalDone.length)
    }, [todos])

    // useEffect(() => {
    //     const todo: ITodo[] =  [
    //         {
    //             uid: '239393',
    //             task: 'Teste',
    //             done: false
    //         },
    //         {
    //             uid: '239393111',
    //             task: 'Teste 22',
    //             done: false
    //         },
    //         {
    //             uid: '2223',
    //             task: 'Teste 3',
    //             done: true
    //         },
    //     ]

    //     setTodos(todo);
    // }, [])

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