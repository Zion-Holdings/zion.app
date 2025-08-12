import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CategoryCard } from '@/components/CategoryCard';

const renderCard = (ui: React.ReactElement) => render(<MemoryRouter>{ui}</MemoryRouter>);

describe('CategoryCard', () => {
  test('renders title, description and count', () => {
    renderCard(
      <CategoryCard title="Crypto" description="All things crypto" icon={<span data-testid="icon" />} count={5} />
    );
    expect(screen.getByText('Crypto')).toBeInTheDocument();
    expect(screen.getByText('All things crypto')).toBeInTheDocument();
    expect(screen.getByText('5 listings')).toBeInTheDocument();
  });

  test('link href uses slugified title', () => {
    renderCard(
      <CategoryCard title="My Category" description="desc" icon={<span />} />
    );
    const link = screen.getByTestId('category-card');
    expect(link).toHaveAttribute('href', '/category/my-category');
  });

  test('applies icon color style', () => {
    renderCard(
      <CategoryCard title="Color" description="desc" icon={<span data-testid="icon" />} color="red" />
    );
    const wrapper = screen.getByTestId('category-card');
    const iconWrapper = wrapper.querySelector('div');
    expect(iconWrapper).toHaveStyle({ color: 'red' });
  });
});
