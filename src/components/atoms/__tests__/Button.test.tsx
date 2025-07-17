import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../Button";

describe("Button", () => {
  it("renders with default text", () => {
    render(<Button>Click me</Button>);
    expect(
      screen.getByRole("button", { name: "Click me" })
    ).toBeInTheDocument();
  });

  it("renders with empty content", () => {
    render(<Button></Button>);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("");
  });

  it("renders with complex content", () => {
    render(
      <Button>
        <span>Icon</span> Save
      </Button>
    );
    expect(
      screen.getByRole("button", { name: "Icon Save" })
    ).toBeInTheDocument();
  });

  it("handles click events", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    const button = screen.getByRole("button", { name: "Click me" });
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("handles multiple click events", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    const button = screen.getByRole("button", { name: "Click me" });
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(3);
  });

  it("renders disabled state", () => {
    render(<Button disabled>Disabled Button</Button>);
    const button = screen.getByRole("button", { name: "Disabled Button" });

    expect(button).toBeDisabled();
  });

  it("does not trigger click when disabled", () => {
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick} disabled>
        Disabled Button
      </Button>
    );

    const button = screen.getByRole("button", { name: "Disabled Button" });
    fireEvent.click(button);

    expect(handleClick).not.toHaveBeenCalled();
  });

  it("renders with custom type", () => {
    render(<Button type="submit">Submit</Button>);
    const button = screen.getByRole("button", { name: "Submit" });

    expect(button).toHaveAttribute("type", "submit");
  });

  it("renders with custom className", () => {
    render(<Button className="custom-class">Custom Button</Button>);
    const button = screen.getByRole("button", { name: "Custom Button" });

    expect(button).toHaveClass("custom-class");
  });

  it("renders with custom id", () => {
    render(<Button id="test-button">Test Button</Button>);
    const button = screen.getByRole("button", { name: "Test Button" });

    expect(button).toHaveAttribute("id", "test-button");
  });

  it("renders with aria-label", () => {
    render(<Button aria-label="Close dialog">×</Button>);
    const button = screen.getByRole("button", { name: "Close dialog" });

    expect(button).toHaveAttribute("aria-label", "Close dialog");
  });

  it("renders with data attributes", () => {
    render(
      <Button data-testid="action-button" data-action="delete">
        Delete
      </Button>
    );
    const button = screen.getByRole("button", { name: "Delete" });

    expect(button).toHaveAttribute("data-testid", "action-button");
    expect(button).toHaveAttribute("data-action", "delete");
  });

  it("renders with multiple props", () => {
    render(
      <Button
        type="button"
        disabled={false}
        className="primary-button"
        id="main-button"
        aria-label="Primary action"
      >
        Primary Action
      </Button>
    );

    const button = screen.getByRole("button", { name: "Primary action" });

    expect(button).toHaveAttribute("type", "button");
    expect(button).not.toBeDisabled();
    expect(button).toHaveClass("primary-button");
    expect(button).toHaveAttribute("id", "main-button");
    expect(button).toHaveAttribute("aria-label", "Primary action");
  });
});
