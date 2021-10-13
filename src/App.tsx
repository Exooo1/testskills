import React from 'react';
import {ChangeFaviconDynamic} from './Components/ChangeFaviconDynamic';
import {MemoAndUseMemo} from './Components/MemoAndUseMemo';
import {TypeContextStore} from './Components/TypeContextStore/TypeContextStore';
import './index.css'
import {ComponentRedux} from './Components/ReduxStoreSelectorDis/ComponentRedux';

export const App = () => {

    return <>
        <ChangeFaviconDynamic/>
        {/*<MemoAndUseMemo/>*/}
        {/*<TypeContextStore/>*/}
        {/*<ComponentRedux/>*/}
    </>
}

export default App;
