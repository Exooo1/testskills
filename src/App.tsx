import React, {useState} from 'react';
import './index.css'
import {NumberT} from "./Components/Flangan/Number/Number";
import {String} from "./Components/Flangan/String/String";
import {SvgTest} from "./Components/SVG/SvgTest";
import {CustomHooksInput} from './Components/CustomHooks/CustomHooks';
import {Pagination} from "./Components/Pagination/Pagination";

export const App = () => {
    return <div>
        <Pagination/>
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
