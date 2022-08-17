import React, {useState} from 'react';
import './index.css'
import {NumberT} from "./Components/Flangan/Number/Number";
import {String} from "./Components/Flangan/String/String";
import {SvgTest} from "./Components/SVG/SvgTest";
import {Functions} from "./Components/Flangan/Function/Functions";
import {CustomHooksInput} from "./Components/CustomHooks/CustomHooks";
import {AC, inputHOC, MainHOC} from "./Components/HOC/MainHOC";

export const App = () => {
    // const Result = inputHOC(MainHOC)
    // return <Result/>
    return <div>
        <SvgTest/>
        {/*<Functions/>*/}
        {/*<h1>My name is Vlas, i am {age} old</h1>*/}
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
