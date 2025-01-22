import React from 'react';

interface SongTitleProps {
  title: string;
  artist: string;
}

const SongTitle: React.FC<SongTitleProps> = ({ title, artist }) => (
  <div>
    <h2 className='mb-2 text-2xl leading-8 font-bold'>{title}</h2>
    <p className='mb-4'>{artist}</p>
  </div>
);

export default SongTitle;
