import React, {Component, ComponentType, useState} from "react";

export type AC = {
    value: number
}

export const MainHOC = React.memo(() => {
    return <div>
        <h1>Hello, this is main HOC</h1>
    </div>
})

export const inputHOC = <T, >(Component: ComponentType<T|{}>) => () => {
    const [name, setName] = useState('')
    return <div>
        <h1>name : {name}</h1>
        <input type="text" onChange={(e) => setName(e.target.value)}/>
        <Component />
    </div>
}