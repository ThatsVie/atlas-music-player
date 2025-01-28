import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { beforeAll, test, expect, vi } from 'vitest';
import { http, HttpResponse } from 'msw';
import { server } from '@/mocks/server';
import MusicPlayer from '../components/MusicPlayer';

vi.spyOn(console, 'error').mockImplementation(() => {});

beforeAll(() => {
  Object.defineProperty(global.HTMLMediaElement.prototype, 'play', {
    configurable: true,
    writable: true,
    value: vi.fn(() => Promise.resolve()),
  });

  Object.defineProperty(global.HTMLMediaElement.prototype, 'pause', {
    configurable: true,
    writable: true,
    value: vi.fn(),
  });

  Object.defineProperty(global.HTMLMediaElement.prototype, 'volume', {
    configurable: true,
    get() {
      return this._volume || 1;
    },
    set(value) {
      this._volume = value;
    },
  });

  Object.defineProperty(global.HTMLMediaElement.prototype, 'playbackRate', {
    configurable: true,
    get() {
      return this._playbackRate || 1;
    },
    set(value) {
      this._playbackRate = value;
    },
  });
});

test('sets the first song as default when the API loads', async () => {
  // Arrange
  render(<MusicPlayer />);

  // Act & Assert
  await waitFor(() => {
    expect(screen.getByText(/mock song 1/i)).toBeInTheDocument();
  });

  await waitFor(() => {
    expect(screen.getByText(/mock song 1/i)).toBeInTheDocument();
  });
});


test('handles API error gracefully', async () => {
  // Arrange
  const consoleErrorMock = vi.spyOn(console, 'error').mockImplementation(() => {});

  server.use(
    http.get('/api/v1/playlist', () => HttpResponse.error())
  );

  // Act
  render(<MusicPlayer />);

  // Assert
  await waitFor(() => {
    expect(console.error).toHaveBeenCalled();
  });

  await waitFor(() => {
    expect(console.error).toHaveBeenCalledWith(
      expect.stringContaining('Error fetching playlist'),
      expect.anything()
    );
  });
  
  // Cleanup
  consoleErrorMock.mockRestore();
});

test('toggles play/pause correctly', async () => {
  // Arrange
  render(<MusicPlayer />);
  const playButton = await screen.findByLabelText(/start playback/i);

  // Act
  fireEvent.click(playButton);

  // Assert
  await waitFor(() => {
    expect(screen.getByLabelText(/pause playback/i)).toBeInTheDocument();
  });

  // Act
  fireEvent.click(playButton);

  // Assert
  await waitFor(() => {
    expect(screen.getByLabelText(/start playback/i)).toBeInTheDocument();
  });
});

test('clicking Next moves to the next song', async () => {
  // Arrange
  render(<MusicPlayer />);

  // Act
  const fastForwardButton = await screen.findByLabelText(/fast forward to the next song/i);
  fireEvent.click(fastForwardButton);

  // Assert
  await waitFor(() => {
    expect(screen.getByText(/mock song 2/i)).toBeInTheDocument();
  });
});

test('clicking Previous moves to the previous song', async () => {
  // Arrange
  render(<MusicPlayer />);

  // Act
  const rewindButton = await screen.findByLabelText(/rewind to the previous song/i);
  fireEvent.click(rewindButton);

  // Assert
  await waitFor(() => {
    expect(screen.getByText(/mock song 1/i)).toBeInTheDocument();
  });
});

test('clicking a song in the playlist updates the currently playing song', async () => {
  // Arrange
  render(<MusicPlayer />);

  // Act
  const songTwo = await screen.findByText(/mock song 2/i);
  fireEvent.click(songTwo);

  // Assert
  await waitFor(() => {
    expect(screen.getByText(/mock song 2/i)).toBeInTheDocument();
  });
});

test('speed button toggles between settings correctly', async () => {
  // Arrange
  render(<MusicPlayer />);
  const speedButton = await screen.findByLabelText(/playback speed is currently 1x/i);

  // Act
  fireEvent.click(speedButton);

  // Assert
  await waitFor(() => {
    expect(screen.getByLabelText(/playback speed is currently 1.5x/i)).toBeInTheDocument();
  });

  // Act
  fireEvent.click(speedButton);

  // Assert
  await waitFor(() => {
    expect(screen.getByLabelText(/playback speed is currently 2x/i)).toBeInTheDocument();
  });
});

test('Play button toggles playback on Enter key press', async () => {
  // Arrange
  render(<MusicPlayer />);
  const playButton = await screen.findByLabelText(/start playback/i);

  // Act
  fireEvent.keyDown(playButton, { key: 'Enter', code: 'Enter', charCode: 13 });

  // Assert
  await waitFor(() => {
    expect(screen.getByLabelText(/pause playback/i)).toBeInTheDocument();
  });

  // Act
  fireEvent.keyDown(playButton, { key: 'Enter', code: 'Enter', charCode: 13 });

  // Assert
  await waitFor(() => {
    expect(screen.getByLabelText(/start playback/i)).toBeInTheDocument();
  });
});

test('Rewind button works with Space key press', async () => {
  // Arrange
  render(<MusicPlayer />);
  const rewindButton = await screen.findByLabelText(/rewind to the previous song/i);

  // Act
  fireEvent.keyDown(rewindButton, { key: ' ', code: 'Space', charCode: 32 });

  // Assert
  await waitFor(() => {
    expect(screen.getByText(/mock song 1/i)).toBeInTheDocument();
  });
});

test('Fast forward button works with Enter key press', async () => {
  // Arrange
  render(<MusicPlayer />);
  const fastForwardButton = await screen.findByLabelText(/fast forward to the next song/i);

  // Act
  fireEvent.keyDown(fastForwardButton, { key: 'Enter', code: 'Enter', charCode: 13 });

  // Assert
  await waitFor(() => {
    expect(screen.getByText(/mock song 2/i)).toBeInTheDocument();
  });
});

test('sets currentlyPlayingId to null when playlist is empty', async () => {
  // Arrange
  server.use(
    http.get('/api/v1/playlist', () => HttpResponse.json([]))
  );

  // Act
  render(<MusicPlayer />);

  // Assert
  await waitFor(() => {
    expect(screen.queryByText(/mock song/i)).not.toBeInTheDocument();
  });
});
