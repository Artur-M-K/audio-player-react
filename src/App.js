import React, {useState, useEffect} from 'react';
import Player from './components/Player';
import './App.css';

// window.screen.orientation.lock('portrait');
const DUMMY_DATA = [
{
  title: "The Kraken",
  artist: "amityinfame",
  img_src: "./images/amityinfame - The Kraken.jpg",
  src: "./music/amityinfame - The Kraken.mp3"
},
{
  title: "Everything I'm not",
  artist: "From Tom",
  img_src: "./images/From Tom - Everything I'm not.jpg",
  src: "./music/From Tom - Everything I'm not.mp3"
},
{
  title: "Folding Space Dub",
  artist: "kalikreekdubb",
  img_src: "./images/kalikreekdubb - Folding Space Dub.jpg",
  src: "./music/kalikreekdubb - Folding Space Dub.mp3"
},
{
  title: "Sabre",
  artist: "Ketsa",
  img_src: "./images/Ketsa - Sabre.jpg",
  src: "./music/Ketsa - Sabre.mp3"
},
];

function App() {

  const [songs] = useState(DUMMY_DATA);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if(currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    })
  }, [currentSongIndex])

  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
