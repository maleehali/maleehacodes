import React, { useState } from "react";
import ReactHowler from "react-howler";
import { FaPlay, FaPause } from "react-icons/fa";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-4 right-6 flex items-center space-x-3 bg-white/30 backdrop-blur-md p-3 rounded-full shadow-md z-50">
      <ReactHowler
        src="/lofi.mp3" // must match path in public folder
        playing={isPlaying}
        loop={true}
        volume={0.4}
      />
      <button
        onClick={togglePlay}
        className="text-sm sm:text-base bg-pink-300 text-white px-4 py-2 rounded-full hover:bg-pink-400 transition flex items-center space-x-2"
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
        <span>Lo-Fi Vibes</span>
      </button>
    </div>
  );
};

export default MusicPlayer;
