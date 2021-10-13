import {combineReducers, createStore} from 'redux';
import {TestReducer} from './TestReducer'

const rootReducers = combineReducers({
    test: TestReducer
});

export type StoreType = ReturnType<typeof rootReducers>

export const store = createStore(rootReducers);
