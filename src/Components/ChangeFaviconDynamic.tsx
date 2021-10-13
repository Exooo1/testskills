import React, {useEffect} from 'react'


const changeFavicon = () => {
    const getFavicon = document.getElementById('favicon')
    const setFavicon = document.createElement('link')
    setFavicon.id = 'favicon'
    setFavicon.rel = 'shortcut icon'
    setFavicon.href = 'https://www.favicon.cc/logo3d/6208.png'
    document.title = 'ChangeFaviconDynamic'
    if (getFavicon) document.head.removeChild(getFavicon)
    document.head.appendChild(setFavicon)
}

export const ChangeFaviconDynamic = () => {

    useEffect(() => {
        changeFavicon()
        console.log('bebra')
    }, [])

    return <div>
        <h3>ChangeFavicon</h3>
        <button onClick={changeFavicon}>ChangeFavicon</button>
    </div>
}