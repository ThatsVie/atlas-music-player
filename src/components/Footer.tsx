import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className='text-center p-6 bg-lightTeal dark:bg-darkMagenta text-black dark:text-white font-semibold'>
      &copy; {new Date().getFullYear()} Atlas School -
      <a
        href='https://github.com/ThatsVie/atlas-music-player'
        className='text-darkMagenta font-bold dark:text-lightTeal hover:underline focus:outline-none focus:ring-2 focus:ring-teal dark:focus:ring-lightTeal px-2'
      >
        GitHub Repo
      </a>
    </footer>
  );
};

export default Footer;
