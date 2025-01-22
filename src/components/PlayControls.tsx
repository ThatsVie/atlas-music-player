import React from 'react';
import { Rewind, Play, Pause, FastForward, Shuffle } from 'lucide-react';

interface PlayControlsProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
  onRewind: () => void;
  onFastForward: () => void;
  onShuffleToggle: () => void;
  isShuffling: boolean;
  playbackSpeed: number;
  onChangePlaybackSpeed: () => void;
}

const PlayControls: React.FC<PlayControlsProps> = ({
  isPlaying,
  onTogglePlay,
  onRewind,
  onFastForward,
  onShuffleToggle,
  isShuffling,
  playbackSpeed,
  onChangePlaybackSpeed,
}) => {
  return (
    <div className='flex items-center justify-between space-x-4 mt-4'>
      {/* Playback Speed Button */}
      <button
        className='text-darkMagenta dark:text-lightTeal font-bold px-3 py-2 rounded-md hover:bg-teal dark:hover:bg-brightPink hover:scale-105 focus:outline-none focus:ring focus:ring-magenta dark:focus:ring-lightTeal transition-transform'
        aria-label='Playback Speed'
        onClick={onChangePlaybackSpeed}
      >
        {`${playbackSpeed}x`}
      </button>

      {/* Rewind Button */}
      <button
        className='text-darkMagenta dark:text-lightTeal hover:text-teal dark:hover:text-brightPink focus:outline-none focus:ring focus:ring-magenta dark:focus:ring-lightTeal transition-transform hover:scale-105'
        aria-label='Rewind'
        onClick={onRewind}
      >
        <Rewind className='w-6 h-6' />
      </button>

      {/* Play/Pause Button */}
      <button
        className='bg-gradient-to-r from-magenta to-brightPink text-lightTeal dark:text-darkerTeal border-4 border-darkMagenta w-14 h-14 rounded-lg shadow-lg hover:shadow-xl active:shadow-inner flex items-center justify-center transition-transform duration-200 hover:scale-110 hover:rotate-6'
        aria-label={isPlaying ? 'Pause' : 'Play'}
        onClick={onTogglePlay}
      >
        {isPlaying ? (
          <Pause className='w-8 h-8' />
        ) : (
          <Play className='w-8 h-8' />
        )}
      </button>

      {/* Fast Forward Button */}
      <button
        className='text-darkMagenta dark:text-lightTeal hover:text-teal dark:hover:text-brightPink focus:outline-none focus:ring focus:ring-magenta dark:focus:ring-lightTeal transition-transform hover:scale-105'
        aria-label='Fast Forward'
        onClick={onFastForward}
      >
        <FastForward className='w-6 h-6' />
      </button>

      {/* Shuffle Button */}
      <button
        className={`text-darkMagenta dark:text-lightTeal hover:text-teal dark:hover:text-brightPink focus:outline-none focus:ring focus:ring-magenta dark:focus:ring-lightTeal transition-transform hover:scale-105 ${
          isShuffling ? 'text-teal dark:text-brightPink' : ''
        }`}
        aria-label='Shuffle'
        onClick={onShuffleToggle}
      >
        <Shuffle className='w-6 h-6' />
      </button>
    </div>
  );
};

export default PlayControls;
