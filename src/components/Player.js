import React, { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSong } from "../redux/currentSongSlice";
import { togglePlaying } from "../redux/playingSlice";
import data from "../data";

function Player() {
  const dispatch = useDispatch();
  const isPlaying = useSelector((state) => state.isPlaying);

  const songs = useSelector((state) => state.currentSongs);

  const autoSkip = async () => {
    let currentIndex = data.findIndex((song) => song.id === songs.id);
    await dispatch(selectSong(data[currentIndex + 1] || data[0]));
    if (isPlaying) audioRef.current.play();
  };

  const skipMusic = async (direction) => {
    let currentIndex = data.findIndex((song) => song.id === songs.id);
    if (direction === "skip-forward") {
      await dispatch(selectSong(data[currentIndex + 1] || data[0]));
    }
    if (direction === "skip-backward") {
      await dispatch(
        selectSong(data[currentIndex - 1] || data[data.length - 1])
      );
    }
  };

  const audioRef = useRef(null);

  useEffect(() => {
    isPlaying ? audioRef.current.play() : audioRef.current.pause();
  });

  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  const timeUpdate = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration: duration });
  };

  const Play = async () => {
    if (isPlaying) {
      await audioRef.current.pause();
      dispatch(togglePlaying());
    } else {
      await audioRef.current.play();
      dispatch(togglePlaying());
    }
  };
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const dragMusic = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  return (
    <div className="player-container">
      <div className="timer">
        <h3>{getTime(songInfo.currentTime)}</h3>
        <input
          min={0}
          max={songInfo.duration || 0}
          value={songInfo.currentTime}
          type="range"
          onChange={dragMusic}
        />
        <h3>{getTime(songInfo.duration - songInfo.currentTime || 0)}</h3>
      </div>

      <div className="musicButtons">
        <p onClick={() => skipMusic("skip-backward")}>
          <i className="fas fa-forward backward"></i>
        </p>
        <p onClick={Play}>
          <i
            className={isPlaying ? "far fa-stop-circle" : "far fa-play-circle"}
          ></i>
        </p>
        <p onClick={() => skipMusic("skip-forward")}>
          <i className="fas fa-forward"></i>
        </p>
      </div>
      <audio
        onLoadedMetadata={timeUpdate}
        onTimeUpdate={timeUpdate}
        ref={audioRef}
        src={songs.audio}
        onEnded={autoSkip}
      />
    </div>
  );
}

export default Player;
