import "./styles/app.scss";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import Song from "./components/Song";
import Player from "./components/Player";
import MusicList from "./components/MusicList";
import CurrentSongs from "./redux/currentSongSlice";
import PlayingSlice from "./redux/playingSlice";
import Nav from "./components/Nav";
import { useState } from "react";

const store = configureStore({
  reducer: {
    currentSongs: CurrentSongs,
    isPlaying: PlayingSlice,
  },
});

function App() {
  const [libraryStatus, setlibraryStatus] = useState(true);
  return (
    <Provider store={store}>
      <div className="App">
        <Nav
          libraryStatus={libraryStatus}
          setlibraryStatus={setlibraryStatus}
        />
        <Song />
        <Player />
        <MusicList
          libraryStatus={libraryStatus}
          setlibraryStatus={setlibraryStatus}
        />
      </div>
    </Provider>
  );
}

export default App;
