import React, {useState} from 'react'
import {DivSlider, DivTest} from "./sldierstyle";
import {YoungSlider} from "./youngSlider";

export const Slider = () => {
    console.log('Silder')
    const [count, setCount] = useState(0)
    const [arr, setArr] = useState([
        {id: 1, article: 'name'},
        {id: 2, article: 'surname'},
        {id: 3, article: 'home'},
        {id: 4, article: 'underground'},
    ])
    const handlerAnim = (e: any) => {
        const result = document.getElementById(arr[count].article)
        const parent = document.getElementById('parent')
        console.log(result)
        if (parent)
            if (result) {
                setTimeout(() => {
                    setCount(count + 1)
                }, 1000)
                result.animate([
                    // {transform: 'translate(150px)'},
                    {position: 'relative', top: '0px', left: '150px'},
                    {position: 'relative', top: '0px', left: '0px'}
                ], 1000)
            }

    }
    console.log(arr[count].id)
    return <DivSlider>
        <h1>Slider</h1>
        <DivTest id={'parent'}>
            {arr.map(item => item.id === count + 1 ?
                <p id={item.article}>{item.article}</p> : null)}
        </DivTest>
        {/*<DivTest>*/}
        {/*    {arr.map(item => <p onClick={handlerAnim} id={item.article} className={'panim'}>{item.article}</p>)}*/}
        {/*</DivTest>*/}
        <button onClick={() => setArr([...arr, {id: arr.length + 1, article: Math.random().toString(36)}])}>Add</button>
        <button onClick={handlerAnim}>
            click
        </button>
    </DivSlider>
}
