import React, { useState } from 'react';
import { HelpCircle } from 'lucide-react';

interface InstructionsProps {
  isDarkMode: boolean;
}

const Instructions: React.FC<InstructionsProps> = ({ isDarkMode }) => {
  const [showInstructions, setShowInstructions] = useState(false);

  return (
    <div className='hidden lg:block fixed bottom-4 right-4'>
      {/* Help Button */}
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

      {/* Instructions Modal */}
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
                  <strong>Tab:</strong> Focus through controls and playlist.
                </li>
                <li>
                  <strong>Enter:</strong> Play or toggle focused item.
                </li>
                <li>
                  <strong>Arrows:</strong> Adjust volume with Left/Right.
                </li>
              </ul>
            </section>

            <section className='mb-6'>
              <h4 className='font-bold text-lg mb-2'>Mouse Navigation:</h4>
              <ul className='text-base font-bold space-y-3 list-none'>
                <li>
                  <strong>Click:</strong> Interact with buttons or playlist items.
                </li>
                <li>
                  <strong>Hover:</strong> Show lyrics by hovering over album art.
                </li>
              </ul>
            </section>

            <section className='mb-6'>
              <h4 className='font-bold text-lg mb-2'>Additional Features:</h4>
              <ul className='text-base font-bold space-y-3 list-none'>
                <li>
                  <strong>Volume & Speed:</strong> Adjust via slider or speed button.
                </li>
                <li>
                  <strong>Dark Mode:</strong> Toggle using the button at the top.
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
  );
};

export default Instructions;
