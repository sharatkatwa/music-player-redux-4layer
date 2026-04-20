import React from "react";

const SearchContainer = ({ searchSongs, playSearchedSong }) => {
  return (
    <div className="absolute top-12 h-100 max-w-150 w-100 p-5 bg-black/95 border border-gray-500/20 rounded z-99 overflow-y-auto">
      {searchSongs.length > 0 ? (
        searchSongs.map((song,idx) => (
          <div
            key={idx}
            onClick={() => playSearchedSong(song)}
            className="flex items-center gap-2 cursor-pointer rounded-md p-2 hover:bg-zinc-900 "
          >
            <div className="h-10 w-10 flex overflow-hidden rounded">
              <img className="object-center object-cover" src={song.thumbnail} alt="poster" />
            </div>
            <div className="overflow-hidden">
              <p className="font-bold truncate">{song.title}</p>{" "}
              <p className="truncate text-gray-500 truncate">{song.artist}</p>{" "}
            </div>
          </div>
        ))
      ) : (
        <div className="w-full h-full flex items-center justify-center text-gray-500/80">No Songs Found...</div>
      )}
    </div>
  );
};

export default SearchContainer;
