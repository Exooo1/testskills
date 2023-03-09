import React from 'react';
import './index.css'
import axios from "axios";
import {Arrays} from "./Components/Flangan/Array/Array";
import {AC, inputHOC, MainHOC} from "./Components/HOC/MainHOC";
import {ChildrenComponent} from "./Components/HOC/ChildrenComponent";
import {Card} from "./Components/Card/card";
import {Indexhtml} from "./Components/html/indexhtml";
import {Animation} from "./Components/Animation/animation";
import styles from './Components/Animation/circle/circle.module.scss'

export const App = () => {
    const Result = inputHOC<AC>(MainHOC)
    return <div>
        {/*<Card/>*/}
        {/*<Tasks/>*/}
        {/*<Scroll/>*/}
        {/*<ChildrenComponent value={'this is test about children'}><h1>some</h1><h3>some</h3></ChildrenComponent>*/}
        {/*<Result value={24}/>*/}
        {/*<Symbols/>*/}
        {/*<Animation/>*/}
        {/*<ComponentRedux/>*/}
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
        {/*<Timer/>*/}
        {/*<Arrays/>*/}
        <Animation/>
        {/*<Indexhtml/>*/}
    </div>
}
