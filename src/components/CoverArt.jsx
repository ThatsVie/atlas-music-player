import React from 'react';
import placeholder from '../assets/placeholder.svg';

const CoverArt = () => {
  return (
    <div className="relative mb-6 aspect-square">
      <img
        src={placeholder}
        alt="Placeholder"
        className="h-full w-full rounded-md object-cover block align-middle"
      />
    </div>
  );
};

export default CoverArt;
