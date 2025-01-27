import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { server } from '@/mocks/server';
import MusicPlayer from '@/components/MusicPlayer';
import { http, HttpResponse } from 'msw';

server.use(
  http.get('/api/v1/playlist', () => {
    return HttpResponse.json([
      { id: '1', title: 'Test Song 1', artist: 'Test Artist 1' },
      { id: '2', title: 'Test Song 2', artist: 'Test Artist 2' },
    ]);
  })
);

describe('MusicPlayer Component', () => {
  it('renders playlist from mocked API', async () => {
    render(<MusicPlayer />);

    await waitFor(() => {
      expect(screen.getByText('Test Song 1')).toBeInTheDocument();
      expect(screen.getByText('Test Artist 1')).toBeInTheDocument();
    });

    expect(screen.getByText('Test Song 2')).toBeInTheDocument();
    expect(screen.getByText('Test Artist 2')).toBeInTheDocument();
  });
});
