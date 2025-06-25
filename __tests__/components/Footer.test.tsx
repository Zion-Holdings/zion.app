import React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from '@/components/Footer';
import nextRouterMock from 'next-router-mock';

jest.mock('next/router', () => nextRouterMock);

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

  test('links fall back to defaults when env values are invalid', () => {
    process.env.NEXT_PUBLIC_SOCIAL_TWITTER_URL = '#';
    process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN_URL = '/';
    process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK_URL = '';
    delete process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM_URL;
    delete process.env.NEXT_PUBLIC_SOCIAL_GITHUB_URL;

    render(<Footer />);

    expect(screen.getByRole('link', { name: 'Twitter' })).toHaveAttribute(
      'href',
      'https://twitter.com/ZionTechGroup'
    );
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
      'href',
      'https://linkedin.com/company/ziontechgroup'
    );
    expect(screen.getByRole('link', { name: 'Facebook' })).toHaveAttribute(
      'href',
      'https://facebook.com/ZionTechGroup'
    );
    expect(screen.getByRole('link', { name: 'Instagram' })).toHaveAttribute(
      'href',
      'https://instagram.com/ZionTechGroup'
    );
    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute(
      'href',
      'https://github.com/ZionTechGroup'
    );
  });
});
