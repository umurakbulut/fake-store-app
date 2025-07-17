# Fake Store - E-commerce Application

A modern e-commerce application built with Next.js, React, and TypeScript using Atomic Design principles.

## 🚀 Project Setup and Running Instructions

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd fake-store

# Install dependencies
npm install

# Run the development server
npm run dev
```

### Available Scripts

```bash
# Development
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Testing
npm run test         # Run tests
npm run test:coverage # Run tests with coverage report
```

### Running the Application

1. Install dependencies: `npm install`
2. Start development server: `npm run dev`
3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Technologies Used

### Core Technologies

- **Next.js 15.3.5** - React framework with App Router
- **React 19.0.0** - UI library
- **TypeScript 5** - Type-safe JavaScript
- **Styled Components 6.1.19** - CSS-in-JS styling

### Development Tools

- **ESLint** - Code linting
- **Jest** - Testing framework
- **Testing Library** - React component testing
- **Tailwind CSS 4** - Utility-first CSS framework

### Testing Stack

- **Jest 30.0.4** - Test runner
- **@testing-library/react 16.3.0** - React testing utilities
- **@testing-library/jest-dom 6.6.3** - Custom Jest matchers
- **jest-environment-jsdom 30.0.4** - DOM testing environment

## 🏗️ Atomic Design Architecture

This project follows Atomic Design principles, organizing components into a hierarchical structure:

### 📁 Project Structure

```
src/
├── components/
│   ├── atoms/          # Basic building blocks
│   ├── molecules/      # Simple combinations of atoms
│   └── organisms/      # Complex UI components
├── contexts/           # React contexts
├── hooks/              # Custom React hooks
├── services/           # API services
├── types/              # TypeScript type definitions
└── utils/              # Utility functions
```

### 🧪 Atoms (Basic Components)

The smallest, indivisible components that serve as the foundation:

```typescript
// src/components/atoms/Button.tsx
const Button = styled.button`
  padding: 6px 12px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
```

**Examples:**

- `Button.tsx` - Reusable button component
- `Card.tsx` - Basic card container
- `Input.tsx` - Form input field
- `Image.tsx` - Image component
- `ProductPrice.tsx` - Price display component

### 🧬 Molecules (Simple Combinations)

Components that combine atoms to create more complex functionality:

```typescript
// src/components/molecules/ProductCard.tsx
const ProductCard = ({ product }) => (
  <Card>
    <Image src={product.image} alt={product.title} />
    <ProductTitle>{product.title}</ProductTitle>
    <ProductPrice>{product.price}</ProductPrice>
    <ProductRating rating={product.rating} />
    <Button>Add to Cart</Button>
  </Card>
);
```

**Examples:**

- `ProductCard.tsx` - Combines Card, Image, ProductTitle, ProductPrice, ProductRating, and Button
- `SearchInput.tsx` - Combines Input with search functionality
- `CategoryFilter.tsx` - Combines multiple Button components for filtering

### 🦠 Organisms (Complex Components)

Large, complex UI sections that combine molecules and atoms:

```typescript
// src/components/organisms/ProductGrid.tsx
const ProductGrid = ({ products, filters }) => (
  <div>
    <FiltersWrapper>
      <CategoryFilter categories={filters.categories} />
      <PriceFilter priceRange={filters.priceRange} />
      <SortSelect options={filters.sortOptions} />
    </FiltersWrapper>
    <div className="grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    <Pagination />
  </div>
);
```

**Examples:**

- `ProductGrid.tsx` - Complete product listing with filters and pagination
- `Header.tsx` - Navigation and search functionality
- `ProductDetail.tsx` - Detailed product view with images and description

## 🧪 Test Coverage

### Running Tests

```bash
# Run all tests
npm run test

# Run tests with coverage report
npm run test:coverage
```

### Test Structure

Tests are organized alongside components following the same atomic structure:

```
src/components/
├── atoms/
│   ├── __tests__/
│   │   ├── Button.test.tsx
│   │   └── Card.test.tsx
│   ├── Button.tsx
│   └── Card.tsx
├── molecules/
│   ├── __tests__/
│   └── ProductCard.tsx
└── organisms/
    ├── __tests__/
    └── ProductGrid.tsx
```

### Example Test Case

```typescript
// src/components/atoms/__tests__/Button.test.tsx
describe("Button", () => {
  it("renders with children content", () => {
    render(<Button>Click me</Button>);
    expect(
      screen.getByRole("button", { name: "Click me" })
    ).toBeInTheDocument();
  });

  it("handles click events", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    const button = screen.getByRole("button", { name: "Click me" });
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

### Coverage Report

To view the current test coverage, run:

```bash
npm run test:coverage
```

This will generate a coverage report showing:

- Statement coverage
- Branch coverage
- Function coverage
- Line coverage

### Coverage Result

```bash
Button.tsx
100%	21/21	100%	0/0	100%	0/0	100%	21/21
Card.tsx
100%	23/23	100%	0/0	100%	0/0	100%	23/23
```

The full report is available in: coverage/lcov-report/index.html

## 🎯 Key Features

- **Atomic Design Architecture** - Scalable and maintainable component structure
- **TypeScript** - Type-safe development experience
- **Responsive Design** - Mobile-first approach
- **Performance Optimized** - Next.js optimizations and code splitting
- **Comprehensive Testing** - Jest and Testing Library integration
- **Modern Styling** - Styled Components with CSS-in-JS
