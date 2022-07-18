import {useDeferredValue} from 'react'
export const TransitionItems = ({value}: any) => {
    const result = useDeferredValue(value)
    return <div>
        {result.map((item: any) => <h3>{item.title}</h3>)}
    </div>
}