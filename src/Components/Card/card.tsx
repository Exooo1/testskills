import styles from './card.module.scss'
import {useState} from "react";

export const Card = () => {
    const [one, setOne] = useState<string>('')
    const [two, setTwo] = useState<string>('')
    const [three, setThree] = useState<string>('')
    const [four, setFour] = useState<string>('')
    const [name, setName] = useState<string>('')
    const handlerReset = () => {
        setOne('')
        setTwo('')
        setThree('')
        setFour('')
    }
    const handlerNumber = (e: any) => {
        setName(name + e.target.value)
        console.log(e.target.value.length + name.length)
        switch (e.target.value.length + name.length) {
            case 1:
                setOne(e.target.value[0])
                break;
            case 2:
                setTwo(e.target.value[0])
                break;
            case 3:
                console.log()
                setThree(e.target.value[0])
                break;
            case 4:
                setFour(e.target.value[0])
                break;
        }
    }
    return <section className={styles.card}>
        <section className={styles.card_content}>
            <h1>Card</h1>
            <section>
                <section>
                    {one ? <p className={styles.anim}>{one}</p> :
                        <input maxLength={4} onChange={handlerNumber} type="text"/>}
                    {two ? <p className={styles.anim}>{two}</p> :
                        <input maxLength={4} onChange={handlerNumber} type="text"/>}
                    {three ? <p className={styles.anim}>{three}</p> :
                        <input maxLength={4} onChange={handlerNumber} type="text"/>}
                    {four ? <p className={styles.anim}>{four}</p> :
                        <input maxLength={4} onChange={handlerNumber} type="text"/>}
                </section>
                <button onClick={handlerReset}>Reset</button>
            </section>
        </section>
    </section>
}