import React from 'react';
import { Volume2 } from 'lucide-react';

interface VolumeControlsProps {
  volume: number;
  onVolumeChange: (newVolume: number) => void;
}

const VolumeControls: React.FC<VolumeControlsProps> = ({
  volume,
  onVolumeChange,
}) => {
  // changes to the volume slider
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(event.target.value, 10);
    onVolumeChange(newVolume);
  };

  return (
    <div className='flex items-center space-x-4 mt-6'>
      <label htmlFor='volume-control' className='sr-only'>
        Volume Control
      </label>
      {/* Volume Icon */}
      <Volume2 className='w-7 h-7 text-darkMagenta dark:text-lightTeal' />
      {/* Volume Slider */}
      <input
        id='volume-control'
        type='range'
        min='0'
        max='100'
        value={volume}
        onChange={handleChange}
        className='w-full h-2 rounded-full bg-lightTeal dark:bg-darkerTeal accent-teal dark:accent-lightTeal focus:outline-none focus:ring-2 focus:ring-brightPink dark:focus:ring-lightTeal transition'
      />
    </div>
  );
};

export default VolumeControls;
