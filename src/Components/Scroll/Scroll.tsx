import './scroll.css'
import {MouseEventHandler, useState} from "react";

let count: Array<number> = []
for (let i = 0; i < 50; i++) {
    count.push(i)
}
export const Scroll = () => {
    const [clientY, setClientY] = useState(0)
    const [clientX, setClientX] = useState(0)
    const handlerMouseDown = (e: any) => {
        console.log('down')
        const elem = document.getElementById('coordinat')
        // @ts-ignore
        let client = e.clientY
        // @ts-ignore
        console.log(elem.clientHeight)
        // @ts-ignore
        elem.onmousemove = (e: MouseEvent) => {
            console.log(e.clientY)
            // @ts-ignore
            elem.scrollTo(0, e.clientY - client + clientY)
        }
    }
    const obj = {count: 0}

    return <div className={'content'}>
        <h1 onClick={() => {
            obj.count++
            console.log(obj)
        }
        }>{obj.count}</h1>
        <h1>SCROLL Y:{clientY} - X:{clientX}</h1>
        <div id={'coordinat'} className={'scroll'} onMouseDown={handlerMouseDown} onMouseUp={() => {
            console.log('up')
            const elem = document.getElementById('coordinat')
            // @ts-ignore
            elem.onmousemove = null
            // @ts-ignore
            setClientY(elem.scrollTop)
        }
        }>
            This is Element
            {count.map(item => <h2>{item}</h2>)}
        </div>
        <div>2</div>
    </div>
}
