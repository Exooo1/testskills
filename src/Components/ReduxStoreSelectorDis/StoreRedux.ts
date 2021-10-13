import {combineReducers, createStore} from 'redux';
import {CountReducer} from './CountReducer';

const rootReducers = combineReducers({
    count: CountReducer
})
export type StoreTypes = ReturnType<typeof rootReducers>

export const store = createStore(rootReducers)