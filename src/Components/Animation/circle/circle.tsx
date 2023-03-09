import styles from './circle.module.scss'
import {useEffect, useState} from "react";

const Some =()=>{
    console.log('3')
    useEffect(()=>{
        console.log('4')
    },[])
    return <h1>Some</h1>
}

export const Circle = () => {
    const [name,setName]=useState('')
    const [surname,setSurname]=useState('')
    const [user,setUser]= useState({name:'',surname:''})
    console.log('1')
    useEffect(()=>{
        console.log('2')
        setUser({name,surname})
    },[name,surname])
    useEffect(()=>{
        console.log('2.1')
       setName('vlas')
    },[])
    useEffect(()=>{
        console.log('2.2')
        setSurname('maskalenchik')
    },[])
    return <section className={styles.circle}>
        <h2>Loading...</h2>
        {/*<div>*/}
        {/*</div>*/}
        <h1 style={{color:"white"}}>{user.name +" "+ user.surname}</h1>
        {/*<Some/>*/}
    </section>
}
