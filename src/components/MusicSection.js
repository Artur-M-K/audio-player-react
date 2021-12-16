import React from 'react';
import MusicItem from './UI/MusicItem';
import styles from './MusicSection.module.css';

const MusicSection = ({data}) => {
    return (
        <div className={styles.container}>
            <ul className={styles.songs}>
                {data.map(item => {
                    return (
                        <MusicItem 
                            title={item.title} 
                            artist={item.artist}
                            image={item.img_src}
                            source={item.src}
                            key={item.id}
                            />
                    )
                })}
            </ul>
        </div>
    )
}

export default MusicSection;
