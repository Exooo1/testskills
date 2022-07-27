import React from 'react'

export const FuntioncGenerators = () => {
    return <div><h1>FuntioncGenerators</h1></div>
}

function* name(value: string | number) {
    yield 'vlas' + value
    yield 'vlad' + value
    yield 'diana' + value
    yield 'sveta' + value
    return 'oleg' + value
}

const generator = name('madjectick')
console.log(generator.next('gorb').value)
console.log(generator.next(2).value)
console.log(generator.next(4).value)
console.log(generator.next(1).value)
console.log(generator.next(2).value)
