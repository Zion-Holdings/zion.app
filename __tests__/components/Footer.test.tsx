import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Footer } from '@/components/Footer';

/**
 * Verify that social media links contain the correct href attributes.
 */

describe('Footer social links', () => {
  test('links use configured URLs', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    expect(
      screen.getByRole('link', { name: 'Twitter' })
    ).toHaveAttribute('href', 'https://twitter.com/ZionTechGroup');
    expect(
      screen.getByRole('link', { name: 'LinkedIn' })
    ).toHaveAttribute('href', 'https://linkedin.com/company/ziontechgroup');
    expect(
      screen.getByRole('link', { name: 'Facebook' })
    ).toHaveAttribute('href', 'https://facebook.com/ZionTechGroup');
    expect(
      screen.getByRole('link', { name: 'Instagram' })
    ).toHaveAttribute('href', 'https://instagram.com/ZionTechGroup');
    expect(
      screen.getByRole('link', { name: 'GitHub' })
    ).toHaveAttribute('href', 'https://github.com/ZionTechGroup');
  });
});
