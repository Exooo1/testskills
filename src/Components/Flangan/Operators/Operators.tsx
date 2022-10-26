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