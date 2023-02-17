import { render, screen } from '@testing-library/react'
import SearchBar from './searchBar';

test('should render apply button', () => {
    render(<SearchBar />);
    // const bedrommFilter = screen.getByPlaceholderText("Bedroom");
    const applyButton = screen.getByText("Apply");
    expect(applyButton).toBeInTheDocument();
});

test('should render sort high to low button', () => {
    render(<SearchBar />);
    // const bedrommFilter = screen.getByPlaceholderText("Bedroom");
    const applyButton = screen.getByText("Sort By Price ↓");
    expect(applyButton).toBeInTheDocument();
});

test('should render sort low to high button', () => {
    render(<SearchBar />);
    // const bedrommFilter = screen.getByPlaceholderText("Bedroom");
    const applyButton = screen.getByText("Sort By Price ↑");
    expect(applyButton).toBeInTheDocument();
});

test('should render bedroom filter', () => {
    render(<SearchBar />);
    // const bedrommFilter = screen.getByPlaceholderText("Bedroom");
    const applyButton = screen.getByTestId("searchBar");
    expect(applyButton).toBeInTheDocument();
});