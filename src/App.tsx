import React from 'react';
import './index.css'
import axios from "axios";
import {Arrays} from "./Components/Flangan/Array/Array";
import {ObjectTest} from "./Components/Flangan/Object/Object";
import {AC, inputHOC, MainHOC} from "./Components/HOC/MainHOC";
import {ChildrenComponent} from "./Components/HOC/ChildrenComponent";

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
    const user = {name: 'vlas', age: 24}
    const Result = inputHOC<AC>(MainHOC)
    // const Result = inputHOC(MainHOC)
    return <div>
        <ChildrenComponent value={'this is test about children'}>
            <div>
                <p>Hello, my name is Vlad, i am beginner developer!</p>
            </div>
        </ChildrenComponent>
        {/*<Result value={24}/>*/}
        {/*<Symbols/>*/}
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
        {/*<Animation/>*/}
        {/*<img src={ava} alt="avatar"/>*/}
        {/*<ComponentRedux/>*/}
        {/*<Result value={105}/>*/}
        {/*<AutoPag/>*/}
        {/*<Pagination/>*/}
        {/*<SvgTest/>*/}
        {/*<Functions/>*/}
        {/*<FuntioncGenerators/>*/}
        {/*<Strings/>*/}
        {/*<NumberT/>*/}
        {/*<Operators/>*/}
        {/*<ObjectTest/>*/}
        {/*<Slider/>*/}
        <ObjectTest/>
        {/*<Arrays />*/}
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

const Result = (props:any) => {
    return <div>
        <h1>Hello</h1>
        <p>{props.name}</p>
        <p>{props.age}</p>
    </div>
}