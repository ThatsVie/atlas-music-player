import React from 'react';

interface PlayListItemProps {
  id: string;
  title: string;
  artist: string;
  duration: string;
  isCurrent: boolean;
  onClick: () => void;
  onEnter: () => void;
}

const PlayListItem: React.FC<PlayListItemProps> = ({
  id,
  title,
  artist,
  duration,
  isCurrent,
  onClick,
  onEnter,
}) => {
  return (
    <li
      id={id}
      className={`flex justify-between items-center p-2 rounded-md cursor-pointer ${
        isCurrent
          ? 'bg-teal dark:bg-lightTeal text-black dark:text-black'
          : 'hover:bg-brightYellow dark:hover:bg-darkMagenta transition-colors'
      }`}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          onEnter();
        }
      }}
      tabIndex={0}
      role='option'
      aria-selected={isCurrent} 
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
    </li>
  );
};

export default PlayListItem;
