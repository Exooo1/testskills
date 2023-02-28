import styles from '../html/index.module.scss'
import {Inputanim} from "./inputanim/inputanim";

export const Animation = () => {
    return <main className={styles.main}>
        <h2>Animation</h2>
        <section>
            <Inputanim/>
        </section>
    </main>
}
