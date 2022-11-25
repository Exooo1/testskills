import axios from 'axios'

export const Operators = () => {
    console.log('Oper')
    const changeH1 = () => {
        const result = document.getElementById('oper')
        if (result) result.innerText = 'Hello'
    }
    return <div>
        <h1 id={'oper'}>Operators</h1>
        <button onClick={changeH1}>click</button>
    </div>
}
//
// const user = {
//     name: 'vlas',
//     age: 24
// }
// const array = [1, 2, 3, 4, 5]
// console.log('age' in user)
// console.log('0' in array)
// console.log('5' in array)
//
// class Animal {
// }
//
// const rabbit = new Animal()
// console.log(rabbit instanceof Animal)
// console.log(rabbit instanceof Number)
// console.log(rabbit instanceof Object)
// console.log(array instanceof Array)
//
let i = 0
const da = [2, 4]
console.log(da[i++] += 2)
// console.log(da[++i] *= 2)

// console.log(null ?? 5)
// console.log(user)
// // @ts-ignore
// delete user.age
// console.log(user)
// console.log('age' in user)
// const arr = [123, 4, 5, 2]
// console.log(arr)
// delete arr [2]
// console.log(arr)
// const customer = {
//     name: 'Any',
//     a: () => {
//         console.log(customer.name)
//     }
// }
// console.log(customer)
// // @ts-ignore
// delete customer.a // return true is object has variable a
// console.log(customer)
// for (let i = 0, l = 1; i < 10; i++, l++) {
//     console.log(i + l)
// }
//
// const q = ''
// const cust = {}
// // delete q // will be error
// // delete cust.name // will be true
//
// const arrs: Array<number> = []
// console.log(arrs)
// for (let sm = 0; sm < 5; arrs.push(sm++)) ;
// console.log(arrs)
// const n = 'Some'
// let count = 1
// while (count++ < 10) {
//     console.log(count)
// }
// const qs = {
//     name: 'vlas',
//     age: 22,
//     ctiy: "Belarus"
// }
//
// // for(;qs.name==='adnrey';qs.name='adnrey'){
// //
// // } it's correct!
//
// let result = 'someWord'
//
// for (let word of result) {
//     console.log(result)
// }
//
// const r = Object.entries(qs)
// console.log(r)
// for (let elem of r) {
//     console.log(elem)
// }
//
// let letters = {}
// let som = 'ssqweqweqewzxczxc'
// for (let lets of som) {
//     console.log(lets)
//
//     // // @ts-ignore
//     // if (letters[lets]) letters[lets]++
//     // else{
//     //     // @ts-ignore
//     //     letters[lets]=1
//     // }
// }
// const tt = [axios.get('https://jsonplaceholder.typicode.com/posts')]
// const ttq = {
//     qqq: 'vlas',
//     f() {
//     }
// }
// const func = async () => {
//     for await(let me of tt) {
//         console.log(me)
//     }
// }
// func()
//
// for (let m in ttq) {
//     // @ts-ignore
//     console.log(ttq[m])
// }

// for (let me = 0; me < 10; me++) {
//     if (me === 5) {
//         console.log('THE END!')
//         break;
//     }
//     console.log('go NEXT!')
// }
//
// for (let me = 0; me < 10; me++) {
//     if (me % 2) continue;
//     console.log(me)
// }
// let me = 0
// const arr = []
// while (me++ < 50) {
//     if (me < 40) continue;
//     arr.push(me)
// }
// console.log(arr)
// const user = {}
// // @ts-ignore
// for (let me = 0; me < user.length; me++) {
//     console.log(me)
// }
//
// const operator = (x: number) => {
//     try {
//         if (x > 50) throw new Error('Your number dont/t should be even')
//         console.log('All okay!')
//     } catch (err) {
//         console.log(err)
//         console.log(err)
//     } finally {
//         console.log('Capybara')
//     }
// }
//
// operator(62)
// // const result1 = prompt('Send message','')
// // console.log(result1)
// const array = []
// while (array.length < 50) {
//     if (array.length > 30){
//         array.push(2)
//     }
//     else some:while (true) {
//         me++
//         if (array.length === 45) break some;
//         array.push(1)
//     }
// }
// console.log(array)
// const user = {
//     name: 'vlas',
//     age: 24
// }
// // @ts-ignore
// with (user) {
//     // @ts-ignore
//     city='Minsk'
// }
// console.log(user)