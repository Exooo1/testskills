import axios from 'axios'

export const ObjectTest = () => {
    const Serafim = 'h1'
    return <div>
        <h1>Object</h1>
        <Serafim>Hello my brother</Serafim>
        <input type="date" onChange={(e) => console.log(e.target.value)}/>
        <audio/>
    </div>
}
// const user: { name: string, age: 24, [key: string]: string | number } = {
//     name: 'vlas',
//     age: 24
// }
//
// function User(name: string) {
//     // @ts-ignore
//     this.name = name
// }
//
// const simpleObj = new Object({name: 'Vlas'})
// const simpleObj2 = Object.create({name: 'Diana', age: 21})
// const simpleObj3 = Object.create(null)
// const simpleObj4 = Object.create(Object.prototype)
// simpleObj4.name = 'vlad'
// //simpleObj3.toString() Это будет ошибка, потому что мы указал null, поэтому этот объект ничего не унаслед.
// console.log(simpleObj, simpleObj2, simpleObj3, simpleObj4)
// // @ts-ignore
// const vlas = new User('vlasik')
// user.count = 15
// user['country city'] = 'Belarus Minsk'
// console.log(user, vlas)
// console.log(user['name'], user.name)
// console.log(user['some'])
// // @ts-ignore
// const result = user?.age?.length ?? 24
// console.log(result)
// console.log(user.toString())
// const vl = new Object()
// console.log(vl.hasOwnProperty('toString'))
// user[Symbol('get')] = 'amega'
// console.log(Object.getOwnPropertySymbols(user))
// console.log(Object.keys(user))
// console.log(Object.getOwnPropertyNames(user))
// console.log(Reflect.ownKeys(user))
// for (let me of Reflect.ownKeys(user)) {
//     // @ts-ignore
//     if (typeof me === 'symbol') continue;
//     else { // @ts-ignore
//         console.log(me +' Hello')
//     }
// }

// const youngUser = {name: 'Jhon', age: 27}
// const averageUser = {name: 'Adam', age: 30, exp: 5}
// const user = {name: 'Vlas'}
// console.log(user)
// for (let pe in youngUser) {
//     // @ts-ignore
//     if (user[pe]) continue
//     else { // @ts-ignore
//         user[pe] = youngUser[pe]
//     }
// }
// console.log(user)
// const user1 = Object.assign(averageUser, {city: 'Bobruisk'})
// user1.exp = 10
// console.log(user1)
// console.log(averageUser)
// const user2 = {...user1, hobby: 'Programm', ...youngUser}
// console.log(user1, 'enter')
// console.log(user2)
// const user = {
//     name: 'vlas',
//     age: 24
// }
//
// console.log(typeof JSON.stringify(user, () => {
// }, 2) === 'string')
// console.log(JSON.stringify(user))
// console.log(JSON.parse(JSON.stringify(user)))
// console.log(JSON.stringify(NaN))// will be NULL!
// console.log(JSON.stringify(Infinity))
// console.log(JSON.stringify(new Date()))
// console.log(JSON.stringify(() => {
// }))
// const point = {
//     x: 2000,
//     toLocaleString: function () {
//         return this.x.toLocaleString()
//     }
// }
// console.log(point.toLocaleString())
// const arr = new Array(2000, 3000, 3, 4)
// console.log(arr.toLocaleString())
// const n = 5000
// console.log(n.toLocaleString())

//
// const NAME_FOR_USERS= 'ANY NAMES'
// const user = {
//     [NAME_FOR_USERS]:'VLAS'
// }
// console.log(user)
// const sym = Symbol('Hack')
// const user = {
//     [sym]: 24
// }
// console.log(user)
//
// const u = {...user, name: 'vlas', age: 24}
// console.log(u)
// const sym =Symbol('get')
// const user =Object.create({name:'vlas',age:24})
// const userTwo = {...user,[sym]:'some words'}
// console.log(userTwo)// userTwo doesn't have the values from user
// console.log(userTwo[sym])

// const user = {
//     name: '',
//     get names() {
//         return this.name
//     },
//     set names(n: string) {
//         this.name = n
//     }
// }
// console.log(user)
// user.names='vlas'
// console.log(user)
// console.log(user.names)

// @ts-ignore
// Array.prototype.filterTest = function (func: any) {
//     const array = this
//     const ar = []
//     for (let me = 0; me < array.length; me++) {
//         const res = func(array[me])
//         if (!res) continue
//         ar.push(func(array[me]))
//     }
//     return ar
// }
//
// const arr = [1, 2, 3, 4, 6]
// // @ts-ignore
// const result = arr.filterTest((item) => {
//     if (item === 4) return item
// })
// console.log(result)

// const func = (f: any) => {
//     const arr = []
//     for (let me = 0; me < 100; me++) {
//         arr.push(f(me))
//     }
//     return arr
// }
// const result = func((item: any) => {
//     return (Math.random() * item).toString(36)
// })
// console.log(result)
//
// class User {
//     private name: string
//
//     constructor(name: string) {
//         this.name = name
//     }
//
//     set names(setName: string) {
//         this.name = setName
//     }
//
//     get names() {
//         return this.name
//     }
// }
//
// const vlas = new User('')
// vlas.names='vlas'
// console.log(vlas.names)
//
// const diana = Object.create(vlas)
// diana.names='Diana'
// console.log(diana)

// const us = {
//     name: 'vlas',
//     f(a: number) {
//         if (a > 10) throw new Error('incorrect number')
//         return (a * Math.random()).toFixed()
//     }
// }
// console.log(us.f(1))
// const arr = ['123',2,3,5,,6,'22223']
// console.log(arr.toLocaleString())
//
// const a ={}
// const ab = new Object({name:'vlas'})
// // @ts-ignore
// const abs =  Object.create(Object.prototype)
// console.log(abs)

// const func = async () => {
//     const t = await axios.get('https://jsonplaceholder.typicode.com/posts')
//     let b;
//     if (t.status === 200) b = await axios.get('https://jsonplaceholder.typicode.com/posts')
//     console.log(t, 't')
//     console.log(b, 'b')
// }
// func()
// func()
// func()