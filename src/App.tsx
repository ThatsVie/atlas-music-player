import React, { useState, useEffect } from 'react';
import { Sun, Moon, HelpCircle } from 'lucide-react';
import MusicPlayer from './components/MusicPlayer';
import LoadingSkeleton from './components/LoadingSkeleton';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    () => window.matchMedia('(prefers-color-scheme: dark)').matches
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showInstructions, setShowInstructions] = useState<boolean>(false);

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
          aria-label={
            isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'
          }
          className={`p-3 rounded-full font-bold shadow-lg hover:shadow-2xl focus:ring transition-all duration-300 flex items-center gap-2 ${
            isDarkMode
              ? 'bg-gradient-to-r from-darkMagenta via-darkerTeal to-teal text-white focus:ring-brightPink'
              : 'bg-gradient-to-r from-brightPink via-brightYellow to-lightTeal text-darkMagenta focus:ring-darkMagenta'
          }`}
        >
          {isDarkMode ? (
            <>
              <Sun
                className={`w-6 h-6 transition-transform duration-300 ${
                  isDarkMode
                    ? 'text-white hover:text-darkMagenta'
                    : 'text-darkMagenta hover:text-teal'
                }`}
              />
              <span className='text-sm font-medium'>Switch to Light Mode</span>
            </>
          ) : (
            <>
              <Moon
                className={`w-6 h-6 transition-transform duration-300 ${
                  isDarkMode
                    ? 'text-white hover:text-darkMagenta'
                    : 'text-darkMagenta hover:text-teal'
                }`}
              />
              <span className='text-sm font-medium'>Switch to Dark Mode</span>
            </>
          )}
        </button>
      </div>

      <div className='flex-grow flex items-center justify-center p-4'>
        {isLoading ? <LoadingSkeleton /> : <MusicPlayer />}
      </div>

      <Footer />

      {/* Help Button */}
      <div className='hidden lg:block fixed bottom-4 right-4'>
        <button
          className={`p-3 rounded-full shadow-lg hover:shadow-2xl focus:ring transition-all duration-300 ${
            isDarkMode
              ? 'bg-gradient-to-r from-darkMagenta via-darkerTeal to-teal text-white focus:ring-brightPink'
              : 'bg-gradient-to-r from-brightPink via-brightYellow to-lightTeal text-darkMagenta focus:ring-darkMagenta'
          }`}
          onClick={() => setShowInstructions(true)}
          aria-label='Show instructions'
        >
          <HelpCircle
            className={`w-7 h-7 transition-transform duration-300 ${
              isDarkMode
                ? 'text-white hover:text-darkMagenta'
                : 'text-darkMagenta hover:text-teal'
            }`}
          />
        </button>
        {showInstructions && (
          <div
            className='fixed inset-0 flex justify-end items-end p-6'
            onClick={() => setShowInstructions(false)} // Close when clicking outside
          >
            <div
              className={`relative p-6 rounded-lg shadow-lg w-[28rem] max-h-96 overflow-y-auto transition-transform duration-300 transform scale-95 ${
                isDarkMode
                  ? 'bg-gradient-to-r from-darkMagenta via-darkerTeal to-teal text-white'
                  : 'bg-gradient-to-r from-brightPink via-brightYellow to-lightTeal text-black'
              }`}
              role='dialog'
              aria-labelledby='instructions-title'
              aria-live='polite'
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              <h3
                id='instructions-title'
                className='font-extrabold text-xl flex items-center gap-2 mb-4'
              >
                Instructions
              </h3>

              <section className='mb-6'>
                <h4 className='font-bold text-lg mb-2'>Keyboard Navigation:</h4>
                <ul className='text-base font-bold space-y-3 list-none'>
                  <li>
                    <span className='inline-flex items-center gap-2'>
                      <strong className='text-darkerTeal dark:text-brightYellow'>
                        Tab:
                      </strong>
                      Focus through controls and playlist.
                    </span>
                  </li>
                  <li>
                    <span className='inline-flex items-center gap-2'>
                      <strong className='text-darkerTeal dark:text-brightYellow'>
                        Enter:
                      </strong>
                      Play or toggle focused item.
                    </span>
                  </li>
                  <li>
                    <span className='inline-flex items-center gap-2'>
                      <strong className='text-darkerTeal dark:text-brightYellow'>
                        Arrows:
                      </strong>
                      Adjust volume with Left/Right.
                    </span>
                  </li>
                </ul>
              </section>

              <section className='mb-6'>
                <h4 className='font-bold text-lg mb-2'>Mouse Navigation:</h4>
                <ul className='text-base font-bold space-y-3 list-none'>
                  <li>
                    <span className='inline-flex items-center gap-2'>
                      <strong className='text-darkerTeal dark:text-brightYellow'>
                        Click:
                      </strong>
                      Interact with buttons or playlist items.
                    </span>
                  </li>
                  <li>
                    <span className='inline-flex items-center gap-2'>
                      <strong className='text-darkerTeal dark:text-brightYellow'>
                        Hover:
                      </strong>
                      Show lyrics by hovering over album art.
                    </span>
                  </li>
                </ul>
              </section>

              <section className='mb-6'>
                <h4 className='font-bold text-lg mb-2'>Additional Features:</h4>
                <ul className='text-base font-bold space-y-3 list-none'>
                  <li>
                    <span className='inline-flex items-center gap-2'>
                      <strong className='text-darkerTeal dark:text-brightYellow'>
                        Volume & Speed:
                      </strong>
                      Adjust via slider or speed button.
                    </span>
                  </li>
                  <li>
                    <span className='inline-flex items-center gap-2'>
                      <strong className='text-darkerTeal dark:text-brightYellow'>
                        Dark Mode:
                      </strong>
                      Toggle using the button at the top.
                    </span>
                  </li>
                </ul>
              </section>

              <button
                className={`mt-6 p-3 rounded-lg hover:shadow-md transition-all duration-300 border-2 font-bold ${
                  isDarkMode
                    ? 'bg-teal text-white hover:bg-darkMagenta hover:text-teal border-brightPink'
                    : 'bg-teal text-black hover:bg-darkMagenta hover:text-brightYellow border-darkMagenta'
                }`}
                onClick={() => setShowInstructions(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
