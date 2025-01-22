import React from 'react';
import PlayListItem from './PlayListItem';

interface Song {
  id: string;
  title: string;
  artist: string;
  duration: number;
  cover: string;
  song: string;
}

interface PlaylistProps {
  playlist: Song[];
  currentlyPlayingId: string | null;
  setCurrentlyPlayingId: (id: string) => void;
}

const Playlist: React.FC<PlaylistProps> = ({
  playlist,
  currentlyPlayingId,
  setCurrentlyPlayingId,
}) => {
  return (
    <div className='p-6 bg-lightTeal dark:bg-darkerTeal rounded-lg shadow-lg border-4 border-brightPink dark:border-lightTeal h-full flex flex-col justify-between transition-colors'>
      <h2 className='text-lg font-bold text-darkMagenta dark:text-lightTeal mb-4'>
        Playlist
      </h2>
      <div className='space-y-3'>
        {playlist.map((song) => (
          <PlayListItem
            key={song.id}
            title={song.title}
            artist={song.artist}
            duration={formatDuration(song.duration)}
            isCurrent={currentlyPlayingId === song.id}
            onClick={() => setCurrentlyPlayingId(song.id)}
          />
        ))}
      </div>
    </div>
  );
};

// format duration from seconds to minutes
const formatDuration = (duration: number): string => {
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

export default Playlist;
