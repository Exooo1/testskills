import React, {ChangeEvent, useEffect, useState, useTransition} from 'react'
import axios from 'axios'
import {TransitionItems} from './TransitionItems';

const filter = (array: any, search: string) => {
    return array.filter((item: any) => item.title.includes(search))
}

export const Transition = () => {
    const [isPending, setStart] = useTransition()
    const [filterSearch, setFilterSearch] = useState('')
    const [search, setSearch] = useState<string>('')
    const [photo, setPhoto] = useState<any>([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos').then(res => res.data).then(setPhoto)
    }, [])
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
        // setStart(() => {
        //     setFilterSearch(e.target.value)
        // })
    }
    return <div>
        <h1>Test transition</h1>
        <h2>Search text: {search}</h2>
        {isPending && <h1>Loading...</h1>}
        <input type="text" value={search} onChange={changeHandler}/>
        <TransitionItems value={filter(photo, search)}/>
    </div>
}
