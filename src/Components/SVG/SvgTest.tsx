import './svg.css'
import {useState} from "react";

//PATH
// dсодержит команды направлений. Эти команды начинаются с имени команды и набора координат:
//
//     Mозначает Move, он принимает набор координат x, y
// Lозначает «Линия», он принимает набор координат x, y, чтобы провести линию к
// Hявляется горизонтальной линией, она принимает только координату x
// Vявляется вертикальной линией, она принимает только координату y
// Zозначает «Закрыть путь», возвращает строку в начало
// Aозначает Arch, для него нужен отдельный туториал
// Qэто квадратичная кривая Безье, опять же, для нее нужен целый учебник

export const SvgTest = () => {


    return <div className='svgTest'>
        <h1>SVG</h1>
        <svg width='150' height='150' className='svg'>
            <rect className='rect' rx={'5'} x='135' y='0' width='10' height='60' fill='yellow'/>
            <rect rx={'5'} x='120' y='0' width='10' height='50' fill='yellow'/>
            <rect rx={'5'} x='105' y='0' width='10' height='120' fill='yellow'/>
            <rect rx={'5'} x='90' y='0' width='10' height='80' fill='yellow'/>
        </svg>
        <svg width='150' height='150' className='svg'>
            <text x='10' y='50' fill='brown'>Diana is so hot girl</text>
        </svg>
        <svg width='150' height='150' className='svg'>
            <circle r='50' cx='75' cy='75' fill='blue'/>
        </svg>
        <svg width='150' height='150' className='svgLine'>
            <line id={'asd'} x1='0' x2='120' y1='20' y2='20' stroke="yellow" stroke-width="7"/>
            <line className='line' x1='0' x2='90' y1='40' y2='40' stroke="#529fca" stroke-width="7"/>
            <line className='line' x1='0' x2='50' y1='50' y2='50' stroke="#529fca" stroke-width="7"/>
            <line className='line' x1='0' x2='20' y1='60' y2='60' stroke="#529fca" stroke-width="7"/>
            <line className='line' x1='0' x2='140' y1='70' y2='70' stroke="#529fca" stroke-width="7"/>
        </svg>
        <svg width='150' height='150' className='svg'>
            {/*<path*/}
            {/*    d="M 2 2 L 10 50 H 50 V 100 C 100 90 50 20 120 50"*/}
            {/*    fill="darkgrey"*/}
            {/*    stroke="yellow"*/}
            {/*    stroke-width="3"*/}
            {/*/>*/}
            <path
                d="M 20 10 l 0 80 H 100 Z"
                fill="darkgrey"
                stroke="yellow"
                stroke-width="3"
            />
        </svg>
        <svg width='150' height='150' className='svg'>
            <polygon points="20 20, 35 35 15 25" fill={'black'}/>
        </svg>
        <svg width='150' height='150' className='svg' viewBox='10 55 200 5'>
            <circle className='circle' r='50' cx='75' cy='75' fill='blue'/>
        </svg>
        <svg width='150' height='150' className='svg'>
            <rect x="0" y="0" width="75" height="75" fill="orange"/>
            <g id="my-group">
                <rect x="0" y="75" width="75" height="75" fill="#59fa81"/>
                <rect x="75" y="0" width="75" height="75" fill="#ad4a3d"/>
                <rect x="75" y="75" width="75" height="75" fill="yellow"/>
            </g>
        </svg>
        <svg width="230" height="120" xmlns="http://www.w3.org/2000/svg">
            <filter id="blurMe">
                <feGaussianBlur stdDeviation="1"/>
            </filter>

            <circle cx="60" cy="60" r="50" fill="green"/>

            <circle cx="170" cy="60" r="50" fill="green" filter="url(#blurMe)"/>
        </svg>

        {/*<input type="range" value={range} onChange={(e) => setRange(+e.target.value)}/>*/}
        {/*<svg className={'svg'}>*/}
        {/*    <rect width='200' height='150' fill='#324123' x='100' y='125' rx='10'/>*/}
        {/*</svg>*/}
        {/*<svg className={'svg'}>*/}
        {/*    <circle stroke-width="10" r={range} fill='#598231' cx='50%' cy='50%'/>*/}
        {/*</svg>*/}
        {/*<svg className={'svg'}>*/}
        {/*    <ellipse rx='50' ry='100' fill='gold' cx='50%' cy='50%'/>*/}
        {/*</svg>*/}
        {/*<svg className={'svg'}>*/}
        {/*    <polygon points='51,24 0,100 100,100' fill={'silver'}/>*/}
        {/*</svg>*/}
        {/*<svg className={'svg'}>*/}
        {/*    <line style={{margin: '220px 0'}} x1='400' y1='0' x2='0' y2='0' stroke='brown' stroke-width="20"/>*/}
        {/*</svg>*/}
        {/*<svg className={'svg'}>*/}
        {/*    <polyline points='50,180 50,50' stroke={'black'} fill={'none'} stroke-width="10" className="pie" />*/}
        {/*</svg>*/}
        {/*<svg height="120" width="120" viewBox="0 0 20 20">*/}
        {/*    <circle r="10" cx="10" cy="10" fill="white" />*/}
        {/*    <circle r="5" cx="10" cy="10" fill="transparent"*/}
        {/*            stroke="tomato"*/}
        {/*            stroke-width="10"*/}
        {/*            stroke-dasharray="calc(20 * 31.4 / 100) 31.4"*/}
        {/*            transform="rotate(-90) translate(-20)" />*/}
        {/*</svg>*/}
    </div>
}