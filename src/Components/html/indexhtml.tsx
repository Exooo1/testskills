import styles from './index.module.scss'
import {ContainerFocus} from "./containerDiv/containerfocus";

export const Indexhtml = () => {
    return <main className={styles.main}>
        <h1>HTML-EXPERIENCE</h1>
        <div>
            <ContainerFocus/>
        </div>
    </main>
}
