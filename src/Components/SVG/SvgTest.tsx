import './svg.css'
import {useState} from "react";

export const SvgTest = () => {
    const [range, setRange] = useState<number>(20)

    return <div className='svgTest'>
        <h1>SVG</h1>
        <input type="range" value={range} onChange={(e) => setRange(+e.target.value)}/>
        <svg className={'svg'}>
            <rect width='200' height='150' fill='#324123' x='100' y='125' rx='10'/>
        </svg>
        <svg className={'svg'}>
            <circle stroke-width="10" r={range} fill='#598231' cx='50%' cy='50%'/>
        </svg>
        <svg className={'svg'}>
            <ellipse rx='50' ry='100' fill='gold' cx='50%' cy='50%'/>
        </svg>
        <svg className={'svg'}>
            <polygon points='51,24 0,100 100,100' fill={'silver'}/>
        </svg>
        <svg className={'svg'}>
            <line style={{margin: '220px 0'}} x1='400' y1='0' x2='0' y2='0' stroke='brown' stroke-width="20"/>
        </svg>
        <svg className={'svg'}>
            <polyline points='50,180 50,50' stroke={'black'} fill={'none'} stroke-width="10" className="pie" />
        </svg>
        <svg height="120" width="120" viewBox="0 0 20 20">
            <circle r="10" cx="10" cy="10" fill="white" />
            <circle r="5" cx="10" cy="10" fill="transparent"
                    stroke="tomato"
                    stroke-width="10"
                    stroke-dasharray="calc(20 * 31.4 / 100) 31.4"
                    transform="rotate(-90) translate(-20)" />
        </svg>
    </div>
}