import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { SkipLink } from '@/components/SkipLink';
import { AppLayout } from '@/layout/AppLayout';

// Basic test for SkipLink component

describe('SkipLink accessibility', () => {
  test('renders with correct attributes', () => {
    render(<SkipLink />);
    const link = screen.getByRole('link', { name: /skip to main content/i });
    expect(link).toHaveAttribute('href', '#main-content');
  });

  test('clicking the link updates location hash', async () => {
    const user = userEvent.setup();
    render(
      <>
        <SkipLink />
        <main id="main-content">Main</main>
      </>
    );
    const link = screen.getByRole('link', { name: /skip to main content/i });
    await user.click(link);
    expect(window.location.hash).toBe('#main-content');
  });

  test('AppLayout includes SkipLink', () => {
    render(
      <AppLayout>
        <div>Content</div>
      </AppLayout>
    );
    const link = screen.getByRole('link', { name: /skip to main content/i });
    expect(link).toBeInTheDocument();
  });
});
