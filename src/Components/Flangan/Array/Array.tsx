import React from 'react'

const f =()=>{
    const write = File
}
export const Arrays = ({user}:any) => {
    if(user)console.log(user)
    const {name, age} = user || {name:'vlas',age:25}
    console.log(name,age)
    return <div><h1>Array {name+ age}</h1><a href='../../../../public/logo512.png' id="link" download="code">Download </a></div>
}

const arr = [3, 4, 5, 6]
const arrtwo = [1, 2, ...arr, 7, 8, 9, 10]
const arrthree = new Array()
for (let i = 0; i < arrtwo.length; i++) {
    arrthree.push(arrtwo[i])
}
arrthree[0] = 100
console.log(arrthree)
console.log(arrtwo)

const lenghArray = new Array(5)
lenghArray[0] = 1
console.log(lenghArray)

const arrFour = Array.of(500)
console.log(arrFour)
const arrFive = Array.from(arrtwo)
console.log(arrFive)
const a: any = []
a['2000'] = 2
a[1] = 2
a[2] = true
a[-5.5] = 10
a['vlas'] = 11
console.log(a, a.length)