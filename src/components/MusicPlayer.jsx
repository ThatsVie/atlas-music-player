import React from "react";
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";

export default function MusicPlayer() {
  return (
    <div
      className="flex flex-col md:flex-row md:space-x-4 w-full max-w-5xl mx-auto p-6 bg-brightYellow text-darkMagenta dark:bg-darkBg dark:text-lightText rounded-lg shadow-2xl transition-colors duration-300"
      aria-label="Music Player"
    >
      {/* Currently Playing Section */}
      <section
        className="md:w-1/2 bg-brightPink border-teal border-4 rounded-xl shadow-lg p-6 dark:bg-darkMagenta dark:border-citrusOrange"
        aria-labelledby="currently-playing-title"
      >
        <h2 id="currently-playing-title" className="sr-only">
          Currently Playing
        </h2>
        <CurrentlyPlaying />
      </section>

      {/* Playlist Section */}
      <section
        className="md:w-1/2 bg-teal border-brightPink border-4 rounded-xl shadow-lg p-6 dark:bg-darkTeal dark:border-lightTeal"
        aria-labelledby="playlist-title"
      >
        <h2 id="playlist-title" className="sr-only">
          Playlist
        </h2>
        <Playlist />
      </section>
    </div>
  );
}
