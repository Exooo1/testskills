import React from 'react'

const f = () => {
    const write = File
}
export const Arrays = ({user}: any) => {
    if (user) console.log(user)
    const {name, age} = user || {name: 'vlas', age: 25}
    console.log(name, age)
    return <div><h1>Array {name + age}</h1><a href='../../../../public/logo512.png' id="link"
                                              download="code">Download </a></div>
}
//
// const arr = [3, 4, 5, 6]
// const arrtwo = [1, 2, ...arr, 7, 8, 9, 10]
// const arrthree = new Array()
// for (let i = 0; i < arrtwo.length; i++) {
//     arrthree.push(arrtwo[i])
// }
// arrthree[0] = 100
// console.log(arrthree)
// console.log(arrtwo)
//
// const lenghArray = new Array(5)
// lenghArray[0] = 1
// console.log(lenghArray)
//
// const arrFour = Array.of(500)
// console.log(arrFour)
// const arrFive = Array.from(arrtwo)
// console.log(arrFive)
// const a: any = []
// a['2000'] = 2
// a[1] = 2
// a[2] = true
// a[-5.5] = 10
// a['vlas'] = 11
// console.log(a, a.length)
//
// const arrs = []
// arrs[7000] = 1
// arrs[1] = 1
// arrs[2] = 1
// arrs['3'] = 1
// console.log(arrs)
// const letter = 'Hello, i am vlas'
// // @ts-ignore
// const resultLetter = [...letter]
// // @ts-ignore
// for (let [index, letter] of resultLetter.entries()) {
//     console.log(index, letter)
// }
// console.log(resultLetter.entries())
//
// const table = []
// for (let i = 0; i < 10; i++) {
//     table[i] = new Array(10)
// }
// for (let i = 0; i < table.length; i++) {
//     // @ts-ignore
//     for (let [index, j] of table[i].entries()) {
//         table[i][index] = i * index
//     }
// }
// console.log(table)

const array = [1, 2, 3, 4, 5, 6]
// const result = array.some(item => item < 4) - it will be true, because it has one element that is less than four
// const result = array.every(item => item < 4) - it will be false, because all elements had be < 4
// const result = array.filter(item => !(item % 2)) - filters your array about yuslovie
// const result = array.filter(item => !(item % 2)) - filters your array about yuslovie
const arrayUsers = [
    {id: 1, name: 'vlas'},
    {id: 2, name: 'vlad'},
    {id: 3, name: 'vladd'},
    {id: 4, name: 'Diana'},
]
const result = arrayUsers.reduce((i, j) => {
    const u = {
        id: 2,
        name: ''
    }
    return {...u, id: i.id += j.id, name: i.name += j.name}
})
//
// const result = array.reduce((item, ites) => item + ites)
console.log(result)

