import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import Signup from '@/pages/Signup';

describe('Signup page', () => {
  it('renders all form fields', () => {
    render(
      <MemoryRouterProvider>
        <Signup />
      </MemoryRouterProvider>
    );
    expect(screen.getByTestId('name-input')).toBeInTheDocument();
    expect(screen.getByTestId('email-input')).toBeInTheDocument();
    expect(screen.getByTestId('password-input')).toBeInTheDocument();
    expect(screen.getByTestId('confirm-password-input')).toBeInTheDocument();
  });
});
