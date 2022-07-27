export const Number = () => {
    return <div><h1>Number</h1></div>
}
const value = 22
console.log(value.toPrecision(3))//22.00

let _16 = 0x190
let _2 = 0b1010
let _8 = 0o11123
console.log(_16)
console.log(_2)
console.log(_8)

const drob1 = 33.2
const drob2 = .25
console.log(drob1 + drob2)
const va = 4E-2
console.log(va)
const _2_ = 0b1000_0100_0010
console.log(_2_)
const number = 1_000_000

const number1 = -10 * -1
// const number1 = -10 * -1
console.log(Math.abs(number1))//-10=>10