import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faVolumeDown,
  faVolumeUp,
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
        width: "90%",
        // height: "50%"
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
  return (
    <div className={styles.container}>
      <div className={styles.mini_songInfo}>
        <p>SONG</p>
      </div>
      <div className={styles.mini_controls}>
        <button className={styles.mini_play}>
          <FontAwesomeIcon icon={faPlay} />
        </button>
      </div>
      <div className={styles.mini_bars}>
        <div className={styles.timeBar}>
          <div className={styles.dupa}>
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
  );
};

export default MiniPlayer;
