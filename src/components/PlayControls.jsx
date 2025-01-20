import React from 'react';
import { Rewind, Play, FastForward, Shuffle } from 'lucide-react';

const PlayControls = () => {
  return (
    <div className="flex items-center justify-between space-x-6 mt-6">
      <button
        className="text-darkMagenta font-bold px-3 py-2 rounded-md hover:bg-teal focus:outline-none focus:ring focus:ring-magenta"
        aria-label="Playback Speed"
      >
        1x
      </button>
      <button
        className="text-darkMagenta hover:text-teal focus:outline-none focus:ring focus:ring-magenta"
        aria-label="Rewind"
      >
        <Rewind className="w-6 h-6" />
      </button>
      <button
        className="text-darkMagenta border-2 border-darkMagenta p-2 w-12 h-12 rounded-md hover:bg-teal focus:outline-none focus:ring focus:ring-magenta transition duration-200"
        aria-label="Play"
      >
        <Play className="w-6 h-6" />
      </button>
      <button
        className="text-darkMagenta hover:text-teal focus:outline-none focus:ring focus:ring-magenta"
        aria-label="Fast Forward"
      >
        <FastForward className="w-6 h-6" />
      </button>
      <button
        className="text-darkMagenta hover:text-teal focus:outline-none focus:ring focus:ring-magenta"
        aria-label="Shuffle"
      >
        <Shuffle className="w-6 h-6" />
      </button>
    </div>
  );
};

export default PlayControls;
