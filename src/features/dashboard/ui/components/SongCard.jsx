import { Play } from "lucide-react";
import React from "react";
import useDashboard from "../../hooks/useDashboard";

const SongCard = ({song,songIdx}) => {
const {setCurrentSong} = useDashboard(song,songIdx)
  return (
    <div onClick={setCurrentSong} className="bg-zinc-900 rounded p-4  hover:bg-zinc-800 transition duration-300 cursor-pointer group">
      {/* Thumbnail */}
      <div className="relative">
        <img src={song.thumbnail} alt={song.title} className="w-full h-48 object-cover rounded-lg" />

        {/* Play Button (hover effect) */}
        <button className="absolute bottom-3 right-3 bg-green-500 p-3 rounded-full opacity-0 group-hover:opacity-100 transition">
          <Play size={18} className="text-black" />
        </button>
      </div>

      {/* Song Info */}
      <div className="mt-4">
        <h2 className="text-white font-semibold text-lg truncate">{song.title}</h2>

        <p className="text-gray-400 text-sm truncate">{song.artist}</p>

        <p className="text-gray-500 text-xs mt-1 truncate">{song.album}</p>

        <p className="text-gray-600 text-xs mt-1">{song.year}</p>
      </div>
    </div>
  );
};

export default SongCard;
