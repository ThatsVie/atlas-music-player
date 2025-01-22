import React, { useState, useEffect } from 'react';
import CoverArt from './CoverArt';
import SongTitle from './SongTitle';
import PlayControls from './PlayControls';
import VolumeControls from './VolumeControls';
import AudioPlayer from './AudioPlayer';

interface Song {
  id: string;
  title: string;
  artist: string;
  duration: number;
  cover: string; // URL
  song: string; // URL
}

interface CurrentlyPlayingProps {
  playlist: Song[]; // all songs
  currentlyPlayingId: string | null; // ID
  setCurrentlyPlayingId: React.Dispatch<React.SetStateAction<string | null>>;
}

const CurrentlyPlaying: React.FC<CurrentlyPlayingProps> = ({
  playlist,
  currentlyPlayingId,
  setCurrentlyPlayingId,
}) => {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [lyrics, setLyrics] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false); // Play/pause
  const [volume, setVolume] = useState<number>(50);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);

  useEffect(() => {
    if (!currentlyPlayingId) return;
    const fetchCurrentSong = async () => {
      try {
        const response = await fetch(`/api/v1/songs/${currentlyPlayingId}`);
        const data = await response.json();
        setCurrentSong(data);
      } catch (error) {
        console.error('Error fetching current song:', error);
      }
    };
    fetchCurrentSong();
  }, [currentlyPlayingId]);

  useEffect(() => {
    if (!currentlyPlayingId) return;
    const fetchLyrics = async () => {
      try {
        const response = await fetch(`/api/v1/lyrics/${currentlyPlayingId}`);
        if (!response.ok) throw new Error('Failed to fetch lyrics');
        const data = await response.json();
        setLyrics(data.lyrics);
      } catch (error) {
        console.error('Error fetching lyrics:', error);
        setLyrics(null);
      }
    };
    fetchLyrics();
  }, [currentlyPlayingId]);

  const handleTogglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleRewind = () => {
    const currentIndex = playlist.findIndex(
      (song) => song.id === currentlyPlayingId
    );
    if (currentIndex > 0) {
      setCurrentlyPlayingId(playlist[currentIndex - 1].id);
    }
  };

  const handleFastForward = () => {
    const currentIndex = playlist.findIndex(
      (song) => song.id === currentlyPlayingId
    );
    if (currentIndex < playlist.length - 1) {
      setCurrentlyPlayingId(playlist[currentIndex + 1].id);
    }
  };

  if (!currentSong) return <div>Loading...</div>;

  return (
    <div className='p-6 bg-brightYellow dark:bg-darkerTeal rounded-lg shadow-lg border-4 border-magenta transition-colors duration-300'>
      <CoverArt cover={currentSong.cover} lyrics={lyrics} />
      <SongTitle title={currentSong.title} artist={currentSong.artist} />
      <PlayControls
        isPlaying={isPlaying}
        onTogglePlay={handleTogglePlay}
        onRewind={handleRewind}
        onFastForward={handleFastForward}
        onShuffleToggle={() => {
          const randomIndex = Math.floor(Math.random() * playlist.length);
          setCurrentlyPlayingId(playlist[randomIndex].id);
        }}
        isShuffling={false}
        playbackSpeed={playbackSpeed}
        onChangePlaybackSpeed={() =>
          setPlaybackSpeed((prev) => (prev === 2 ? 0.5 : prev + 0.5))
        }
      />
      <VolumeControls
        volume={volume}
        onVolumeChange={(newVolume) => setVolume(newVolume)}
      />
      <AudioPlayer
        songUrl={currentSong.song}
        isPlaying={isPlaying}
        volume={volume / 100}
        playbackSpeed={playbackSpeed}
      />
    </div>
  );
};

export default CurrentlyPlaying;
