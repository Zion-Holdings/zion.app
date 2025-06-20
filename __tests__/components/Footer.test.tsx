import React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from '@/components/Footer';

jest.mock('next/router', () => require('next-router-mock'));

/**
 * Verify that social media links contain the correct href attributes.
 */

const originalEnv = process.env;

describe('Footer social links', () => {
  beforeEach(() => {
    jest.resetModules(); // Clears the cache
    process.env = {
      ...originalEnv,
      NEXT_PUBLIC_SOCIAL_TWITTER_URL: "https://twitter.com/ZionTechGroup",
      NEXT_PUBLIC_SOCIAL_LINKEDIN_URL: "https://linkedin.com/company/ziontechgroup",
      NEXT_PUBLIC_SOCIAL_FACEBOOK_URL: "https://facebook.com/ZionTechGroup",
      NEXT_PUBLIC_SOCIAL_INSTAGRAM_URL: "https://instagram.com/ZionTechGroup",
      NEXT_PUBLIC_SOCIAL_GITHUB_URL: "https://github.com/ZionTechGroup",
    };
  });

  afterEach(() => {
    process.env = originalEnv; // Restore original env
  });

  test('links use configured URLs from environment variables', () => {
    render(<Footer />);

    expect(
      screen.getByRole('link', { name: 'Twitter' })
    ).toHaveAttribute('href', process.env.NEXT_PUBLIC_SOCIAL_TWITTER_URL);
    expect(
      screen.getByRole('link', { name: 'LinkedIn' })
    ).toHaveAttribute('href', process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN_URL);
    expect(
      screen.getByRole('link', { name: 'Facebook' })
    ).toHaveAttribute('href', process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK_URL);
    expect(
      screen.getByRole('link', { name: 'Instagram' })
    ).toHaveAttribute('href', process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM_URL);
    expect(
      screen.getByRole('link', { name: 'GitHub' })
    ).toHaveAttribute('href', process.env.NEXT_PUBLIC_SOCIAL_GITHUB_URL);
  });
});
