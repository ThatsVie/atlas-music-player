import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, test, expect, vi, beforeAll } from 'vitest';
import App from '@/App';

beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
      matches: query === '(prefers-color-scheme: dark)',
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
    })),
  });
});

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />);
    expect(screen.getByRole('button', { name: /switch to (dark|light) mode/i })).toBeInTheDocument();
  });

  test('toggles dark mode when button is clicked', async () => {
    render(<App />);

    const toggleButton = screen.getByRole('button', { name: /switch to (dark|light) mode/i });
    const initialLabel = toggleButton.getAttribute('aria-label');

    fireEvent.click(toggleButton);

    await waitFor(() => {
      const updatedButton = screen.getByRole('button', { name: /switch to (dark|light) mode/i });
      expect(updatedButton.getAttribute('aria-label')).not.toBe(initialLabel);
    });
  });

  test('shows help instructions when clicking "Show instructions" button', async () => {
    render(<App />);
    const helpButton = screen.getByRole('button', { name: /show instructions/i });

    fireEvent.click(helpButton);
    await waitFor(() => {
      expect(screen.getByRole('dialog', { name: 'Instructions' })).toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole('button', { name: /close/i }));
    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });
});
