import React from 'react';
import { Volume2 } from 'lucide-react';

const VolumeControls = () => {
  return (
    <div className="flex items-center space-x-3">
      {/* Volume Icon */}
      <Volume2 className="w-6 h-6 text-brightPink" />
      
      {/* Volume Slider */}
      <input
        type="range"
        min="0"
        max="100"
        defaultValue="50"
        className="w-full h-1 rounded-full bg-magenta accent-teal focus:outline-none focus:ring-2 focus:ring-brightPink"
        aria-label="Volume Control"
      />
    </div>
  );
};

export default VolumeControls;
