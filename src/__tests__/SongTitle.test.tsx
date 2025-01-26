import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import SongTitle from "@/components/SongTitle";

describe("SongTitle Component", () => {
  it("matches snapshot with both title and artist", () => {
    // Arrange
    const title = "Test Song";
    const artist = "Test Artist";

    // Act
    const { container } = render(<SongTitle title={title} artist={artist} />);

    // Assert
    expect(container).toMatchSnapshot();
  });

  it("matches snapshot with only title", () => {
    // Arrange
    const title = "Test Song";

    // Act
    const { container } = render(<SongTitle title={title} artist="" />);

    // Assert
    expect(container).toMatchSnapshot();
  });

  it("matches snapshot with only artist", () => {
    // Arrange
    const artist = "Test Artist";

    // Act
    const { container } = render(<SongTitle title="" artist={artist} />);

    // Assert
    expect(container).toMatchSnapshot();
  });

  it("matches snapshot with empty props", () => {
    // Act
    const { container } = render(<SongTitle title="" artist="" />);

    // Assert
    expect(container).toMatchSnapshot();
  });
});
