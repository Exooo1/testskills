export const Constructor = () => {
    return <div>
        <h1>Hello</h1>
    </div>
}


function Animal (name:string){
    return {name:'vlas'}
}

// @ts-ignore
const rabbit = new Animal()
// @ts-ignore
const rabbit1 = new Animal

console.log(rabbit)


