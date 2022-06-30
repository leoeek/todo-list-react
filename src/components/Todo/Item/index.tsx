import { Trash, Circle, CheckCircle } from 'phosphor-react';
import { useCallback } from 'react';

import styles from './Styles.module.css'

interface ITodo {
    uid: string;
    task: string;
    done: boolean;
    handleDone: Function;
    handleRemove: Function;
}

export function Item ({ uid, task, done, handleDone, handleRemove }: ITodo) {

    const checkbox = useCallback((done: boolean) => {
        return done ? <CheckCircle size={23} /> : <Circle size={23} />
    }, [])

    return (
        <div className={styles.todo__item}>
            <button 
                className={styles.todo__item_check}
                title="Marcar como concluída"
                onClick={() => handleDone(uid)}
            >
                { checkbox(done) }
            </button>

            <div className={`${styles.todo__item_text} ${done ? styles.todo__item_checked : ''}`}>
                { task }
            </div>
            
            <button 
                className={styles.todo__item_remove}
                title="Remover tarefa"
                onClick={() => handleRemove(uid)}
            >
                <Trash size={20} />
            </button>
        </div>
    )
}