import React from 'react'
import './Grid.css'

function Grid(props) {

    const wallpapers = props.items.map((wallpaperUrl, index) => (
        <div className="wallpaper" key={wallpaperUrl}>
            <li><img
                className="image" 
                src={wallpaperUrl} 
                alt={`wallpaper ${index}`}
                onClick={() => props.openLightbox(index) }
            /></li>
            <button className="delete" onClick={() => props.deleteUrl(index)}>X</button> 
        </div>

    ))

    return (
        <ul>
            {wallpapers}
        </ul>
    )
}



export default Grid