import React from 'react';
import RetroPug from '../assets/RetroPug.png';

const CoverArt = () => {
  return (
    <div className='relative mb-6 aspect-square'>
      <img
        src={RetroPug}
        alt='A vibrant 90s-inspired pug wearing a colorful jacket, sunglasses, and a cap with a geometric-patterned background.'
        className='h-full w-full rounded-md object-cover block align-middle'
      />
    </div>
  );
};

export default CoverArt;
