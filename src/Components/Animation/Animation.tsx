import {Divs} from "./animationstyle";
import {useState} from "react";

export const Animation = () => {
    const [count, setCount] = useState(1)
    const [ff, setFF] = useState(false)
    const [value, setValue] = useState([
        {id: 1, article: 'omg', status: false},
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
    // const changeMe = (id: number) => {
    //     setValue(value.map(item => {
    //         if (id === item.id) return {...item, status: true}
    //         return {...item, status: false}
    //     }))
    // }
    const addMe = () => {
        setValue([...value, {id: value.length + 1, article: 'Some' + value.length, status: false}])
    }
    const deletes = (id: number, e: any) => {
        // console.log('1')
        // setValue(value.map(item => {
        //     if (id === item.id) return {...item, status: true}
        //     else return {...item}
        // }))
        e.target.animate([
            {transform: 'translate(150px)'}
        ], 500)

        setTimeout(() => {
            // @ts-ignore
            document.getElementById('ss').removeChild(e.target)
        }, 5000)
        // setTimeout(()=>{
        // // @ts-ignore
        //     document.getElementById('ss').removeChild(e.target)
        // },1000)
    }
    // useEffect(() => {
    //     // @ts-ignore
    //     const but = document.getElementById(`${count}`)
    //     console.log(but)
    //     if (but) {
    //         but.animate([
    //             {position:'relative',top:'0px',left:'10px'},
    //             {top:'160px',left:'10px'},
    //         ], 5000)
    //     }
    // }, [count])
    function b(e: any) {
        // setFF(true)
        // if (e.target.tagName === "LI") {
        //     // @ts-ignore
        //     const div = document.getElementById('ss')
        //     const h1 = document.createElement('h1')
        //     h1.innerText = 'hello'
        //     // @ts-ignore
        //     e.target.animate([
        //         {transform: 'translate(150px)'},
        //     ], 1000)
        //     setTimeout(() => {
        // @ts-ignore
        //         div.removeChild(e.target)
        //     }, 1000)
        // }
        // setTimeout(() => {
        // }, 1000)
    }

    return <Divs>
        <div>Scale</div>
        <div className={'two'}>Translate</div>
        {/*<li>1</li>*/}
        {/*<li>2</li>*/}
        {/*<li>3</li>*/}
        {/*<li>4</li>*/}
        {/*<button onClick={addMe}>add</button>*/}
        {/*{value.map(item => <div className={item.status ? 'anim' : 'none'}*/}
        {/*                        onClick={(e) => deletes(item.id, e)}*/}
        {/*>{item.article}</div>)}*/}
        {/*<div className='test'>*/}
        {/*    {ff&&<div>2323</div>}*/}
        {/*</div>*/}
    </Divs>
}