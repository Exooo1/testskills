import React, {useState} from 'react'
import {DivStyled} from './fileBarStyled';


export const ProgressFileBar = () => {
    const [progress, setProgress] = useState(0)

    const readFile = (e: any) => {
        e.preventDefault()
        const reader = new FileReader()
        reader.onprogress = async (e) => {
            setProgress(Math.round((100 * e.loaded) / e.total))
        }
        reader.onload = async (e) => {
            console.log(e)
            // @ts-ignore
            const text = (e.target.result)
            // @ts-ignore
        };
        reader.readAsDataURL(e.target.files[0])
    }

    return <DivStyled>
        <div>
            <h1>This is FileUploadBar</h1>
            <input type="file" onChange={readFile}/>
            <progress data-bar={`${progress}%`} className="bar" value={progress} max={100}/>
        </div>
    </DivStyled>
}