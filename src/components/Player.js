import React, {useState, useRef, useEffect} from 'react';
import PlayerDetails from './PlayerDetails';
import styles from './Player.module.css';

const Player = ({songs, nextSongIndex, currentSongIndex, setCurrentSongIndex}) => {

    const audioElement = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(null);

    useEffect(() => {

        if(isPlaying) {
            audioElement.current.play();
        }else {
            audioElement.current.pause();
        }
    }, [isPlaying]);

    const skipSong = (forwards = true) => {
        audioElement.current.currentTime = 0;
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
        setDuration(audioElement.current.duration);
        setIsPlaying(false);
    };

    // setTimeout(() => {
    //     audioElement ? setDuration(audioElement.current.duration) : '00:00' ;
    // }, 300);
//    audioElement.current ? setDuration(audioElement.current.duration) : setDuration('00:00');
// console.log(audioElement.current);

const onLoadedMetadata = () => {
    if (audioElement.current) {
        setDuration(audioElement.current.duration);
    }
};
    return (
        <div className={styles.player}>
            <audio src={songs[currentSongIndex].src} ref={audioElement} onLoadedMetadata={onLoadedMetadata}></audio>
            <h4>Player</h4>
            <PlayerDetails 
                song={songs[currentSongIndex]} 
                isPlaying={isPlaying} 
                setIsPlaying={setIsPlaying}
                skipSong={skipSong}
                songs={songs}
                audioElement={audioElement.current}
                duration={duration}
            />
            <p><strong>Next up:</strong> {songs[nextSongIndex].title} - {songs[nextSongIndex].artist}</p>
        </div>
    )
}

export default Player;
