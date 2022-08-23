import React, {useEffect, useState} from 'react'
import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        'API-KEY': '6784f4b9-4ed4-48aa-9226-420a03963cad'
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<any>(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
    },
}

export const Pagination = () => {
    const [cur, setCur] = useState<number>(1)
    const count: number = 5
    const maxCount: number = 25
    const [user, setUser] = useState<any>('')
    useEffect(() => {
        usersAPI.getUsers(cur, count).then(res => setUser(res.data.items))
    }, [cur])
    const pages: number[] = []
    const pagesCount = maxCount / count
    const right = function () {
        const res = pagesCount - cur
        if (res > 2) return 2
        return res
    }
    const left = () => {
        const res = 1 + cur
        if (res > 3) return 2
        if (res > 2) return 1
        return 0
    }
    for (let i = cur - left(); i <= cur + right(); i++) {
        pages.push(i)
    }
    return <div>
        <h1>Pagination</h1>
        <h1>page{cur}</h1>
        <div style={{width:'200px',background:'yellow'}}>{pages.map(item => <button onClick={() => setCur(item)}
                                        style={{
                                            border: 'none',
                                            borderRadius: '90px',
                                            margin: '5px 5px',
                                            background: item === cur ? 'red' : 'white'
                                        }}>{item}</button>)}{pagesCount - cur <= 2 ? null :
            <button><b>...</b> {pagesCount}</button>}
        </div>
    </div>
}