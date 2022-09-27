export const Symbols = () => {
    return <div><h1>Symbol</h1></div>
}

let symbol = Symbol('supername')
let symboltwo = Symbol('supername')
console.log(Symbol.for('shared'))
console.log(symbol === symboltwo)
let strsymbol = 'supername'
console.log(typeof symbol)
console.log(typeof strsymbol)
const obj = {}
console.log(obj)
// @ts-ignore
obj[symbol] = 'vlas'
// @ts-ignore
obj[strsymbol] = 'vlad'
// @ts-ignore
obj[symbol] = 'vlasik'
console.log(obj)

const b = Symbol.for('alone')
console.log(Symbol.for('s') === Symbol.for('s'))
console.log(Symbol.keyFor(b))

const user: { [key: string]: string } = {}

const reg = /^HTML/
const text = 'HTML'
console.log(text.match(reg))


user['name'] = 'vlas'