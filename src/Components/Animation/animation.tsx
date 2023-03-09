import styles from '../html/index.module.scss'
import {Inputanim} from "./inputanim/inputanim";
import {Circle} from "./circle/circle";

export const Animation = () => {
    return <main className={styles.main}>
        <h2>Animation</h2>
        <section className={styles.main_section}>
            {/*<Inputanim/>*/}
            <Circle/>
        </section>
    </main>
}
