import {lazy, Suspense, useEffect, useState} from 'react';
import axios from 'axios';

const Content = lazy(() => import('./LazyComponent'));

export const TestSuspense = () => {
    const [comment, setComment] = useState<any>()
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos').then(res => res.data).then(setComment)
    }, [])
    return <div>
        <Suspense fallback={<h1>Loading</h1>}>
            <Content comment={comment}/>
        </Suspense>
    </div>
}