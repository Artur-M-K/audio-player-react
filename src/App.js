import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PersonalPlayer from './pages/PersonalPlayer';
import MainPage from './pages/MainPage';
import NotFound from './pages/NotFound';
import Header from './components/UI/Header';
import './App.css';


const DUMMY_DATA = [
  {
    title: "The Kraken",
    artist: "amityinfame",
    img_src: "./images/amityinfame - The Kraken.jpg",
    src: "./music/amityinfame - The Kraken.mp3",
    id: "1"
  },
  {
    title: "Everything I'm not",
    artist: "From Tom",
    img_src: "./images/From Tom - Everything I'm not.jpg",
    src: "./music/From Tom - Everything I'm not.mp3",
    id: "2"
  },
  {
    title: "Folding Space Dub",
    artist: "kalikreekdubb",
    img_src: "./images/kalikreekdubb - Folding Space Dub.jpg",
    src: "./music/kalikreekdubb - Folding Space Dub.mp3",
    id: "3"
  },
  {
    title: "Sabre",
    artist: "Ketsa",
    img_src: "./images/Ketsa - Sabre.jpg",
    src: "./music/Ketsa - Sabre.mp3",
    id: "4"
  },
  {
    title: "The Kraken",
    artist: "amityinfame",
    img_src: "./images/amityinfame - The Kraken.jpg",
    src: "./music/amityinfame - The Kraken.mp3",
    id: "1"
  },
  {
    title: "Everything I'm not",
    artist: "From Tom",
    img_src: "./images/From Tom - Everything I'm not.jpg",
    src: "./music/From Tom - Everything I'm not.mp3",
    id: "2"
  },
  {
    title: "Folding Space Dub",
    artist: "kalikreekdubb",
    img_src: "./images/kalikreekdubb - Folding Space Dub.jpg",
    src: "./music/kalikreekdubb - Folding Space Dub.mp3",
    id: "3"
  },
  {
    title: "Sabre",
    artist: "Ketsa",
    img_src: "./images/Ketsa - Sabre.jpg",
    src: "./music/Ketsa - Sabre.mp3",
    id: "4"
  },
  {
    title: "The Kraken",
    artist: "amityinfame",
    img_src: "./images/amityinfame - The Kraken.jpg",
    src: "./music/amityinfame - The Kraken.mp3",
    id: "1"
  },
  {
    title: "Everything I'm not",
    artist: "From Tom",
    img_src: "./images/From Tom - Everything I'm not.jpg",
    src: "./music/From Tom - Everything I'm not.mp3",
    id: "2"
  },
  {
    title: "Folding Space Dub",
    artist: "kalikreekdubb",
    img_src: "./images/kalikreekdubb - Folding Space Dub.jpg",
    src: "./music/kalikreekdubb - Folding Space Dub.mp3",
    id: "3"
  },
  {
    title: "Sabre",
    artist: "Ketsa",
    img_src: "./images/Ketsa - Sabre.jpg",
    src: "./music/Ketsa - Sabre.mp3",
    id: "4"
  },
  ];

function App() {

  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <MainPage data={DUMMY_DATA}/>
          </Route>
          <Route path="/mylist">
            <PersonalPlayer data={DUMMY_DATA}/>
          </Route>
          <Route path="*">
          <NotFound />
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
