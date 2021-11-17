import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay, faPause, faForward, faBackward} from '@fortawesome/free-solid-svg-icons';
import styles from './PlayerControls.module.css';

const PlayerControls = ({ isPlaying, setIsPlaying, skipSong }) => {

    return (
        <div className={styles.controls}>
            <button className={styles.skip} onClick={() => skipSong(false)}>
                <FontAwesomeIcon icon={faBackward}/>
            </button>
            <button className={styles.play} onClick={() => setIsPlaying(!isPlaying)}>
                <FontAwesomeIcon icon={isPlaying ? faPause : faPlay}/>
            </button>
            <button className={styles.skip} onClick={() => skipSong(true)}>
                <FontAwesomeIcon icon={faForward}/>
            </button>
        </div>
    )
}

export default PlayerControls;
