import React from 'react';
import PropTypes from 'prop-types';

const PlayListItem = ({ title, artist, duration, isCurrent }) => {
  return (
    <div
      className={`flex justify-between items-center p-3 rounded-md ${
        isCurrent
          ? 'bg-teal dark:bg-lightTeal text-white dark:text-darkMagenta'
          : 'hover:bg-brightYellow dark:hover:bg-darkMagenta transition-colors'
      }`}
    >
      <div>
        <p
          className={`text-sm font-bold ${
            isCurrent
              ? 'text-white dark:text-darkMagenta'
              : 'text-darkMagenta dark:text-white'
          }`}
        >
          {title}
        </p>
        <p
          className={`text-xs ${
            isCurrent
              ? 'text-gray-300 dark:text-darkerTeal'
              : 'text-gray-700 dark:text-lightTeal'
          }`}
        >
          {artist}
        </p>
      </div>
      <p
        className={`text-xs ${
          isCurrent
            ? 'text-gray-300 dark:text-darkerTeal'
            : 'text-gray-700 dark:text-lightTeal'
        }`}
      >
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
