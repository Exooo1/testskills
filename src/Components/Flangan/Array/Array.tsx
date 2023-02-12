import React, {useEffect, useLayoutEffect, useRef, useState} from 'react'

const TwoCount = React.memo(() => {
    return <div>
        <h1>Hello Vlas</h1>
    </div>
})
const array = [1]
array.push(2)
array['-1'] = 3
array[5] = 100
// @ts-ignore
array['serafim'] = 4
// @ts-ignore
array['somet'] = function () {
    return (Math.random() * 10).toFixed()
}
// @ts-ignore
console.log(array['somet']())
export const Arrays = () => {
    const Three = () => {
        return <div>
            Surprised!
        </div>
    }
    useEffect(() => {
        setCount(1000)
    }, [])
    const [count, setCount] = useState(1)
    return <div>
        <h1>Hello Serafim!</h1>
        <button onClick={() => setCount(c => c + 1)}>{count}</button>
        <TwoCount/>
        <Three/>
    </div>
}
// export const Arrays = () => {
//     let ref = useRef()
//     const [count, setCount] = useState(1)
//     const [width, setWidth] = useState(0)
//     const Time = () => {
//         return <div>
//             Hello
//         </div>
//     }
//
//     useEffect(() => {
//         const start = new Date().getTime()
//         let end = start
//         while (end < start + 2000) {
//             end = new Date().getTime()
//         }
//         // @ts-ignore
//         setWidth(ref.current.clientWidth)
//         // const elem = document.getElementById('block')
//         // // @ts-ignore
//         // // setCount(ref.current.clientWidth)
//         // setCount(elem.clientWidth)
//     }, [])
//     // @ts-ignore
//     return <div id={'block'} ref={ref}>
//         <button onClick={() => setCount(count => count)}>click</button>
//         <a href='../../../../public/logo512.png' id="link"
//            download="code">Download </a>
//         <Time/>
//         <span>width: {width}</span>
//         {/*<h1 onClick={() => {*/}
//         {/*    setCount(1)*/}
//         {/*}}>{count}</h1>*/}
//     </div>
// }


// const arr = [3, 4, 5, 6]
// const arrtwo = [1, 2, ...arr, 7, 8, 9, 10]
// const arrthree = new Array()
// for (let i = 0; i < arrtwo.length; i++) {
//     arrthree.push(arrtwo[i])
// }
// arrthree[0] = 100
// console.log(arrthree)
// console.log(arrtwo)
//
// const lenghArray = new Array(5)
// lenghArray[0] = 1
// console.log(lenghArray)
//
// const arrFour = Array.of(500)
// console.log(arrFour)
// const arrFive = Array.from(arrtwo)
// console.log(arrFive)
// const a: any = []
// a['2000'] = 2
// a[1] = 2
// a[2] = true
// a[-5.5] = 10
// a['vlas'] = 11
// console.log(a, a.length)
//
// const arrs = []
// arrs[7000] = 1
// arrs[1] = 1
// arrs[2] = 1
// arrs['3'] = 1
// console.log(arrs)
// const letter = 'Hello, i am vlas'
// // @ts-ignore
// const resultLetter = [...letter]
// // @ts-ignore
// for (let [index, letter] of resultLetter.entries()) {
//     console.log(index, letter)
// }
// console.log(resultLetter.entries())
//
// const table = []
// for (let i = 0; i < 10; i++) {
//     table[i] = new Array(10)
// }
// for (let i = 0; i < table.length; i++) {
//     // @ts-ignore
//     for (let [index, j] of table[i].entries()) {
//         table[i][index] = i * index
//     }
// }
// console.log(table)

