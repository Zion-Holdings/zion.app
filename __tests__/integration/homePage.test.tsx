import { render, screen } from '@testing-library/react';
import HomePage from '@/pages/index';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';

// Basic i18n setup for testing
i18n.init({
  lng: 'en',
  resources: {
    en: {
      translation: {
        'home.hero_title': 'Welcome to Our Platform',
        'home.hero_subtitle': 'Discover amazing things.',
        'auth.signup': 'Sign Up',
        'home.browse_marketplace': 'Browse Marketplace',
      },
    },
  },
});

describe('HomePage Integration Test', () => {
  it('should render the HeroSection content correctly and load without errors', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <HomePage />
      </I18nextProvider>
    );

    // Check for the "Sign Up" button
    expect(screen.getByRole('button', { name: /Sign Up/i })).toBeInTheDocument();

    // Check for the "Browse Marketplace" link (styled as a button)
    // It's a link, but visually acts as a button. We can find it by its text.
    expect(screen.getByRole('link', { name: /Browse Marketplace/i })).toBeInTheDocument();

    // Check for the main heading (optional, as buttons are more specific for interaction)
    expect(screen.getByRole('heading', { name: /Welcome to Our Platform/i })).toBeInTheDocument();
  });
});
