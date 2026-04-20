import React from "react";
import { allSongs } from "../../../../shared/apis/songsApi";
import SongCard from "../components/SongCard";

const Home = () => {
  const songs = allSongs();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-2">
      {songs.map((song,idx) => (
        <SongCard key={song.url} song={song} songIdx = {idx} />
      ))}
    </div>
  );
};

export default Home;
