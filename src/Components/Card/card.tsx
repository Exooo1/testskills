import styles from './card.module.scss'
import {ChangeEvent, useRef, useState} from "react";

export const Card = () => {
    const [one, setOne] = useState<string>('')
    const [two, setTwo] = useState<string>('')
    const [three, setThree] = useState<string>('')
    const [focus, setFocus] = useState<string>('')
    const handlerFocus = (e: any) => setFocus(e.target.value)
    const refOne = useRef(null);
    const refTwo = useRef(null);
    const refThree = useRef(null);
    const switcher = (e: ChangeEvent<HTMLInputElement>) => {
        let find = e.target.value.length + one.length + two.length
        if (e.target.value.length === 0) {
            find = one.length + two.length + three.length
        }
        switch (find) {
            case 1:
                setOne(e.target.value)
                if (!e.target.value) break
                else (e.target.nextElementSibling as HTMLElement).focus()
                break;
            case 2:
                setTwo(e.target.value)
                if (!e.target.value) {
                    (e.target.previousElementSibling as HTMLElement).focus()
                } else (e.target.nextElementSibling as HTMLElement).focus()
                break;
            case 3:
                setThree(e.target.value)
                if (!e.target.value) (e.target.previousElementSibling as HTMLElement).focus()
                break;
        }
    }
    return <section className={styles.card}>
        <section className={styles.card_content}>
            <h1>Card</h1>
            <div>
                <input type="text" maxLength={1} value={one} ref={refOne} autoFocus={true} onChange={switcher}/>
                <input type="text" maxLength={1} value={two} ref={refTwo} onChange={switcher}/>
                <input type="text" maxLength={1} value={three} ref={refThree} onChange={switcher}/>
            </div>
            <section className={styles.border}>
                <div className={focus.length >= 1 ? styles.borderActive : ''}><h1>Here: {focus}</h1></div>
                <input type="text" value={focus} onChange={handlerFocus}/>
            </section>
        </section>
    </section>
}
