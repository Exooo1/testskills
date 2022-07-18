import {combineReducers, createStore} from 'redux';
import {CountReducer} from './CountReducer';
import {loadState, saveState} from './LocalStorageRedux';

const rootReducers = combineReducers({
    count: CountReducer
})
export type StoreTypes = ReturnType<typeof rootReducers>

export const store = createStore(rootReducers, loadState())

store.subscribe(() => {
    saveState({
        count: store.getState().count
    })
})
