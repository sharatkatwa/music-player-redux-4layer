import { Pause, Play, StepBack, StepForward } from "lucide-react";
import React from "react";
import usePlayer from "../../hooks/usePlayer";

const Player = () => {
  const { togglePlayPause, isPlaying, currentSong,nextSong,prevSong } = usePlayer();
  return (
    <div className=" grid grid-cols-3 px-10">
      <div className="whitespace-nowarp self-center">
        {currentSong ? (
          <div className="flex items-center gap-2 ">
            <div className="h-10 w-10 flex overflow-hidden rounded">
            
            <img className="object-center object-cover" src={currentSong.thumbnail} alt="poster" />
            </div>
            <div>
            <p className="font-bold">{currentSong.title}</p>{" "}
            <p className="truncate text-gray-500">{currentSong.artist}</p>{" "}
            </div>
          </div>
        ) : (
          <p>No Music is Playing...</p>
        )}
      </div>
      <div className="h-28 w-full flex items-center justify-center gap-6">
        <StepBack
          onClick={prevSong}
          size={30}
          fill="black"
          stroke="none"
          className="bg-white rounded-full p-2 active:scale-[.90] transition-scale duration-300 hover:bg-white/80"
        />
        {isPlaying ? (
          <Pause
            onClick={togglePlayPause}
            size={40}
            stroke="none"
            fill="black"
            className="bg-green rounded-full p-2 active:scale-[.90] transition-scale duration-300 "
          />
        ) : (
          <Play
            onClick={togglePlayPause}
            size={40}
            stroke="none"
            fill="black"
            className="bg-green rounded-full p-2 active:scale-[.90] transition-scale duration-300 "
          />
        )}
        <StepForward
          onClick={nextSong}
          size={30}
          fill="black"
          stroke="none"
          className="bg-white rounded-full p-2 active:scale-[.90] transition-scale duration-300 hover:bg-white/80"
        />
      </div>
      <div className="self-center text-right">
        <p>Volume Slider</p>
      </div>
    </div>
  );
};

export default Player;
