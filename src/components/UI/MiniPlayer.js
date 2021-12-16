import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPlay,
  faPause,
  faVolumeDown,
  faVolumeUp,
  faPlusSquare,
  faMinusSquare
} from "@fortawesome/free-solid-svg-icons";
import { Slider } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import styles from "./MiniPlayer.module.css";

const muiTheme = createTheme({
  overrides: {
    MuiSlider: {
      root: {
        margin: "0",
        padding: "0",
        width: "100%",
      },
      thumb: {
        color: "#fff",
        height: 18,
        width: 18,
        borderRadius: 0,
      },
      track: {
        color: "#D5ECF7",
        height: 8,
        borderRadius: 2,
      },
      rail: {
        color: "#77D9F7",
        height: 6,
        borderRadius: 2,
      },
    },
  },
});



const MiniPlayer = () => {

  const [isPlay, setIsPlay] = useState(false);

  const playHandler = () => {
    setIsPlay(!isPlay)
  }

  return (
    <div className={styles.container}>
      <div className={styles.mini_songInfo}>
        <img src="" alt="song img" />
        <div className={styles.song_details}>
        <p>SONG NAME</p>
        <p>ARTIST NAME</p>
        </div>
        <button className={styles.add}><FontAwesomeIcon icon={faPlusSquare} /></button>
      </div>
      <div className={styles.mini_controls}>
        <button className={styles.mini_play}>
          <FontAwesomeIcon icon={!isPlay? faPlay: faPause} onClick={playHandler}/>
        </button>
        <p>TIME 00:00</p>
      </div>
      <div className={styles.mini_bars}>
        <div className={styles.timeBar}>
          <div className={styles.timeBar_slider}>
          <ThemeProvider theme={muiTheme}>
            <Slider
              min={0}
              max={100}
              value={50}
              onChange={() => console.log("dziala")}
              aria-labelledby="continuous-slider"
            />
          </ThemeProvider>
          </div>
        </div>
        <div className={styles.volumeBar}>
        <div className={styles.volumeBar_slider}>
        <FontAwesomeIcon icon={faVolumeDown} />
        
          <ThemeProvider theme={muiTheme}>
            <Slider
              aria-label="Volume"
              defaultValue={30}
              onChange={() => console.log("dziala")}
            />
          </ThemeProvider>
          
          <FontAwesomeIcon icon={faVolumeUp} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniPlayer;
