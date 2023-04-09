import {useEffect, useState} from "react";

let interval: any;

export const InstagramSlider = () => {
    const [value, setValue] = useState(0)
    const [start, setStart] = useState(true)

    const getInterval = () => {
        setValue(start => {
            if (start === 39) setStart(false)
            return start + 1
        })
    }

    useEffect(() => {
        if (start) interval = setInterval(getInterval, 100)
        return () => clearInterval(interval)
    }, [start])

    return <section>
        <h1>Instagram Slider!</h1>
        <progress value={value} max={50}/>
        {/*<button onClick={() => setStart(true)}>start</button>*/}
        {/*<button onClick={() => setStart(false)}>stop</button>*/}
    </section>
}