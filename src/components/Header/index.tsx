import logo from '../../assets/logo.svg'
import { CreateTodo } from '../Todo/Create'

import styles from "./Styles.module.css"

export function Header () {
    return (
        <header className={styles.header}>
            <img src={logo} alt="Logo da aplicação" />
            
            <CreateTodo fixed />
        </header>
    )
}