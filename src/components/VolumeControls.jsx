import React from 'react';
import { Volume2 } from 'lucide-react';

const VolumeControls = () => {
  return (
    <div className="flex items-center space-x-4 mt-6">
      <Volume2 className="w-7 h-7 text-brightPink" />
      <input
        type="range"
        min="0"
        max="100"
        defaultValue="50"
        className="w-full h-2 rounded-full bg-magenta accent-teal focus:outline-none focus:ring-2 focus:ring-brightPink transition"
        aria-label="Volume Control"
      />
    </div>
  );
};

export default VolumeControls;
