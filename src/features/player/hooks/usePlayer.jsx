import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pause, play, playNewSong } from "../state/playerSlice";
import { allSongs } from "../../../shared/apis/songsApi";

const usePlayer = () => {
  const dispatch = useDispatch();
  const songs = allSongs();
  const { isPlaying, currentSong } = useSelector((store) => store.player);
  const audioRef = useRef(new Audio());

  useEffect(() => {
    console.log("currentSong", currentSong);
    if (!currentSong) return;

    audioRef.current.src = currentSong.url;
  }, [currentSong]);

  useEffect(() => {
    console.log("isPlaying", isPlaying);
    if (!currentSong) return;

    isPlaying ? audioRef.current.play() : audioRef.current.pause();
  }, [isPlaying, currentSong]);



  const nextSong = () => {
    if(currentSong.songIdx >= songs.length-1) return
  
    const newSong = { ...songs[currentSong.songIdx + 1], songIdx: currentSong.songIdx + 1 };
    dispatch(playNewSong(newSong));
  };
  const prevSong = () => {
    if(currentSong.songIdx < 1) return
    const newSong = { ...songs[currentSong.songIdx - 1], songIdx: currentSong.songIdx - 1 };
    dispatch(playNewSong(newSong));
  };
  
  
  const togglePlayPause = () => {
    console.log("toggle play pause");
    isPlaying ? dispatch(pause()) : dispatch(play());
  };
  return { togglePlayPause, isPlaying, currentSong,nextSong,prevSong };
};

export default usePlayer;
