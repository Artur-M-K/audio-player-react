import React, {useState, useEffect} from "react";
import PlayerControls from "./PlayerControls";
import {Slider} from '@material-ui/core';
import  {createTheme}  from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import styles from "./PlayerDetails.module.css";

const muiTheme = createTheme({
  overrides:{
    MuiSlider: {
      root:{
        padding: "13px 0",
        width: '90%'
      },
      thumb:{
      color: "#362B24",
      height: 20,
        width: 20,
      },
      track: {
        color: '#42342B',
        height: 8,
        borderRadius: 2,
      },
      rail: {
        color: '#AB866F',
        height: 6,
        borderRadius: 2,
      }
    }
}
});

const PlayerDetails = ({
  song,
  isPlaying,
  setIsPlaying,
  skipSong,
  songs,
  audioElement,
  duration
}) => {

  const [songTime, setSongTime] = useState('00:00');

  useEffect(() => {
    let currentSongTime;
    
    if(isPlaying) {
      currentSongTime = setInterval(() => {
          const songCurrentTime = convertTime(audioElement.currentTime);
          setSongTime(songCurrentTime);
      }, 100);
  }
  
  return () => clearInterval(currentSongTime);
}, [isPlaying, audioElement]);

  const convertTime = (time) => {
    let mins = Math.floor(time / 60);
    if (mins < 10) {
      mins = "0" + String(mins);
    }
    let secs = Math.floor(time % 60);
    if (secs < 10) {
      secs = "0" + String(secs);
    }

    return mins + ":" + secs;
  };
  const songDuration = convertTime(duration);

  const handleProgressChange = (e, value) => {
    audioElement.currentTime = value;
    e.preventDefault();
  }
 audioElement && console.log(audioElement.current)
  return (
    <div className={styles.details}>
      <div className={styles.songMedia}>
        <div className={styles.image}>
          <img src={song.img_src} alt={song.title} />
        </div>
        <div className={styles.songTime}>
          <span className={styles.timeDisplay}>{`${songTime} / ${songDuration}`}</span>
          <ThemeProvider theme={muiTheme}>
          <Slider 
            min={0}
            max={duration}
            value={audioElement && audioElement.currentTime}
            onChange={handleProgressChange}
            aria-labelledby="continuous-slider"
            />
            </ThemeProvider>
        </div>
      </div>
      <div className={styles.songInfo}>
        <div className={styles.title}>
          <h4>TITLE:</h4>
          <h3>{song.title}</h3>
        </div>
        <div className={styles.artist}>
          <h4>ARTIST:</h4>
          <h3>
            <strong>{song.artist}</strong>
          </h3>
        </div>
        <PlayerControls
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          skipSong={skipSong}
        />
      </div>
    </div>
  );
};

export default PlayerDetails;
