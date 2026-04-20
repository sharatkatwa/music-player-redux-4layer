import React, { useState } from "react";
import { allSongs } from "../../../shared/apis/songsApi";
import { useDispatch } from "react-redux";
import { playNewSong } from "../../player/state/playerSlice";

const useSearch = () => {
  const songs = allSongs();
  const [searchValue, setSearchValue] = useState(null);
  const [searchSongs, setSearchSongs] = useState([]);
  const dispatch = useDispatch();
  
  let timer
  
  const findSearch = (e) => {
   clearTimeout(timer)
    const value = e.target.value;
    timer = setTimeout(() => {
      setSearchValue(value);
      const filteredSongs = songs.reduce((acc, song, idx) => {
        if (song.title.toLowerCase().includes(value.toLowerCase())) acc.push({ ...song, songIdx: idx });

        return acc;
      }, []);
      setSearchSongs(filteredSongs);
    }, 500);
  };

  // dispatching searched Song function
  const playSearchedSong = (song) => {
    dispatch(playNewSong(song));
  };
  // const searchDebounce = ()=>{

  // }

  return { findSearch, searchValue, searchSongs, playSearchedSong };
};

export default useSearch;
