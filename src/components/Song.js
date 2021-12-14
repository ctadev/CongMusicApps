import React from "react";
import { useSelector } from "react-redux";

function Song() {
  const songs = useSelector((state) => state.currentSongs);
  const isPlaying = useSelector((state) => state.isPlaying);

  return (
    <div className="song-container">
      <img
        className={isPlaying ? "image play" : "image pause"}
        src={songs.cover}
        alt={songs.name}
      />
      <h2>{songs.name}</h2>
      <p>{songs.artist}</p>
      <div className="music-icon-animation">
        <div>
          <i
            className={isPlaying ? "fas fa-music play" : "fas fa-music pause"}
          ></i>
          <i
            className={isPlaying ? "fas fa-music play" : "fas fa-music pause"}
          ></i>
          <i
            className={isPlaying ? "fas fa-music play" : "fas fa-music pause"}
          ></i>
        </div>
        <div>
          <i
            className={isPlaying ? "fas fa-music play" : "fas fa-music pause"}
          ></i>
          <i
            className={isPlaying ? "fas fa-music play" : "fas fa-music pause"}
          ></i>
          <i
            className={isPlaying ? "fas fa-music play" : "fas fa-music pause"}
          ></i>
        </div>
      </div>
    </div>
  );
}

export default Song;
