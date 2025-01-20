import React from 'react';
import { Rewind, Play, FastForward, Shuffle } from 'lucide-react';

const PlayControls = () => {
  return (
    <div className="flex items-center justify-between space-x-4 mt-4">
      <button
        className="text-darkMagenta font-bold px-3 py-2 rounded-md hover:bg-teal hover:scale-105 focus:outline-none focus:ring focus:ring-magenta transition-transform"
        aria-label="Playback Speed"
      >
        1x
      </button>

      <button
        className="text-darkMagenta hover:text-teal focus:outline-none focus:ring focus:ring-magenta transition-transform hover:scale-105"
        aria-label="Rewind"
      >
        <Rewind className="w-6 h-6" />
      </button>

      <button
        className="bg-gradient-to-r from-magenta to-brightPink text-lightTeal border-4 border-darkMagenta w-14 h-14 rounded-lg shadow-lg hover:shadow-xl active:shadow-inner flex items-center justify-center transition-transform duration-200 hover:scale-110 hover:rotate-6"
        aria-label="Play"
      >
        <Play className="w-8 h-8" />
      </button>

      <button
        className="text-darkMagenta hover:text-teal focus:outline-none focus:ring focus:ring-magenta transition-transform hover:scale-105"
        aria-label="Fast Forward"
      >
        <FastForward className="w-6 h-6" />
      </button>
      
      <button
        className="text-darkMagenta hover:text-teal focus:outline-none focus:ring focus:ring-magenta transition-transform hover:scale-105"
        aria-label="Shuffle"
      >
        <Shuffle className="w-6 h-6" />
      </button>
    </div>
  );
};

export default PlayControls;
