import styles from './containerfocus.module.scss'
import {useState,} from "react";

export const ContainerFocus = () => {
    const [focus, setFocus] = useState<number>(0)
    const handlerFocus = (e: any) => {
        const container = document.querySelectorAll('input')
        if (e.key === 'Enter') {
            if (e.target.value && focus < 2) {
                container[focus + 1].focus()
                setFocus(state => state + 1)
            }
        }
    }

    return <section id='containerFocus' className={styles.containerFocus}>
        <h2>Hello, ContainerFocus</h2>
        <input onKeyDown={handlerFocus} type="text"/>
        <input onKeyDown={handlerFocus} type="text"/>
        <input onKeyDown={handlerFocus} type="text"/>
    </section>
}
