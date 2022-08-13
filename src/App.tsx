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
    return <div>
        <SvgTest/>
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
// const cron = (value: number, fun: () => void) => {
//     setInterval(() => {
//         fun()
//     }, value * 1000)
// }
//
// cron(10, () => {
//     console.log('Hello mother fucker')
// })