// const array = [1, 2, 3, 4, 5, 6]
// const result = array.some(item => item < 4) - it will be true, because it has one element that is less than four
// const result = array.every(item => item < 4) - it will be false, because all elements had be < 4
// const result = array.filter(item => !(item % 2)) - filters your array about yuslovie
// const result = array.filter(item => !(item % 2)) - filters your array about yuslovie
// const arrayUsers = [
//     {id: 1, name: 'vlas'},
//     {id: 2, name: 'vlad'},
//     {id: 3, name: 'vladd'},
//     {id: 4, name: 'Diana'},
// ]
// const result = arrayUsers.reduce((i, j) => {
//     const u = {
//         id: 2,
//         name: ''
//     }
//     return {...u, id: i.id += j.id, name: i.name += j.name}
// })
// //
// // const result = array.reduce((item, ites) => item + ites)
// console.log(result)
//
// const arr:any = []
// @ts-ignore
// console.log(arr.reduce((a,b)=>a+b))// it will be error,нельзя вызывать reduce на пустом массиве

// const arr = [12, 3, 4, [5, 6, 4, [5, 6,]]]
// console.log(arr.flat())//Будет 12,3,4,5,6,4,[5,6]
// console.log(arr.flat(2))//Будет 12, 3, 4, 5, 6, 4, 5, 6
// // @ts-ignore
// console.log(arr.flatMap(item => {
//     if (!Array.isArray(item)) return item + 10
//     else return item
// }))
//
// const arr = [1, 23, 4, 5]
// const arrays = [5, 3, 12, 6, 7, 77]
// console.log(arr.concat(arrays))
// console.log(arr.concat([100, 200]))
// @ts-ignore
// console.log(arr.concat(5, 5, [5, 4, [6, 7]]))
// const t = arr.pop()
// console.log(t)
// console.log(arr.unshift(20))
// console.log(arr.shift())


// const arr = [9, 6, 4, 2, 1, 2]
// console.log(arr.slice(1, 4))
// console.log(arr.slice(0, 4))
// console.log(arr.slice(2, -1))
// console.log(arr.slice(-6, -4))// Это надо запомнить, очень сложно!

//SPLICE - Возвращает массив, но и модифицирует основной массив.
const splice: Array<number | string> = [1, 2, 3, 4, 5, 6]
console.log(splice.splice(0, 1, 'a', 'b'))
console.log(splice)
console.log(splice.splice(1))

//FILL - заполняет пустой массив значениями.
const fill = [2, , , ,]
// console.log(fill.fill(10, 1))
// console.log(fill.fill(10, 1,2))
console.log(fill.fill(10, -2))

//copyWithin - Копирует значение в массиве.
const copyWithin = [1, 2, 3, 4, 5, 6, 7]
// console.log(copyWithin.copyWithin(1, 0))
console.log(copyWithin.copyWithin(0, 3))

//findIndex - с объектами and indexOf - используется с примитивами.
const findIndex = ['apple', 'orange', 'banana', 'lemon']
console.log(findIndex.findIndex(item => item === 'lemon')) //3
console.log(findIndex.findIndex(item => item === 'cherry')) //-1
console.log(findIndex.indexOf('lemon'))//3
console.log(findIndex.indexOf('cherry'))//-1
console.log(findIndex.indexOf('lemon', 2))//3 необязательный 2 параметр, будет искать с этого индекса
const indexOfArray = [1, 2, 3, 1, 2, 1, 1, 1]
const indexOf = () => {
    let count = 0;
    let last = 0;
    while (count < indexOfArray.length) {
        const result = indexOfArray.indexOf(1, last)
        if (result > -1) {
            last = result + 1
            count++
        } else break;
    }
    return count
}
console.log(indexOf())

//includes
const includes = ['some of', 'people', 'som', 'good']
console.log(includes.includes('som'))//true
console.log(includes.filter(item => item.includes('som')))

//sort
const sort = [1, 23, 4, 6, 5, 77]
const sort1 = ['banana', 'apple', 'city', 'brown']
console.log(sort.sort())
console.log(sort.sort((a, b) => a - b))
console.log(sort.sort((a, b) => b - a))
console.log(sort1.sort())
console.log(sort1.sort().reverse())

let sort2 = ["ant", "Bug", "cat", "Dog"];
sort2 .sort(function(s,t ) {
    let a = s .toLowerCase();
    let b = t .toLowerCase();
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}); // sort не чувствительна к регистру
