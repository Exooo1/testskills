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
import {Table} from "./Components/table/table";
import {InstagramSlider} from "./Components/InstagramSlider/InstagramSlider";
import {MemoCom} from "./Components/memoCom";
import {Operators} from "./Components/Flangan/Operators/Operators";
import {Functions} from "./Components/Flangan/Function/Functions";
import {Tasks} from "./Components/Tasks/Tasks";
import {Constructor} from "./Components/Flangan/constructor/constructor";


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
        <Functions/>
        {/*<FuntioncGenerators/>*/}
        {/*<Strings/>*/}
        {/*<NumberT/>*/}
        {/*<Operators/>*/}
        {/*<ObjectTest/>*/}
        {/*<Slider/>*/}
        {/*<Timer/>*/}
        {/*<Arrays/>*/}
        {/*<MemoCom/>*/}
        {/*<Table/>*/}
        {/*<Animation/>*/}
        {/*<Indexhtml/>*/}
        {/*<InstagramSlider/>*/}
        <Constructor/>
    </div>
}
