import React, {Component, ComponentType, useState} from "react";

type AC = {
    value: number
}

export const MainHOC = React.memo(({value}: { value: number }) => {
    return <div>
        <h1>Hello, this is main HOC</h1>
        {value}
    </div>
})

export const inputHOC = <T, >(Component: ComponentType<T>) => (props: T) => {
    const [name, setName] = useState('')
    return <div>
        <h1>name : {name}</h1>
        <input type="text" onChange={(e) => setName(e.target.value)}/>
        <Component {...props} />
    </div>
}