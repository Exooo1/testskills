export {}

export type StateCount = {
    count: number
}

export type ActionTypes = ReturnType<typeof addCountAC>

const initialStateCount: StateCount = {count: 0}

export const CountReducer = (state = initialStateCount, action: ActionTypes) => {
    switch (action.type) {
        case 'ADD_COUNT':
            return {...state, count: state.count + 1}
        default:
            return {...state}
    }
}

export const addCountAC = () => {
    return {
        type: 'ADD_COUNT'
    }
}
