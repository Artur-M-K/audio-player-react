import React from "react";
import PlayerControls from "./PlayerControls";
import styles from "./PlayerDetails.module.css";

const PlayerDetails = ({
  song,
  isPlaying,
  setIsPlaying,
  skipSong,
  songs,
  duration,
}) => {
  return (
    <div className={styles.details}>
      <div className={styles.songMedia}>
        <div className={styles.image}>
          <img src={song.img_src} alt={song.title} />
        </div>
        <div className={styles.songTime}>
            <span>00:00 / {duration}</span>
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
