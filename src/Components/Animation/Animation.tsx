import {MainDiv} from "./animationstyle";
import {useEffect, useState} from "react";

export const Animation = () => {
    const [count, setCount] = useState(1)
    const [value, setValue] = useState([
        {id: 1, article: 'hello', status: false},
    ])
    // useEffect(() => {
    //     const int = setInterval(() => {
    //         console.log(count)
    //         const result = value.map(item => {
    //             if(count===value.length+1)setCount(1)
    //             if (item.id === count) {
    //                 setCount(state => state + 1)
    //                 return {...item, status: true}
    //             } else return {...item,status: false}
    //         })
    //         setValue(result)
    //     }, 1000)
    //     return () => clearInterval(int)
    // }, [count])
    const changeMe = (id: number) => {
        setValue(value.map(item => {
            if (id === item.id) return {...item, status: true}
            return {...item, status: false}
        }))
    }
    const addMe = () => {
        setValue([...value, {id: value.length + 1, article: 'Some', status: false}])
        setCount(count+1)
    }
    const deletes = (id: number) => {
        setValue(value.filter((item) => {
            if (item.id !== id) return {...item}
        }))
    }
    useEffect(() => {
        // @ts-ignore
        const but = document.getElementById(`${count}`)
        console.log(but)
        if (but) {
            but.animate([
                {position:'relative',top:'0px',left:'10px'},
                {top:'160px',left:'10px'},
            ], 5000)
        }
    }, [count])
    return <MainDiv>
        <button onClick={addMe}>add</button>
        {value.map(item => <div id={item.id + ""} style={{top:`${120*item.id}px`,left:'10px'}}
                                onClick={() => deletes(item.id)}
                              >{item.article}</div>)}
    </MainDiv>
}