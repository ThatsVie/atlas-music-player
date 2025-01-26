import { render, fireEvent, screen } from '@testing-library/react';
import { describe, test, expect, vi, afterEach } from 'vitest';
import PlayListItem from '@/components/PlayListItem';

describe('PlayListItem Component', () => {
  const mockOnClick = vi.fn();
  const mockOnEnter = vi.fn();

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('renders correctly with all props', () => {
    // Arrange & Act
    const { container } = render(
      <PlayListItem
        id="unique-1"
        title="Song Title"
        artist="Artist Name"
        duration="3:45"
        isCurrent={false}
        onClick={mockOnClick}
        onEnter={mockOnEnter}
      />
    );

    // Assert
    expect(container).toMatchSnapshot();
  });

  test('applies correct styles when isCurrent is true', () => {
    // Arrange
    render(
      <PlayListItem
        id="unique-2"
        title="Current Song"
        artist="Current Artist"
        duration="4:20"
        isCurrent={true}
        onClick={mockOnClick}
        onEnter={mockOnEnter}
      />
    );

    // Act
    const listItem = screen.getByRole('option', { name: /Current Song/i });

    // Assert
    expect(listItem.classList.contains('bg-teal')).toBe(true);
    expect(listItem.classList.contains('dark:bg-lightTeal')).toBe(true);
    expect(listItem.classList.contains('text-black')).toBe(true);
  });

  test('calls onClick when clicked', () => {
    // Arrange
    render(
      <PlayListItem
        id="unique-3"
        title="Click Test"
        artist="Click Artist"
        duration="2:30"
        isCurrent={false}
        onClick={mockOnClick}
        onEnter={mockOnEnter}
      />
    );

    // Act
    const listItem = screen.getByRole('option', { name: /Click Test/i });
    fireEvent.click(listItem);

    // Assert
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  test('calls onEnter when Enter key is pressed', () => {
    // Arrange
    render(
      <PlayListItem
        id="unique-4"
        title="Song 1"
        artist="Artist 1"
        duration="3:00"
        isCurrent={false}
        onClick={mockOnClick}
        onEnter={mockOnEnter}
      />
    );

    // Act
    const listItem = screen.getByRole('option', { name: /Song 1/i });
    fireEvent.keyDown(listItem, { key: 'Enter', code: 'Enter' });

    // Assert
    expect(mockOnEnter).toHaveBeenCalledTimes(1);
  });

  test('does not call onEnter for other keys', () => {
    // Arrange
    render(
      <PlayListItem
        id="unique-5"
        title="Song 2"
        artist="Artist 2"
        duration="4:00"
        isCurrent={false}
        onClick={mockOnClick}
        onEnter={mockOnEnter}
      />
    );

    // Act
    const listItem = screen.getByRole('option', { name: /Song 2/i });
    fireEvent.keyDown(listItem, { key: 'Space', code: 'Space' });

    // Assert
    expect(mockOnEnter).not.toHaveBeenCalled();
  });
});
