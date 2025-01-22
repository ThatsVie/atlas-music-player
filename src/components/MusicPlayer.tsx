import React, { useState, useEffect } from 'react';
import CurrentlyPlaying from './CurrentlyPlaying';
import Playlist from './Playlist';

interface Song {
  id: string;
  title: string;
  artist: string;
  duration: number;
  cover: string; // URL
  song: string; // URL
}

const MusicPlayer: React.FC = () => {
  const [playlist, setPlaylist] = useState<Song[]>([]);
  const [currentlyPlayingId, setCurrentlyPlayingId] = useState<string | null>(
    null
  );

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const response = await fetch('/api/v1/playlist');
        const data: Song[] = await response.json();
        setPlaylist(data);
        setCurrentlyPlayingId(data[0]?.id || null); // first song as default
      } catch (error) {
        console.error('Error fetching playlist:', error);
      }
    };
    fetchPlaylist();
  }, []);

  if (playlist.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className='flex flex-col md:flex-row md:space-x-4 md:space-y-0 space-y-4 w-full max-w-5xl mx-auto p-6 bg-brightYellow dark:bg-black text-darkMagenta dark:text-white rounded-lg shadow-2xl transition-all duration-300'>
      <section className='md:w-1/2 bg-brightPink border-teal border-4 rounded-xl shadow-lg p-6 dark:bg-darkMagenta dark:border-white'>
        <CurrentlyPlaying
          playlist={playlist}
          currentlyPlayingId={currentlyPlayingId}
          setCurrentlyPlayingId={setCurrentlyPlayingId}
        />
      </section>
      <section className='md:w-1/2 bg-teal border-brightPink border-4 rounded-xl shadow-lg p-6 dark:bg-darkerTeal dark:border-white'>
        <Playlist
          playlist={playlist}
          currentlyPlayingId={currentlyPlayingId}
          setCurrentlyPlayingId={setCurrentlyPlayingId}
        />
      </section>
    </div>
  );
};

export default MusicPlayer;
