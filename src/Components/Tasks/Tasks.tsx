import React from 'react'

export const Tasks = () => {
    return <section>
        <h1>Tasks</h1>
    </section>
}
// //palindrome
// const palindrome = (value: string) => value.split('').reverse().join('') === value
// console.log(palindrome('шашлык'))
// console.log(palindrome('шалаш'))
//
// const palindrome2 = (value: string) => {
//     let word: string = ''
//     for (let i = 1; i <= value.length; i++) word += value.at(-i)
//     return word === value
// }
// console.log(palindrome2('шашлык'))
// console.log(palindrome2('шалаш'))
//
// //short-word
// const shortWord = (value: string) => {
//     return value.split(' ').reduce((p, c) => c.length > p.length ? p : c)
// }
// console.log(shortWord('Hello my name is vlas, me twenty five year old, and i am here'))
//
// const shortWord2 = (value: string) => {
//     return value.split(' ').sort((a, b) => a.length - b.length)[0]
// }
// console.log(shortWord2('Hello my name is vlas, me twenty five year old, and i am here'))
//
// //createInitials
// const initials = (value: string) => {
//     return value.split(' ')[0][0].toUpperCase() + "." + value.split(' ')[1][0].toUpperCase()
// }
// const initials2 = (value: string) => {
//     const spl = value.split(' ')
//     return spl[0][0].toUpperCase() + "." + spl[1][0].toUpperCase()
// }
// const initials3 = (value: string) => {
//     return value.split(' ').map(item => item[0].toUpperCase()).join('.')
// }
// console.log(initials('Vlas Maskalenchik'))
// console.log(initials2('Diana Kostyan'))
// console.log(initials3('Diana Kostyan'))
//
// //minMax
// const minMax = (value: number[]) => {
//     let max = 0
//     let min = 0
//     max = value.reduce((p, c) => c > p ? c : p)
//     min = value.reduce((p, c) => c > p ? p : c)
//     return [max, min]
// }
// console.log(minMax([5, 6, 2, 291, 293012, 1, 32, 5]))
//
// const minMax2 = (value: number[]) => {
//     let max = 0
//     let min = value[0]
//     value.map(item => item > max ? max = item : min = item).map(item => min < item ? min : min = item)
//     return [max, min]
// }
// console.log(minMax2([5, 6, 1, 291, 293012, 32]))
//
// const minMax3 = (value: number[]) => {
//     return value.sort((a, b) => b - a)
// }
// console.log(minMax3([5, 6, 1, 291, 293012, 32]))
//
// const minMax4 = (value: number[]) => {
//     return [Math.max(...value), Math.min(...value)]
// }
// console.log(minMax4([5, 6, 1, 291, 293012, 32]))
// console.log([5, 6, 1, 291, 293012, [123, 4, 5,], 32].toString().split(',', 5))
// console.log([5, 6, 1, 291, 293012, [123, 4, 5,], 32].join().split(','))
//
// //romanNumbers
// const romanNumber = (value: string) => {
//     let result = 0
//     const arr = [
//         {value: 'I', equal: 1},
//         {value: 'V', equal: 5},
//         {value: 'X', equal: 10},
//         {value: 'L', equal: 50},
//         {value: 'C', equal: 100},
//         {value: 'D', equal: 500},
//         {value: 'M', equal: 1000},
//     ]
//     value.split('').map(item => arr.map(i => i.value === item ? result += i.equal : null))
//     return result
// }
// console.log(romanNumber('MCMXCIV'))
//
// //MergeTwoArrays
// const mergeArrays = (value1: number[], value2: number[]) => {
//     const arr = [...value1, ...value2]
//     console.log(arr)
//     return arr.sort((a, b) => a - b)
// }
// console.log(mergeArrays([1, 2, 3, 4], [1, 23, 4,]))
//
// //makeMethodAll
// const all = (value: string[]) => {
//     const result: any = []
//     return new Promise((res, rej) => {
//         for (let i = 0; i < value.length; i++) {
//             fetch(value[i]).then(response => response.json()).then(res2 => {
//                 result.push(res2)
//                 if (i === value.length - 1) {
//                     const isError = result.some((item: any) => !Array.isArray(item))
//                     if (isError) return
//                     else res(result)
//                 }
//             }).catch(err => {
//                 rej(err)
//             })
//         }
//     })
// }
// const getAll = async () => {
//     try {
//         const result = await all(['https://jsonppicode.com/posts', 'https://jsonplaceholder.typicode.com/todos/1'])
//         console.log(result)
//     } catch (err) {
//         console.log(err)
//     }
// }
// getAll()
//
// //repeatLetter
// const func = (value: string) => {
//     return value.split('').map((item, index) => item.toUpperCase() + item.repeat(index)).join('-')
// }
// const func1 = (value: string) => {
//     let result = []
//     for (let i = 0; i < value.length; i++) {
//         result.push(value[i].toUpperCase() + value[i].repeat(i))
//     }
//     return result.join('-')
// }
// console.log(func('vlas'))
// console.log(func1('some'))
//
// //UpperCaseLetter
// const upperCaseLetter = (value: string) => {
//     const result: number[] = []
//     value.split('').filter((item, index) => item === item.toUpperCase() ? result.push(index) : null)
//     return result
// }
// console.log(upperCaseLetter('HellomynameisVlas'))
//
// //findPreviousMaxNumber
// const prevMaxNumber = (value: number[]) => {
//     return value.sort((a, b) => b - a)[1]
// }
// const prevMaxNumber1 = (value: number[]) => {
//     const max = Math.max(...value);
//     return value.reduce((acc, c) => c === max ? acc : Math.max(acc, c));
// }
// const prevMaxNumber2 = (value: number[]) => {
//     let max = 0;
//     let prevMax = 0;
//     value.map(item => item > max ? max = item : max)
//     value.filter(item => prevMax < item && item !== max ? prevMax = item : item)
//     return prevMax
// }
// console.log(prevMaxNumber([6, 3, 1, 23, 66, 3]))
// console.log(prevMaxNumber1([6, 3, 1, 23, 66, 3]))
// console.log(prevMaxNumber2([6, 3, 1, 23, 66, 3]))
//
// const funct = () => {
//     const arr = [1, 2, 3, 4]
//     return [...arr.map(item => item * Math.random() * arr.length)]
// }
//
// const [a, b, c, d] = funct()
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
//
//
// //Постановка задачи
// const arrNumbers = [2, 4, 1, 9, 10]
//
// const equalNumbers = (arr: number[], value: number) => {
//     let isEqual = false
//     arr.map((item, index) => {
//         for (let i = 0; i < arr.length; i++) {
//             if (index === i) continue
//             if (item + arr[i] === value) isEqual = true
//         }
//     })
//     return isEqual
// }
// console.log(equalNumbers(arrNumbers, 5))
//
// //Explorer
// const taskExplorer = [
//     ["Mallory", "Everest", "Mont Blanc", "Pillar Rock"],
//     ["Mawson", "South Pole", "New Hebrides"],
//     ["Hillary", "Everest", "South Pole"]
// ]
// const resExplorer: Array<string[]> = []
// const newExplorer = taskExplorer.map((item) => {
//     for (let i = 0; i < item.length; i++) {
//         if (i === 0) continue
//         if(!resExplorer.find(ele=>ele.find(el=>el===item[i])))
//         resExplorer.push([item[i]])
//     }
//     return item
// }).map(items=>{
//     items.map((el,ind)=>{
//         resExplorer.map((item,index)=>{
//             item.map(e=>{
//                 if(e===el) resExplorer[index].push(items[0])
//             })
//         })
//     })
// })
// console.log(resExplorer)

//arrayLastElement

// @ts-ignore
Array.prototype.last = function () {
    const arrays = this
    if(arrays.length)return arrays[arrays.length-1]
    else return -1
}
const arr = [1,2,3,4,55]
// @ts-ignore
console.log(arr.last())



//returnUndefined


