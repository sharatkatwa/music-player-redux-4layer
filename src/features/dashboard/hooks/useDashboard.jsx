import React from "react";
import { useDispatch } from "react-redux";
import { playNewSong } from "../../player/state/playerSlice";

const useDashboard = (song,songIdx) => {
  const dispatch = useDispatch();

  const setCurrentSong = () => {
    const newSong = {...song, songIdx}
    dispatch(playNewSong(newSong));
  };
  return {
    setCurrentSong,
  };
};

export default useDashboard;
