import React, {ReactChild, ReactNode} from "react";

type ChildrenComponentType = {
    value: number | string
    // children: ReactNode
    children: ReactChild
}
export const ChildrenComponent: React.FC<ChildrenComponentType> = ({value, children}) => {
    return <div>
        <h1>Hello, here will be a some content with Children</h1>
        <h2>Some text from Value : {value}</h2>
        {children}
    </div>
}