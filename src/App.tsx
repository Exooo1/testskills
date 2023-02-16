import React from 'react';
import './index.css'
import axios from "axios";
import {Arrays} from "./Components/Flangan/Array/Array";
import {AC, inputHOC, MainHOC} from "./Components/HOC/MainHOC";

export const App = () => {
    const Result = inputHOC<AC>(MainHOC)
    return <div>
        {/*<Tasks/>*/}
        {/*<Scroll/>*/}
        {/*<ChildrenComponent value={'this is test about children'}>*/}
        {/*    <div>*/}
        {/*        <p>Hello, my name is Vlad, i am beginner developer!</p>*/}
        {/*    </div>*/}
        {/*</ChildrenComponent>*/}
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
        {/*<ObjectTest/>*/}
        {/*<Timer/>*/}
        <Arrays/>
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
