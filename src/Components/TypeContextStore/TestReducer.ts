const initialPostState: any = {
    name: 'vlas',
    age: 22
}

export const TestReducer = (state = initialPostState, action: any): any => {
    switch (action.type) {
        default:
            return {...state}
    }
}


