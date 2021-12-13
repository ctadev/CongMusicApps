import React from "react";
import { useDispatch } from "react-redux";
import { selectSong } from "../redux/currentSongSlice";

function MusicItem({ songs }) {
  const dispatch = useDispatch();

  return (
    <div
      className={`library-container ${songs.active ? "selected" : ""}`}
      key={songs.id}
      onClick={() => dispatch(selectSong(songs))}
    >
      <img src={songs.cover} alt={songs.name} />
      <h3>{songs.name}</h3>
      <p>{songs.artist}</p>
    </div>
  );
}

export default MusicItem;
