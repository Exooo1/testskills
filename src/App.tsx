import React, {useState} from 'react';
import './index.css'
import {NumberT} from "./Components/Flangan/Number/Number";
import {String} from "./Components/Flangan/String/String";
import {SvgTest} from "./Components/SVG/SvgTest";

const Buber = ({element}: any) => {
    return <div>
        <h1>Buber</h1>
        {element}
    </div>
}

export const App = () => {
    let [age, setage] = useState(0)

    age = 24
    return <div>
        <SvgTest/>
        <h1>My name is {age} </h1>
        <Buber element={<input/>}/>
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



