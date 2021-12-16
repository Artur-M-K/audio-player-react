import React from 'react';
import MusicSection from '../components/MusicSection';
import MiniPlayer from '../components/UI/MiniPlayer';
import styles from './MainPage.module.css';

const MainPage = ({data}) => {
    return (
        <div className={styles.container}>
            <MusicSection data={data}/>
            <MiniPlayer/> 
        </div>
    )
}

export default MainPage;
