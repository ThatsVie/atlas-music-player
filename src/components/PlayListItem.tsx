import React from 'react';

interface PlayListItemProps {
  title: string;
  artist: string;
  duration: string;
  isCurrent: boolean;
  onClick: () => void;
}

const PlayListItem: React.FC<PlayListItemProps> = ({
  title,
  artist,
  duration,
  isCurrent,
  onClick,
}) => {
  return (
    <div
      className={`flex justify-between items-center p-2 rounded-md cursor-pointer ${
        isCurrent
          ? 'bg-teal dark:bg-lightTeal text-black dark:text-black'
          : 'hover:bg-brightYellow dark:hover:bg-darkMagenta transition-colors'
      }`}
      onClick={onClick}
    >
      <div>
        <p
          className={`text-sm font-bold ${
            isCurrent
              ? 'text-black dark:text-black'
              : 'text-darkMagenta dark:text-lightTeal'
          }`}
        >
          {title}
        </p>
        <p
          className={`text-xs ${
            isCurrent
              ? 'text-black dark:text-black'
              : 'text-gray-700 dark:text-lightTeal'
          }`}
        >
          {artist}
        </p>
      </div>
      <p
        className={`text-xs ${
          isCurrent
            ? 'text-black dark:text-black'
            : 'text-gray-700 dark:text-lightTeal'
        }`}
      >
        {duration}
      </p>
    </div>
  );
};

export default PlayListItem;
