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
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(event.target.value, 10);
    onVolumeChange(newVolume);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      e.stopPropagation(); // Prevent interference with playlist navigation
    }
  };

  return (
    <div className='flex items-center space-x-4 mt-6'>
      <label htmlFor='volume-control' className='sr-only'>
        Volume Control
      </label>
      <Volume2 className='w-7 h-7 text-darkMagenta dark:text-lightTeal' />
      <input
        id='volume-control'
        type='range'
        min='0'
        max='100'
        value={volume}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className='w-full h-2 rounded-full bg-lightTeal dark:bg-darkerTeal accent-teal dark:accent-lightTeal focus:outline-none focus:ring-2 focus:ring-brightPink dark:focus:ring-lightTeal transition'
      />
    </div>
  );
};

export default VolumeControls;
