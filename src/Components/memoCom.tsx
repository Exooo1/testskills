import {useState, memo, useCallback, useMemo} from "react";

const MemoOne = memo(({func}:any) => {
    console.log('MemoOne',func)
    return <div>
        <h2>MemoOne</h2>
    </div>
})

const MemoTwo= memo(({func}:any) => {
    console.log('MemoTwo',func)
    return <div>
        <h2>MemoTwo</h2>
    </div>
})

export const MemoCom = () => {
    const [count, setCount] = useState(0)
    const func = ()=>{}
    const memoResult = useMemo(()=>{
        return <MemoTwo func={setCount}/>
    },[])
    return <div>
        <h1>Hello</h1>
        <button onClick={() => setCount(state => state + 1)}>{count}</button>
        <MemoOne func={setCount}/>
        {memoResult}
    </div>
}