import React, {useState} from 'react';
import './index.css'
import {NumberT} from "./Components/Flangan/Number/Number";
// import {String} from "./Components/Flangan/String/String";
import {SvgTest} from "./Components/SVG/SvgTest";
import {CustomHooksInput} from './Components/CustomHooks/CustomHooks';
import {Pagination} from "./Components/Pagination/Pagination";
import {AutoPag} from "./Components/AutoPag/AutoPag";
import {AC, inputHOC, MainHOC} from "./Components/HOC/MainHOC";
import {ComponentRedux,} from "./Components/ReduxStoreSelectorDis/ComponentRedux";
import axios from "axios";
import {Animation} from "./Components/Animation/Animation";

const Api = {
    post(form: any) {
        return axios.post('http://localhost:8080/upload', form, {
            headers: {
                "Content-type": "multipart/form-data",
            }
        })
    }
}
export const App = () => {
    const [ava, setAva] = useState('')
    // const Result = inputHOC<AC>(MainHOC)
    return <div>
        {/*<button onClick={() => Api.post()}>click</button>*/}
        {/*<input type="file" onChange={async (e) => {*/}
        {/*    const formData = new FormData();*/}
        {/*    // @ts-ignore*/}
        {/*    formData.append('files', e.target.files[0])*/}
        {/*    await Api.post(formData).then(res => {*/}
        {/*        console.log(res)*/}
        {/*        setAva(res.data.file)*/}
        {/*    })*/}
        {/*}*/}
        {/*}/>*/}
        <Animation/>
        {/*<img src={ava} alt="avatar"/>*/}
        {/*<ComponentRedux/>*/}
        {/*<Result value={105}/>*/}
        {/*<AutoPag/>*/}
        {/*<Pagination/>*/}
        {/*<SvgTest/>*/}
        {/*<Functions/>*/}
        {/*<FuntioncGenerators/>*/}
        {/*<String/>*/}
        {/*<NumberT/>*/}
        {/*<Array/>*/}
        {/*<ChangeFaviconDynamic/>*/}
        {/*<MemoAndUseMemo/>*/}
        {/*<TypeContextStore/>*/}
        {/*<ComponentRedux/>*/}
        {/*<UseCallbackTest/>*/}
        {/*<ShadowComponent>*/}
        {/*<Transition/>*/}
        {/*<TestSuspense/>*/}
        {/*<ProgressFileBar/>*/}
    </div>
}
const a = {
    name: 'vlas'
}
// @ts-ignore
String.prototype.bigDick = 'yourName'
const b = 'vlas'
// @ts-ignore
console.log(b.bigDick)

class Mechanic {
    age: number

    constructor() {
        this.age = 30
    }

    second() {
        return this.age
    }
}

class Animal extends Mechanic {
    name: string

    constructor(name: string) {
        super()
        this.name = name
    }
}

// @ts-ignore

const rabbit = new Animal('rabbit')
console.log(rabbit)

// @ts-ignore

function B(name: string) {
    // @ts-ignore
    this.name = name
}

B.prototype = {
    age: 22,
    getAge() {
        return this.age
    }
}
B.prototype.qrt = {
    city: 'Minsk'
}
B.prototype.malaxi = {
    country:'Belarus'
}

// @ts-ignore
const bob = new B('vlasik')
console.log(bob)