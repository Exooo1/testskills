export {}

let initialState = {
    isCity:false
}

beforeEach(() => {
    initialState = {
        isCity: false
    }
});

test('check initialState for True ', () => {
    initialState.isCity = true
    expect(initialState.isCity).toBe(true)
})

test('check initialState for False ', () => {
    expect(initialState.isCity).toBe(false)
})

describe('test', () => {
    beforeEach(() => {
        initialState.isCity = true
    });
    test('testing city', () => {
        expect(initialState.isCity).not.toBe(false)

    })
})

test.only('this will be the only test that runs', () => {
    throw new Error('gGG')
    // expect(true).not.toBe(false);
});
