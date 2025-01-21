import React from 'react';
import CurrentlyPlaying from './CurrentlyPlaying';
import Playlist from './Playlist';

export default function MusicPlayer() {
  return (
    <div className='flex flex-col md:flex-row md:space-x-4 md:space-y-0 space-y-4 w-full max-w-5xl mx-auto p-6 bg-brightYellow dark:bg-black text-darkMagenta dark:text-white rounded-lg shadow-2xl transition-all duration-300'>
      <section className='md:w-1/2 bg-brightPink border-teal border-4 rounded-xl shadow-lg p-6 dark:bg-darkMagenta dark:border-white'>
        <CurrentlyPlaying />
      </section>

      <section className='md:w-1/2 bg-teal border-brightPink border-4 rounded-xl shadow-lg p-6 dark:bg-darkerTeal dark:border-white'>
        <Playlist />
      </section>
    </div>
  );
}
