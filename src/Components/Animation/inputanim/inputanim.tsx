import styles from './inputanim.module.scss'
import {useState} from "react";


export const Inputanim = () => {
    const [anim, setAnim] = useState(false)
    return <section className={styles.inputanim}>
        <p>Here will your text</p><input onClick={()=>setAnim(!anim)} className={anim ? styles.anim : ''} type="text"/>
    </section>
}
