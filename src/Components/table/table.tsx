import styles from './table.module.scss'
import {useEffect, useState} from "react";
import axios from "axios";
import {io} from "socket.io-client";

export const Table = () => {
    const [socket, setSocket] = useState<WebSocket | any>(null)
    const [text, setText] = useState('')
    const [messages, setMessages] = useState<any>([])
    useEffect(() => {
        console.log('1')
        const socket = io('http://localhost:8999');
        socket.on('message', (data) => {
            setMessages(data)
        });
        // @ts-ignore
        window.socket = socket
        setSocket(socket)
        return () => {
            socket.disconnect()
        }
    }, [])
    const handlerSend = () => {
        socket.emit('room', {id: 'anon', message: text})
    }
    console.log(messages)
    const [scale, setScale] = useState(1)
    return <main className={styles.main}>
        <button onClick={handlerSend}>click</button>
        <input value={text} onChange={(e) => setText(e.target.value)} type="text"/>
        <div style={{color:'white'}}>{messages?.messages?.map((item: any) => <h3>{item.message}</h3>)}</div>
        <button onClick={() => {
            axios.put('http://localhost:4000/comment', {
                name: `Diana`,
                data: `${new Date().toLocaleString()}`
            }).then(res => console.log(res))
        }
        }>Set
        </button>
        <button onClick={() => setScale(scale + 0.1)}>+</button>
        <button onClick={() => setScale(scale - 0.1)}>-</button>
        <section style={{transform: `scale(${scale})`}} className={styles.main_table}>
            <div className={styles.main_table_teamOne}>
                <div className={styles.botContent}>
                    <div>
                        <div>Vlas</div>
                        <div>Diana</div>
                    </div>
                    <div className={styles.bot}>10</div>
                </div>
                <div className={styles.topContent}>
                    <div>
                        <div>Vlas</div>
                        <div>Diana</div>
                    </div>
                    <div className={styles.top}>10</div>
                </div>
                <div className={styles.botContent}>
                    <div>
                        <div>Vlas</div>
                        <div>Diana</div>
                    </div>
                    <div className={styles.bot}>10</div>
                </div>
                <div className={styles.topContent}>
                    <div>
                        <div>Vlas</div>
                        <div>Diana</div>
                    </div>
                    <div className={styles.top}>10</div>
                </div>
            </div>
            <div className={styles.main_table_teamTwo}>
                <div className={styles.botContent}>
                    <div>
                        <div>Vlas</div>
                        <div>Diana</div>
                    </div>
                    <div className={styles.bot}>10</div>
                </div>
                <div className={styles.topContent}>
                    <div>
                        <div>Vlas</div>
                        <div>Diana</div>
                    </div>
                    <div className={styles.top}>10</div>
                </div>
            </div>
            <div className={styles.main_table_teamThree}>
            </div>
            <div className={styles.main_table_teamFour}>
            </div>
        </section>
    </main>
}
