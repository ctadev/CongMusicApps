import React from "react";
import { useSelector } from "react-redux";

function Song() {
  const songs = useSelector((state) => state.currentSongs);

  return (
    <div className="song-container">
      <img src={songs.cover} alt={songs.name} />
      <h2>{songs.name}</h2>
      <p>{songs.artist}</p>
    </div>
  );
}

export default Song;
