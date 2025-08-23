import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProfilePage from '../ProfilePage'; // Adjust path as necessary

// If ProfilePage uses any hooks like useTranslation or fetches data, they would need mocking here.
// For now, it's a simple presentational component.

describe('ProfilePage', () => {
  it('renders the "User Profile" heading', () => {
    render(<ProfilePage />);
    // Using a matcher function for flexibility with heading levels (h1, h2, etc.)
    expect(screen.getByRole('heading', { name: /user profile/i })).toBeInTheDocument();
  });

  it('renders input field for Name', () => {
    render(<ProfilePage />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/enter your name/i)).toBeInTheDocument();
  });

  it('renders input field for Email', () => {
    render(<ProfilePage />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/enter your email/i)).toBeInTheDocument();
  });

  it('renders textarea for Bio', () => {
    render(<ProfilePage />);
    expect(screen.getByLabelText(/bio/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/tell us a bit about yourself/i)).toBeInTheDocument();
  });
});
