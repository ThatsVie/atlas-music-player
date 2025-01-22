import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-center p-6 bg-lightTeal dark:bg-darkMagenta text-black dark:text-white font-semibold">
      <p className="mb-2">
        🎵 <span className="font-bold">Vietify</span>🎶
      </p>
      <p>
        &copy; {new Date().getFullYear()} Atlas School - Made with ❤️ and 🎧 by Vie -
        <a
          href="https://github.com/ThatsVie/atlas-music-player"
          className="text-darkMagenta font-bold dark:text-lightTeal hover:underline focus:outline-none focus:ring-2 focus:ring-teal dark:focus:ring-lightTeal px-2"
        >
          GitHub Repo
        </a>
      </p>
    </footer>
  );
};

export default Footer;
