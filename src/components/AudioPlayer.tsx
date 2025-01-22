import React, { useEffect, useRef } from 'react';

// Props
interface AudioPlayerProps {
  songUrl: string;
  isPlaying: boolean; // Play/pause
  volume: number; // Volume level
  playbackSpeed: number;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({
  songUrl,
  isPlaying,
  volume,
  playbackSpeed,
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // when volume and speed change
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.playbackRate = playbackSpeed;
    }
  }, [volume, playbackSpeed]);

  // Play or pause audio
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch((error) => {
          console.error('Error playing audio:', error);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  // Change song
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = songUrl;
      if (isPlaying) {
        audioRef.current.play().catch((error) => {
          console.error('Error playing audio:', error);
        });
      }
    }
  }, [songUrl]);

  return <audio ref={audioRef} hidden />;
};

export default AudioPlayer;
