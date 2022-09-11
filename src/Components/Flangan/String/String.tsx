import React from 'react'

export const Strings = () => {
    return <div>
        <h1>String</h1>
    </div>
}
console.log('string')
console.log("string")
console.log(`string${6}ES`)
const anyValue = "опе\
long\
line"
console.log(anyValue)
const anyValue2 = 'Hello he\'s'
console.log(anyValue2)
const anyValue3 = 'Hello he\'s amazing\n guy '
console.log(anyValue3)
const anyValue4 = 'Hello he\'s amazing\r guy '
console.log(anyValue4)
//Идентификаторы
let any = 'Vlas'
let _any = 'Vlas'
let $any = 'Vlas'
let _2_any = 'Vlas'
//incorrect expression let 2 = 'Vlas'
//incorrect expression let !any = 'Vlas'
//incorrect expression let @any = 'Vlas'
//incorrect expression let #any = 'Vlas'
//incorrect expression let ~any = 'Vlas'

//Зарезервированные слова

// as const export get null target void
//     async continue extends if of this while
//     await debugger false import return throw with
//     break default finally in set true yield
// case delete for instanceof static try
// catch do from let super typeof
//     class else function new switch var

//Unicode

// let caf\u00e9 = 2;
// console.log("\u{1F600}")

const func = () => {

}
let y = 2 + func
    .toString()
console.log(y)
const f = (a: number) => {
    return a + 2
}

let result = 10 + f
(2)
let a;
a
    =
    3
console.log(a)
let name
    = 'vlas'
console.log(name)

let х = 0
;[1, 2, 3, 4].forEach((item, index) => console.log(item));
[1, 2, 3, 4].forEach(console.log)

const b = ++х
    + 7
console.log(b)
let value = 0
// value
// ++; так не работает
// ++
// value; а так работает)
const func1 = () => {
    const a
        =
        2
    return
    // a // Не работает потому что ретурнт делает разрыв строк
}

const func2 = () => {
    let _2 = 2
    while (_2 < 5) {
        console.log(_2)
        _2++
        break
        console.log(_2)
        _2++
    }
}

func2()

const func3 = () => {
    let name = '2'
    throw new
    Error
    ('2')
    name
        =
        'Diana'
    return
}

const func4 =
    () => {
    };

const caf\u00e9 = 1;

const func_5
    =
    () => {
    }
const city = 'My City!'

console.log(city.substring(1, 2))
console.log(city.slice(1))
console.log(city.slice(-5))
console.log(city.split(''))
console.log(city.indexOf('C'))
console.log(city.indexOf('C', 1)) //ищет букву C с первого элемента
console.log(city.indexOf('b')) //return -1, this number is not found
console.log(city.lastIndexOf('!')) //it is looking since end

const anyWord = '#Smile'
const bqqq = ['hint', 'blob']
console.log(anyWord.startsWith('#'))//return true, it's looking since start line
console.log(anyWord.endsWith('e'))//return true because this line end e
console.log(anyWord.includes('S'))
console.log(bqqq.includes('blob'))
console.log(anyWord.replace('#', ''))
console.log(anyWord.toLowerCase())
console.log(anyWord.toUpperCase())
console.log(anyWord.charAt(0))
console.log(anyWord.charAt(anyWord.length - 1))
console.log(anyWord.charCodeAt(0))
console.log(anyWord.codePointAt(0))
console.log('#'.charCodeAt(0))
console.log("s".padStart(3))
console.log("s".padStart(3, "#"))
console.log(anyWord.trim()) // delete space left and right
console.log(anyWord.trimStart()) // delete space left
console.log(anyWord.trimEnd()) // delete space right
console.log("Hello".repeat(10))
