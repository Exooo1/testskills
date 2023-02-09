import {useEffect, useState} from "react";

export const Timer = () => {
    const [time, setTime] = useState(0)
    const [isActive, setIsActive] = useState<boolean>(false)
    useEffect(() => {
        let timeId: any;
        if (isActive) timeId = setInterval(() => setTime(state => state + 1), 1000)
        return () => clearInterval(timeId)
    }, [isActive])
    const handlerIsActive = (value: boolean) => setIsActive(state => state = value)
    const handlerTime = () => {
        setTime(state => state + 1)
        setTime(state => state + 1)
        setTime(state => state + 1)
        setTime(state => state + 1)

    }
    return <section>
        <h1>Time: {time}</h1>
        <button onClick={() => handlerIsActive(true)}>start</button>
        <button onClick={() => handlerIsActive(false)}>stop</button>
        <button onClick={handlerTime}>click</button>
    </section>
}