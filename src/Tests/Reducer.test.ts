export {}

const initialState: { count: number } = {
    count: 0
}

const reducer = (state: { count: number }, action: { type: string }): any => {
    switch (action.type) {
        case 'ADD_COUNT':
            return {...state, count: state.count + 1}
        default:
            throw new Error('Bad Action')
    }

}
test('Testing reducer', () => {
    expect(initialState.count).toBe(0)
    const completedReducer = reducer(initialState, {type: 'ADD_COUNT'})
    expect(completedReducer.count).toBe(1)
})

test('Fake Action', () => {
    expect(() => {
        reducer(initialState, {type: 'FAKE_ADD'})
    }).toThrowError()
})

const container = ['name','milk']

test('check container on correct object', () => {
    expect(container).toContain('name')
})



