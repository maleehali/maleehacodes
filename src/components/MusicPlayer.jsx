import React, { useState } from "react";
import ReactHowler from "react-howler";

const MusicPlayer = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="fixed bottom-4 right-6 flex items-center space-x-3 p-3 bg-white/20 rounded-full shadow-md">
      <ReactHowler src="/assets/music/lofi.mp3" playing={playing} loop volume={0.4} />
      <button onClick={() => setPlaying(!playing)} className="text-xl">
        {playing ? "⏸️" : "▶️"}
      </button>
      <span className="text-sm">Lo-Fi Vibes</span>
    </div>
  );
};

export default MusicPlayer;
