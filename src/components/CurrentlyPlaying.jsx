import React from 'react';
import CoverArt from './CoverArt';
import SongTitle from './SongTitle';
import PlayControls from './PlayControls';
import VolumeControls from './VolumeControls';

const CurrentlyPlaying = () => {
  return (
    <div className="p-6 bg-brightYellow rounded-lg shadow-lg border-4 border-magenta">
      <CoverArt />
      <SongTitle />
      <PlayControls />
      <VolumeControls />
    </div>
  );
};

export default CurrentlyPlaying;
