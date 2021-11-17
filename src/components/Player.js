import React, {useState, useRef, useEffect} from 'react';
import PlayerDetails from './PlayerDetails';
import styles from './Player.module.css';

const Player = ({songs, nextSongIndex, currentSongIndex, setCurrentSongIndex}) => {

    const audioElement = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        if(isPlaying) {
            audioElement.current.play();
        }else {
            audioElement.current.pause();
        }
        setDuration(audioElement.current.duration);
    }, [isPlaying]);

    const skipSong = (forwards = true) => {

        //skip song forward
        if (forwards) {
            setCurrentSongIndex(() => {
                let temp = currentSongIndex;
                temp++;

                if (temp > songs.length - 1) {
                    temp = 0;
                }
                return temp;
            })
        //skip song backward
        }else {
            setCurrentSongIndex(() => {
                let temp = currentSongIndex;
                temp--;

                if (temp < 0) {
                    temp = songs.length - 1;
                }
                return temp;
            })
        }
        setIsPlaying(false);
    };

    const convertTime = (time) =>
{    
    let mins = Math.floor(time / 60);
    if (mins < 10) {
      mins = '0' + String(mins);
    }
    let secs = Math.floor(time % 60);
    if (secs < 10) {
      secs = '0' + String(secs);
    }

    return mins + ':' + secs;
}

    duration && console.log(convertTime(duration))
  
    return (
        <div className={styles.player}>
            <audio src={songs[currentSongIndex].src} ref={audioElement}></audio>
            <h4>Player</h4>
            <PlayerDetails 
                song={songs[currentSongIndex]} 
                isPlaying={isPlaying} 
                setIsPlaying={setIsPlaying}
                skipSong={skipSong}
                songs={songs}
                duration={duration ? convertTime(duration): '00:00'}
            />
            <p><strong>Next up:</strong> {songs[nextSongIndex].title} - {songs[nextSongIndex].artist}</p>
        </div>
    )
}

export default Player;
