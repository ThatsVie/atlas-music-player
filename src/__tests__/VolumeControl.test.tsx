import { render, fireEvent, screen } from '@testing-library/react';
import { describe, test, expect, vi, afterEach } from 'vitest';
import VolumeControls from '@/components/VolumeControls';

describe('VolumeControls Component', () => {
  const mockOnVolumeChange = vi.fn();

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('renders correctly with initial volume', () => {
    // Arrange & Act
    const { container } = render(
      <VolumeControls volume={50} onVolumeChange={mockOnVolumeChange} />
    );

    // Assert
    expect(container).toMatchSnapshot();
  });

  test('displays correct initial volume value', () => {
    // Arrange
    render(<VolumeControls volume={75} onVolumeChange={mockOnVolumeChange} />);

    // Act
    const inputElement = screen.getByLabelText('Volume Control');

    // Assert
    expect(inputElement.getAttribute('value')).toBe('75');
  });

  test('calls onVolumeChange with the correct value when volume changes', () => {
    // Arrange
    render(<VolumeControls volume={30} onVolumeChange={mockOnVolumeChange} />);

    // Act
    const inputElement = screen.getByLabelText('Volume Control');
    fireEvent.change(inputElement, { target: { value: '60' } });

    // Assert
    expect(mockOnVolumeChange).toHaveBeenCalledTimes(1);
    expect(mockOnVolumeChange).toHaveBeenCalledWith(60);
  });

  test('handles keyboard events (ArrowLeft and ArrowRight) without propagating', () => {
    // Arrange
    const stopPropagationMock = vi.fn();
    render(<VolumeControls volume={40} onVolumeChange={mockOnVolumeChange} />);

    const inputElement = screen.getByLabelText('Volume Control');
    const event = new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true });
    Object.defineProperty(event, 'stopPropagation', { value: stopPropagationMock });

    // Act
    inputElement.dispatchEvent(event);

    // Assert
    expect(stopPropagationMock).toHaveBeenCalledTimes(1);
  });
});
