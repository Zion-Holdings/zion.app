import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Custom404 from '../../pages/404'; // Adjust path as needed

// Mock react-router-dom
const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigate,
}));

// Mock Lottie component to simplify testing
jest.mock('lottie-react', () => ({
  __esModule: true,
  default: (props) => <div data-testid="lottie-animation" {...props} />,
}));


describe('Custom404 Page', () => {
  beforeEach(() => {
    mockedNavigate.mockClear();
  });

  it('renders the 404 heading', () => {
    render(<Custom404 />);
    expect(screen.getByText('404 - Page Not Found')).toBeInTheDocument();
  });

  it('renders the search input and search button', () => {
    render(<Custom404 />);
    expect(screen.getByPlaceholderText('Search the marketplace...')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
  });

  it('renders the Go Home button', () => {
    render(<Custom404 />);
    expect(screen.getByRole('button', { name: 'Go Home' })).toBeInTheDocument();
  });

  it('navigates to home when Go Home button is clicked', () => {
    render(<Custom404 />);
    fireEvent.click(screen.getByRole('button', { name: 'Go Home' }));
    expect(mockedNavigate).toHaveBeenCalledWith('/');
  });

  it('renders the Lottie animation placeholder', () => {
    render(<Custom404 />);
    expect(screen.getByTestId('lottie-animation')).toBeInTheDocument();
  });

  // Optional: Test search functionality if time permits
  it('navigates to search results when a query is submitted', () => {
    render(<Custom404 />);
    const searchInput = screen.getByPlaceholderText('Search the marketplace...');
    const searchButton = screen.getByRole('button', { name: 'Search' });

    fireEvent.change(searchInput, { target: { value: 'test query' } });
    fireEvent.click(searchButton);

    expect(mockedNavigate).toHaveBeenCalledWith('/search?q=test%20query');
  });
});
