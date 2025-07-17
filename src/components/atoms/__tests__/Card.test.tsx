import { render, screen, fireEvent } from "@testing-library/react";
import Card from "../Card";

describe("Card", () => {
  it("renders with children content", () => {
    render(<Card>Product Card Content</Card>);
    expect(screen.getByText("Product Card Content")).toBeInTheDocument();
  });

  it("renders with complex nested content", () => {
    render(
      <Card>
        <h3>Product Title</h3>
        <p>Product description</p>
        <span>Price: $99.99</span>
      </Card>
    );

    expect(screen.getByText("Product Title")).toBeInTheDocument();
    expect(screen.getByText("Product description")).toBeInTheDocument();
    expect(screen.getByText("Price: $99.99")).toBeInTheDocument();
  });

  it("renders with custom className", () => {
    render(<Card className="custom-card">Card Content</Card>);
    const card = screen.getByText("Card Content").closest("div");
    expect(card).toHaveClass("custom-card");
  });

  it("renders with custom data attributes", () => {
    render(
      <Card data-testid="product-card" data-category="electronics">
        Electronics Product
      </Card>
    );

    const card = screen.getByText("Electronics Product").closest("div");
    expect(card).toHaveAttribute("data-testid", "product-card");
    expect(card).toHaveAttribute("data-category", "electronics");
  });

  it("renders with click handler", () => {
    const handleClick = jest.fn();
    render(<Card onClick={handleClick}>Clickable Card</Card>);

    const card = screen.getByText("Clickable Card").closest("div");
    fireEvent.click(card!);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
