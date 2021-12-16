import React from 'react'

const MusicItem = ({artist, title, image, source}) => {
    return (
        <li>
            <div>
                <p>{artist}</p>
                <span>{title}</span>
            </div>
            <img src={image} alt="" />
        </li>
    )
}

export default MusicItem;
