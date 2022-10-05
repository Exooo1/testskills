import React from 'react'

export const Functions = () => {
    return <div>
        <h1>FunctionsTopic</h1>
    </div>
}

// const anyNumber = (value: number) => value + Math.ceil(Math.random() * 10)
// const square = (value: number) => value + value
// console.log(square(anyNumber(5)))

// const anyNumber = (value: number) => value + Math.ceil(Math.random() * 10)
// const square = (value: number, func: (value: number) => number) => {
//     return value * value + func(value)
// }
// console.log(square(anyNumber(5), (value) => {
//     return 2 + value
// }))

/*const sum = (value: number) => {
    if (value > 5) return true
    else return value
}
const sum2 = (value: number) => {
    if (value > 3) return true
    else return value
}
const start = () => sum(6) === sum2(5) ? console.log('true') : console.log('false')
start()*/

const up = (q: number, c: (some: number) => void) => {
    const b = 20;
    const a = 20
    c(b + a + q)
}

up(20, (a: number) => {
    console.log(a)
})

const func = (num: number, a?: (a: number) => void) => {
    const num2 = 10
    console.log(a?.(num * num2))

}
func(7,(item)=>{
    return item*1000
})




