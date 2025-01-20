import React from 'react';
import PlayListItem from './PlayListItem';

const Playlist = () => {
  const songs = [
    { title: 'Painted in Blue', artist: 'Soul Canvas', duration: '5:55' },
    { title: 'Tidal Drift', artist: 'Echoes of the Sea', duration: '8:02' },
    { title: 'Fading Shadows', artist: 'The Emberlight', duration: '3:01' },
    { title: 'Cosmic Drift', artist: 'Solar Flare', duration: '5:01' },
    { title: 'Urban Serenade', artist: 'Midnight Groove', duration: '4:54' },
    { title: 'Whispers in the Wind', artist: 'Rust & Ruin', duration: '6:13' },
    { title: 'Electric Fever', artist: 'Neon Jungle', duration: '8:41' },
    { title: 'Edge of the Abyss', artist: 'Steel Horizon', duration: '2:27' },
    { title: 'Golden Haze', artist: 'Velvet Waves', duration: '3:15' },
    { title: 'Shatter the Silence', artist: 'Thunderclap Echo', duration: '8:22' },
  ];

  return (
    <div className="p-6 bg-lightTeal rounded-lg shadow-lg border-4 border-brightPink h-full flex flex-col justify-between">
      <h2 className="text-lg font-bold text-darkMagenta mb-4">Playlist</h2>
      <div className="space-y-3">
        {songs.map((song, index) => (
          <PlayListItem
            key={index}
            title={song.title}
            artist={song.artist}
            duration={song.duration}
          />
        ))}
      </div>
    </div>
  );
};

export default Playlist;
