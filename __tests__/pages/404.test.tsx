import React from 'react';
import { render, screen } from '@testing-library/react';
import Custom404 from '../../pages/404';

describe('Custom404 Page', () => {
  it('renders the 404 heading', () => {
    render(<Custom404 />);
    expect(screen.getByText('404 – Page Not Found')).toBeInTheDocument();
  });
});
