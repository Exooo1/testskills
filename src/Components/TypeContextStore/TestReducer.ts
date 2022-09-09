const initialPostState: {name:'vlas',age:number} = {
    name: 'vlas',
    age: 22
}

export const TestReducer = (state = initialPostState, action: any): any => {
    switch (action.type) {
        default:
            return state
    }
}


