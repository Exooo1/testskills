import React, {useState} from 'react';
import './index.css'
import {NumberT} from "./Components/Flangan/Number/Number";
import {String} from "./Components/Flangan/String/String";
import {SvgTest} from "./Components/SVG/SvgTest";
import {CustomHooksInput} from './Components/CustomHooks/CustomHooks';

export const App = () => {
    const [name, setName, error] = CustomHooksInput()
    return <div>
        {/*<SvgTest/>*/}
        {/*<Functions/>*/}
        <h1>{name}</h1>
        <h1>{error}</h1>
        <input type="text" onChange={(e) => setName(e.target.value)}/>
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
