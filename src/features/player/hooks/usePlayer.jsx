import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pause, play, playNewSong } from "../state/playerSlice";
import { allSongs } from "../../../shared/apis/songsApi";

const usePlayer = () => {
  const dispatch = useDispatch();
  const songs = allSongs();
  const { isPlaying, currentSong } = useSelector((store) => store.player);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef(new Audio());

  const barRef = useRef(null);
  const [progress, setProgress] = useState(20);
  const [isDraggable, setIsDraggable] = useState(false);

  // SEEKBAR drag update functino
  const updateProgress = (clientX) => {
    const rect = barRef.current.getBoundingClientRect();
    let value = ((clientX - rect.left) / rect.width) * 100;
    value = Math.max(0, Math.min(100, value));
    setProgress(value);
    // console.log(value);
    const duration = audioRef.current?.duration;
    audioRef.current.currentTime = (progress / 100) * duration;
  };

  // live seekbar  update 
  useEffect(() => {
    let audio = audioRef.current;
    const autoProgress = () => {
      if (!audio.duration || isDraggable) return;

      const percent = (audio.currentTime / audio.duration) * 100;
      setProgress(percent);
    };
    audio.addEventListener("timeupdate", autoProgress);
    return () => audio.removeEventListener("timeupdate", autoProgress);
  }, []);
  
  useEffect(() => {
    // console.log("currentSong", currentSong);
    if (!currentSong) return;

    audioRef.current.src = currentSong.url;
  }, [currentSong]);

  useEffect(() => {
    // console.log("isPlaying", isPlaying);
    if (!currentSong) return;

    isPlaying ? audioRef.current.play() : audioRef.current.pause();
  }, [isPlaying, currentSong]);

  const handleVolumeChange = (e) => {
    const currentVolume = e.target.value;
    setVolume(currentVolume);
    audioRef.current.volume = currentVolume;
  };

  const nextSong = () => {
    if (currentSong.songIdx >= songs.length - 1) return;

    const newSong = { ...songs[currentSong.songIdx + 1], songIdx: currentSong.songIdx + 1 };
    dispatch(playNewSong(newSong));
  };
  const prevSong = () => {
    if (currentSong.songIdx < 1) return;
    const newSong = { ...songs[currentSong.songIdx - 1], songIdx: currentSong.songIdx - 1 };
    dispatch(playNewSong(newSong));
  };

  const togglePlayPause = () => {
    console.log("toggle play pause");
    isPlaying ? dispatch(pause()) : dispatch(play());
  };
  return {
    togglePlayPause,
    isPlaying,
    currentSong,
    nextSong,
    prevSong,
    volume,
    handleVolumeChange,
    updateProgress,
    progress,
    isDraggable,
    setIsDraggable,
    barRef,
  };
};

export default usePlayer;
