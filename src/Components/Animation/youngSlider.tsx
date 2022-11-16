import {PSlider} from "./sldierstyle";

export const YoungSlider = ({article,count}: any) => {
    console.log('young'+article)
    return <PSlider primary={count}>{article}</PSlider>
}