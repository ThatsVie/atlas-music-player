import { render, fireEvent, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import CoverArt from '@/components/CoverArt';

describe('CoverArt Component', () => {
  test('renders correctly with only cover image', () => {
    // Arrange
    const coverImage = 'https://example.com/cover.jpg';

    // Act
    const { container } = render(<CoverArt cover={coverImage} />);

    // Assert
    expect(container).toMatchSnapshot();
  });

  test('renders correctly with cover image and lyrics', () => {
    // Arrange
    const coverImage = 'https://example.com/cover.jpg';
    const lyrics = 'Sample lyrics';

    // Act
    const { container } = render(
      <CoverArt cover={coverImage} lyrics={lyrics} />
    );

    // Assert
    expect(container).toMatchSnapshot();
  });

  test('resets lyrics scroll position when lyrics change', async () => {
    // Arrange
    const coverImage = 'https://example.com/cover.jpg';
    const { rerender } = render(<CoverArt cover={coverImage} lyrics="Initial lyrics" />);

    // Act
    const coverContainer = screen.getByRole('img', { name: /album cover/i }).parentElement!;
    fireEvent.mouseEnter(coverContainer);

    const lyricsDiv = await screen.findByText(/Initial lyrics/i);
    const lyricsContainer = lyricsDiv.parentElement as HTMLDivElement;

    lyricsContainer.scrollTop = 50;

    // Act
    rerender(<CoverArt cover={coverImage} lyrics="Updated lyrics" />);

    // Assert
    expect(lyricsContainer.scrollTop).toBe(0);
  });

  test('shows lyrics overlay on hover when lyrics exist', async () => {
    // Arrange
    const coverImage = 'https://example.com/cover.jpg';
    const lyrics = 'Sample lyrics';

    // Act
    render(<CoverArt cover={coverImage} lyrics={lyrics} />);

    const coverContainer = screen.getByRole('img', { name: /album cover/i }).parentElement!;
    fireEvent.mouseEnter(coverContainer);

    // Assert
    expect(await screen.findByText(/Sample lyrics/i)).toBeInTheDocument();
  });

  test('hides lyrics overlay when mouse leaves', async () => {
    // Arrange
    const coverImage = 'https://example.com/cover.jpg';
    const lyrics = 'Sample lyrics';

    // Act
    render(<CoverArt cover={coverImage} lyrics={lyrics} />);

    const coverContainer = screen.getByRole('img', { name: /album cover/i }).parentElement!;
    fireEvent.mouseEnter(coverContainer);

    expect(await screen.findByText(/Sample lyrics/i)).toBeInTheDocument();

    // Act
    fireEvent.mouseLeave(coverContainer);

    // Assert
    expect(screen.queryByText(/Sample lyrics/i)).not.toBeInTheDocument();
  });

  test('does not show lyrics overlay on hover when no lyrics are provided', async () => {
    // Arrange
    const coverImage = 'https://example.com/cover.jpg';

    // Act
    render(<CoverArt cover={coverImage} lyrics={null} />);

    const coverContainer = screen.getByRole('img', { name: /album cover/i }).parentElement!;
    fireEvent.mouseEnter(coverContainer);

    // Assert
    expect(screen.queryByText(/Sample lyrics/i)).not.toBeInTheDocument();
  });
});
