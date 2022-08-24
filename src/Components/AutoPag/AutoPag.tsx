import React, {useState} from 'react'

export const AutoPag = () => {
    const [user, setUser] = useState([
        {id: 1, title: 'vlas'},
        {id: 2, title: 'vlas'},
        {id: 3, title: 'vlas'},
        {id: 4, title: 'vlas'},
        {id: 5, title: 'vlas'},
        {id: 6, title: 'vlas'},
        {id: 7, title: 'vlas'},
        {id: 8, title: 'vlas'},
        {id: 9, title: 'vlas'},
        {id: 10, title: 'vlas'},
    ])
    return <div>
        <h1>AutoPag</h1>
        {user.map(item => <div key={item.id}>
            <h1>{item.title}</h1>
        </div>)}
    </div>
}