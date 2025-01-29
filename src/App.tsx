import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import MusicPlayer from './components/MusicPlayer';
import LoadingSkeleton from './components/LoadingSkeleton';
import Footer from './components/Footer';
import Instructions from './components/Instructions';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    () => window.matchMedia('(prefers-color-scheme: dark)').matches
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);

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
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='bg-gradient-to-tr from-brightYellow via-lightTeal to-magenta dark:from-black dark:via-darkerTeal dark:to-darkMagenta min-h-screen flex flex-col transition-colors duration-300'>
      {/* Dark Mode Toggle */}
      <div className='m-4 self-end'>
        <button
          onClick={toggleDarkMode}
          aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          className={`p-3 rounded-full font-bold shadow-lg hover:shadow-2xl focus:ring transition-all duration-300 flex items-center gap-2 ${
            isDarkMode
              ? 'bg-gradient-to-r from-darkMagenta via-darkerTeal to-teal text-white focus:ring-brightPink'
              : 'bg-gradient-to-r from-brightPink via-brightYellow to-lightTeal text-darkMagenta focus:ring-darkMagenta'
          }`}
        >
          {isDarkMode ? (
            <>
              <Sun className='w-6 h-6' />
              <span className='text-sm font-medium'>Switch to Light Mode</span>
            </>
          ) : (
            <>
              <Moon className='w-6 h-6' />
              <span className='text-sm font-medium'>Switch to Dark Mode</span>
            </>
          )}
        </button>
      </div>

      <main className='flex-grow flex items-center justify-center p-4' role="main">
        {isLoading ? <LoadingSkeleton /> : <MusicPlayer />}
      </main>

      <Footer />

      {/* Help Button + Instructions Modal */}
      <Instructions isDarkMode={isDarkMode} />
    </div>
  );
};

export default App;
