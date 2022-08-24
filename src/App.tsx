import React, {useState} from 'react';
import './index.css'
import {NumberT} from "./Components/Flangan/Number/Number";
import {String} from "./Components/Flangan/String/String";
import {SvgTest} from "./Components/SVG/SvgTest";
import {CustomHooksInput} from './Components/CustomHooks/CustomHooks';
import {Pagination} from "./Components/Pagination/Pagination";
import {AutoPag} from "./Components/AutoPag/AutoPag";
import {AC, inputHOC, MainHOC} from "./Components/HOC/MainHOC";

export const App = () => {
    const Result = inputHOC<AC>(MainHOC)
    return <div>
        <Result value={105}/>
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
