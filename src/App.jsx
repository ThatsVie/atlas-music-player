import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import MusicPlayer from './components/MusicPlayer';
import LoadingSkeleton from './components/LoadingSkeleton';
import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(
    () => window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  const [isLoading, setIsLoading] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    // Simulate data fetching
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='bg-brightYellow dark:bg-black min-h-screen flex flex-col transition-colors duration-300'>
      <button
        onClick={toggleDarkMode}
        className='m-4 p-3 flex items-center gap-2 self-end rounded-full bg-darkTeal text-white dark:bg-lightTeal dark:text-black hover:shadow-lg focus:ring-4 focus:ring-lightTeal dark:focus:ring-teal transition-all duration-300'
      >
        {isDarkMode ? (
          <Sun className='w-5 h-5' />
        ) : (
          <Moon className='w-5 h-5' />
        )}
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>

      <div className='flex-grow flex items-center justify-center p-4'>
        {isLoading ? <LoadingSkeleton /> : <MusicPlayer />}
      </div>

      <Footer />
    </div>
  );
}

export default App;
