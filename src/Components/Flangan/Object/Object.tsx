export const ObjectTest = () => {
    return <div>
        <h1>Object</h1>
        <input type="date" onChange={(e) => console.log(e.target.value)}/>
    </div>
}
const user = {
    name: "vlas",
    valueOf() {
        return 15
    }
}

function arr() {
}

const userArray = [12, 3, 4, 5, 6]
console.log({} == {})
console.log(user.toString())
// @ts-ignore
user[userArray.toString()] = 'this is array'
console.log(userArray.toString())
console.log(user)
console.log(arr.toString())
console.log(new Date().toString())
console.log(userArray.valueOf())
console.log(user.valueOf())
console.log(arr.valueOf())
console.log(new Date().valueOf())


// // @ts-ignore
// Array.prototype.bobs = function (a) {
//     let array = []
//     let th = this
//     for (let i = 0; i < th.length; i++) {
//         array.push(a(th[i]))
//     }
//     return array
// }
// const bo = [1, 2, 3, 4]
// // @ts-ignore
// const arrays = bo.bobs((item) => {
//     return item + 10
// })
// console.log(arrays,"my map")
//
// const func = (f: (n: number) => void) => {
//     const birthday = 5
//     f(birthday)
// }
//
// func((s) => {
//     console.log(s + 10)
// })

// const call = (a: (p: number) => void, b?: () => number) => {
//     let result = []
//     for (let i = 0; i < 10; i++) {
//         result.push(a(Math.random() * 10));
//     }
//     return result
// }
//
// const bq = call((item) => {
//     return item.toFixed() + 1
// })
//
// console.log(bq)

// @ts-ignore
Array.prototype.fixation = function (a) {
    let result: any = []
    let array = this
    for (let i = 0; i < array.length; i++) {
        const b = a(array[i])
        if (b) result.push(a(array[i]))
    }
    return result
}

const p = [1, 2, 3, , 5, , , 7, 8,]
// @ts-ignore
const re = p.fixation((item) => {
    if (item < 4) return item
})
console.log(re)

const testob = {
    name: 'vlas', age: 27
}
const testob2 = {
    name: 'Vladik', age: 27
}

function getUser(a: any, b: any, c?: any) {
    // @ts-ignore
    console.log(this.name + a + b + c)
}

getUser.bind(testob, 5, 5).bind(testob2)()

let i = 5, j = 10, m = i + j
console.log(m)

let jitsu;
// const mithu;

const math = 23123123
console.log(math.toString(2))

// let arrTest = [1, 10];
// arrTest = [10, 1]
// console.log(arrTest)
// let [a, b] = [1, 5];
// [a, b] = [b, a]

// const q = {age: 22, name: 'vlas'}
//
// for (let [age, name] of Object.entries(q)) {
//     console.log(age, name)
//     // console.log(person)
// }
// const [a, b, c, , , , e, f,...rest] = [1, 2, 3, 4, 5, 6, 7, 8, 's', 9, 0, 10]
// console.log(a, b, c, e, f,rest)
// // @ts-ignore
// let  [one,two,...rests]='Hello Mother Fucker!'
// console.log(one,two,rests)

let {random, max} = Math
console.log(max(5, 10, 20))
console.log(random() * 10)
