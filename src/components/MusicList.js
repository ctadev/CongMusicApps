import React from "react";
import { useSelector } from "react-redux";
import MusicItem from "./MusicItem";
import data from "../data";

function MusicList({ libraryStatus, setlibraryStatus }) {
  const current = useSelector((state) => state.currentSongs);
  const newSongs = data.map((song) => {
    if (song.id === current.id) {
      return {
        ...song,
        active: true,
      };
    } else {
      return {
        ...song,
        active: false,
      };
    }
  });

  return (
    <div className={libraryStatus ? "library" : "library show"}>
      <h2>Music Library</h2>
      <div>
        {newSongs.map((song) => (
          <MusicItem songs={song} key={song.id} />
        ))}
      </div>
    </div>
  );
}

export default MusicList;
