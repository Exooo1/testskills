import React from 'react'
import {Provider, useDispatch, useSelector} from 'react-redux';
import {store} from './StoreRedux';
import {StoreTypes} from './StoreRedux';
import {addCountAC, StateCount} from './CountReducer';

const TestComponentOne = () => {
    const dispatch = useDispatch()
    const countSelector = useSelector<StoreTypes, StateCount>(state => state.count)
    console.log(countSelector)
    return <div>
        <h4 style={{color: 'green'}}>TestComponentOne</h4>
        <button onClick={() => dispatch(addCountAC())}>+</button>
        <p>{countSelector.count}</p>
    </div>
}

export const ComponentRedux = () => {
    return <Provider store={store}>
        <div>
            <h3>Hello,my name is ComponentRedux</h3>
            <TestComponentOne/>
        </div>
    </Provider>

}