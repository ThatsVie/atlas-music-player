import { render } from '@testing-library/react';
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

  test('renders correctly with null lyrics', () => {
    // Arrange
    const coverImage = 'https://example.com/cover.jpg';

    // Act
    const { container } = render(
      <CoverArt cover={coverImage} lyrics={null} />
    );

    // Assert
    expect(container).toMatchSnapshot();
  });

  test('renders correctly with hover and lyrics', () => {
    // Arrange
    const coverImage = 'https://example.com/cover.jpg';
    const lyrics = 'Sample lyrics';

    // Act
    const { container } = render(
      <div>
        <CoverArt cover={coverImage} lyrics={lyrics} />
      </div>
    );

    // Assert
    expect(container).toMatchSnapshot();
  });

  test('renders correctly with hover and no lyrics', () => {
    // Arrange
    const coverImage = 'https://example.com/cover.jpg';

    // Act
    const { container } = render(
      <div>
        <CoverArt cover={coverImage} lyrics={null} />
      </div>
    );

    // Assert
    expect(container).toMatchSnapshot();
  });
});
