import React, {useCallback, useEffect, useMemo, useState} from 'react'

const Childd = ({call}: any) => {
    console.log('child')
    return <div>
        <h3 onClick={() => call()}>Child</h3>
    </div>
}

const Child = React.memo(Childd)


export const UseCallbackTest = () => {
    const [count, setCount] = useState(0)
    const [arr, setArr] = useState(['react', 'css'])
    // const memoCall = useCallback(() => {
    //     console.log('hello')
    //     const newq = [...arr, 'angular']
    //     setArr(newq)
    // }, [arr])
    const memoCall = useCallback(() => {
        console.log(arr)
    }, [arr])

    return <div>
        <h3>Callback</h3>
        <button onClick={() => setCount(count + 1)}>{count}</button>
        <Child call={memoCall}/>
        <button onClick={()=>setArr([...arr,'angular'])}></button>
        {arr.map(item => <p>{item}</p>)}
    </div>
}