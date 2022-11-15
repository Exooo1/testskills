export const Operators = () => {
    return <div>
        <h1>Operators</h1>
    </div>
}

const user = {
    name: 'vlas',
    age: 24
}
const array = [1, 2, 3, 4, 5]
console.log('age' in user)
console.log('0' in array)
console.log('5' in array)

class Animal {
}

const rabbit = new Animal()
console.log(rabbit instanceof Animal)
console.log(rabbit instanceof Number)
console.log(rabbit instanceof Object)
console.log(array instanceof Array)

let i = 0
const da = [2, 4]
console.log(da[++i] += 2)
// console.log(da[++i] *= 2)

console.log(null ?? 5)
console.log(user)
// @ts-ignore
delete user.age
console.log(user)
console.log('age' in user)
const arr = [123, 4, 5, 2]
console.log(arr)
delete arr [2]
console.log(arr)
const customer = {
    name:'Any',
    a:()=>{console.log(customer.name)}
}
console.log(customer)
// @ts-ignore
delete customer.a // return true is object has variable a
console.log(customer)
for(let i=0, l=1;i<10;i++,l++){
    console.log(i+l)
}
