import React, {useState, useMemo} from 'react'


const MComponent = ({arr}: any) => {
    console.log('MemoComponent')
    return <>
        <div>Hello, i am MemoComponent</div>
        {arr.map((item: any) => <p key={item + 1}>{item}</p>)}
    </>
}
const MemoComponent = React.memo(MComponent)

export const MemoAndUseMemo = () => {
    const [counter, setCounter] = useState<number>(0)
    const [value, setValue] = useState<string>('')
    const [arr, setArr] = useState(['vlad', 'diana', 'vlas'])

    const newArr = useMemo(() => {
        let newArr = arr.map((item: any) => item)
        return newArr
    }, [arr])

    const renameName = useMemo(() => {
        console.log('call renameName')
        return value + 1
    }, [value])

    return <div>
        <h3>MemoAndUseMemo</h3>
        <p>Value Counter: {counter}</p>
        <button onClick={() => setCounter(counter + 1)}>{counter}</button>
        <hr/>
        <input type="text" value={value} onChange={(e) => setValue(e.currentTarget.value)}/>
        <p>My name is {renameName}</p>
        <MemoComponent arr={newArr}/>
    </div>
}