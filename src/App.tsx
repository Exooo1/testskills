import React, {useEffect, useRef, useState} from 'react';
import './index.css'
import {ProgressFileBar} from './Components/ProgressBarFile/progressFileBar';
import axios from "axios";
import {TestReactDevTools} from "./index";



export const App = () => {
    console.log('value')
    const [value, setValue] = useState('')
    return <>
        <div>
            <h1>TestReactDevTools</h1>
            <h3>ourValue {value}</h3>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
            <TestReactDevTools/>
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
    </>
}


