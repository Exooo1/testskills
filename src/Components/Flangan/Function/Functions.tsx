import React from 'react'

export const Functions = () => {
    return <div>
        <h1>FunctionsTopic</h1>
    </div>
}

const func = (value: string) => {
    for (let val of value) console.log(val)
}
func('vlas')

// @ts-ignore
const func1 = (val: number) => {
    if (val === 10) return val
    return func1(val + 1)
}

const result = func1(1)
console.log(result)

for (var c = 0; c < 4; c++) {
    setTimeout(() => console.log(c), 1000)
}

// @ts-ignore
// console.log(func3())
// const func3 = function (){return 5}
console.log(func2())

function func2() {
    return 5
}

const func3 = () => {
    return {v: '100'}
}
const result1 = func3()
console.log(result1)

const callFunc = (value: number) => {
    return value * 2
}

const func4 = (a: number,b?:(t:number)=>{}) => {
    const result = b?.(a)
    console.log(result)
    console.log(a)
}

func4(500,callFunc)
func4(500)

// const strict = (function() { // @ts-ignore Находимся ли мы в строгом режиме!
//     return !this; }())
// console.log(strict)

