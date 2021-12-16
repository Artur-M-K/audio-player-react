
import React from 'react';
import styles from './MusicItem.module.css';

const MusicItem = ({artist, title, image, source}) => {
    
    return (
        <li className={styles.container}>
            <img src={image} alt="" className={styles.image}/>
            <div className={styles.songInfo}>
                <p className={styles.artist}>{artist}</p>
                <p className={styles.title}>{title}</p> 
            </div>
            <div className={styles.social}>
                <button>likes: 100</button>
                <button>views: 345345</button>
            </div>
            
        </li>
    )
}

export default MusicItem;
