import React from 'react'

export const Tasks = () => {
    return <section>
        <h1>Tasks</h1>
    </section>
}
//palindrome
const palindrome = (value: string) => value.split('').reverse().join('') === value
console.log(palindrome('шашлык'))
console.log(palindrome('шалаш'))

const palindrome2 = (value: string) => {
    let word: string = ''
    for (let i = 1; i <= value.length; i++) word += value.at(-i)
    return word === value
}
console.log(palindrome2('шашлык'))
console.log(palindrome2('шалаш'))

//short-word
const shortWord = (value: string) => {
    return value.split(' ').reduce((p, c) => c.length > p.length ? p : c)
}
console.log(shortWord('Hello my name is vlas, me twenty five year old, and i am here'))

const shortWord2 = (value: string) => {
    return value.split(' ').sort((a, b) => a.length - b.length)[0]
}
console.log(shortWord2('Hello my name is vlas, me twenty five year old, and i am here'))

//createInitials
const initials = (value: string) => {
    return value.split(' ')[0][0].toUpperCase() + "." + value.split(' ')[1][0].toUpperCase()
}
const initials2 = (value: string) => {
    const spl = value.split(' ')
    return spl[0][0].toUpperCase() + "." + spl[1][0].toUpperCase()
}
const initials3 = (value: string) => {
    return value.split(' ').map(item => item[0].toUpperCase()).join('.')
}
console.log(initials('Vlas Maskalenchik'))
console.log(initials2('Diana Kostyan'))
console.log(initials3('Diana Kostyan'))

//minMax
const minMax = (value: number[]) => {
    let max = 0
    let min = 0
    max = value.reduce((p, c) => c > p ? c : p)
    min = value.reduce((p, c) => c > p ? p : c)
    return [max, min]
}
console.log(minMax([5, 6, 2, 291, 293012, 1, 32, 5]))

const minMax2 = (value: number[]) => {
    let max = 0
    let min = value[0]
    value.map(item => item > max ? max = item : min = item).map(item => min < item ? min : min = item)
    return [max, min]
}
console.log(minMax2([5, 6, 1, 291, 293012, 32]))

const minMax3 = (value:number[])=>{
    return value.sort((a,b)=>b-a)
}
console.log(minMax3([5, 6, 1, 291, 293012, 32]))

const minMax4 = (value:number[])=>{
    return [Math.max(...value),Math.min(...value)]
}
console.log(minMax4([5, 6, 1, 291, 293012, 32]))
