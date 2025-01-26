import React, { useState, useEffect, useRef } from 'react';

interface CoverArtProps {
  cover: string;
  lyrics?: string | null;
}

const CoverArt: React.FC<CoverArtProps> = ({ cover, lyrics }) => {
  const [isHovered, setIsHovered] = useState(false);
  const lyricsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lyricsRef.current) {
      console.log('Resetting scroll position for lyrics container.');
      lyricsRef.current.scrollTop = 0;
      console.log(
        'Lyrics container scroll position after reset:',
        lyricsRef.current.scrollTop
      );
    }
  }, [lyrics]);

  return (
    <div
      className='relative mb-6 aspect-square'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={cover}
        alt='Album cover'
        className='h-full w-full rounded-md object-cover block align-middle'
      />

      {isHovered && lyrics && (
        <div
          ref={lyricsRef}
          className='absolute inset-0 bg-black bg-opacity-70 text-white p-4 rounded-md flex flex-col justify-start overflow-auto z-10'
          style={{
            maxHeight: '100%',
            boxSizing: 'border-box',
          }}
        >
          <p className='text-sm leading-6 whitespace-pre-line p-0 m-0 box-border'>
            {lyrics}
          </p>
        </div>
      )}
    </div>
  );
};

export default CoverArt;
