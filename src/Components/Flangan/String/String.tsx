import React from 'react'

export const String = () => {
    return <div>
        <h1>String</h1>
    </div>
}
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
