import React, {useState} from 'react';
import './index.css'
import {NumberT} from "./Components/Flangan/Number/Number";
import {SvgTest} from "./Components/SVG/SvgTest";
import {CustomHooksInput} from './Components/CustomHooks/CustomHooks';
import {Pagination} from "./Components/Pagination/Pagination";
import {AutoPag} from "./Components/AutoPag/AutoPag";
import {AC, inputHOC, MainHOC} from "./Components/HOC/MainHOC";
import {ComponentRedux,} from "./Components/ReduxStoreSelectorDis/ComponentRedux";
import axios from "axios";
import {Animation} from "./Components/Animation/Animation";
import {Strings} from "./Components/Flangan/String/String";
import {Symbols} from "./Components/Flangan/Symbol/Symbol";
import {ObjectTest} from "./Components/Flangan/Object/Object";
import {Operators} from "./Components/Flangan/Operators/Operators";
import {Slider} from "./Components/Animation/Slider";

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
    // const Result = inputHOC<AC>(MainHOC)
    return <div>
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
        <Slider/>
        {/*<ObjectTest/>*/}
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