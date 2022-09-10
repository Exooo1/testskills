export const NumberT = () => {
    return <div><h1>Number</h1></div>
}
const value = 22
// console.log(value.toPrecision(3))//22.00
//
// let _16 = 0x190
// let _2 = 0b1010
// let _8 = 0o11123
// console.log(_16)
// console.log(_2)
// console.log(_8)
//
// const drob1 = 33.2
// const drob2 = .25
// console.log(drob1 + drob2)
// const va = 4E-2
// console.log(va)
// const _2_ = 0b1000_0100_0010
// console.log(_2_)
// const number = 1_000_000
//
// const number1 = -10 * -1
console.log(Math.abs(-10))//-10=>10
console.log(Math.max(2, 3, 5, 6, 1,))
console.log(Math.min(2, 3, 5, 6, 1,))
console.log(10 / 0)//infinity
console.log(0 / 0)//nan
console.log(Infinity / Infinity)//nan
console.log(Number.parseInt('243a'))//считывает все цифры до какой либо буквы
console.log(Number.parseFloat('243.5a'))//считывает все дробь до какой либо буквы
console.log(Number.parseFloat('a243.5a'))//nan
// @ts-ignore
console.log(Number.isNaN('asd' / 2))//является ли число нан
console.log(Number.isFinite(24))//является ли число инфините
console.log(Number.isInteger(20))// true является ли число целым
console.log(Number.isInteger(value.toPrecision(2)))// false является ли число целым
console.log(0 === -0)//true
console.log(NaN === NaN)//false nan не равен даже себе
// @ts-ignore
console.log(999999999999999999999999999999999999999999999999999999999999999999999999999999999n)
// console.log(999999999999999999999999999999999999999999999999999999999999999999999999999999999n-2)//не будет
//работать потому что bigint не работает c обычными типами

//С ОБЫЧНЫМИ ОПЕРАТОРАМИ С РАВНЕВНИЯ ЭТО РАБОТАЕТ
// @ts-ignore
console.log(223123123n<2)