import React from 'react';
import PropTypes from 'prop-types';

const PlayListItem = ({ title, artist, duration, isCurrent }) => {
  return (
    <div
      className={`flex justify-between items-center p-3 rounded-md ${
        isCurrent ? 'bg-teal' : 'hover:bg-brightYellow'
      }`}
    >
      <div>
        <p
          className={`text-sm font-bold ${
            isCurrent ? 'text-white' : 'text-darkMagenta'
          }`}
        >
          {title}
        </p>
        <p
          className={`text-xs ${
            isCurrent ? 'text-citrusOrange' : 'text-gray-900'
          }`}
        >
          {artist}
        </p>
      </div>

      <p className={`text-xs ${isCurrent ? 'text-citrusOrange' : 'text-gray-900'}`}>
        {duration}
      </p>
    </div>
  );
};

PlayListItem.propTypes = {
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  isCurrent: PropTypes.bool,
};

PlayListItem.defaultProps = {
  isCurrent: false,
};

export default PlayListItem;
