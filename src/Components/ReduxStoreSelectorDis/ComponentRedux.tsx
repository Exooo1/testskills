import React, {useMemo, useState} from 'react'
import {Provider, useDispatch, useSelector} from 'react-redux';
import {store} from './StoreRedux';
import {StoreTypes} from './StoreRedux';
import {addCountAC, StateCount} from './CountReducer';

const TestComponentOne = () => {
    console.log('TestComponentOne')
    const [number, setNumber] = useState(0)
    const dispatch = useDispatch()
    const countSelector = useSelector<StoreTypes, StateCount>(state => state.count)
    const add = useMemo(() => {
        return 2 + countSelector.count
    }, [countSelector])

    return <div>
        <h4 style={{color: 'green'}}>TestComponentOne</h4>
        <button onClick={() => dispatch(addCountAC())}>+</button>
        <p>{countSelector.count}</p>
        <Global add={add}/>
        <button onClick={() => setNumber(number + 1)}>{number}</button>
    </div>
}

export const ComponentRedux = () => {
    console.log('ComponentRedux')
    // return <Provider store={store}>
    //     <div>
    //         <h3>Hello,my name is ComponentRedux</h3>
    //         <TestComponentOne/>
    //     </div>
    // </Provider>
}

const Global = React.memo((props: any) => {
    console.log('GLOBAL')
    return <div>
        <h3>Global {props.add}</h3>
    </div>
})