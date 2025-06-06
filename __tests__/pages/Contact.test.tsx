import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Contact from '@/pages/Contact';

// Mock heavy child components
jest.mock('@/components/ChatAssistant', () => ({
  ChatAssistant: () => <div data-testid="chat-assistant" />,
}));

jest.mock('@/components/Header', () => ({ Header: () => <div /> }));
jest.mock('@/components/Footer', () => ({ Footer: () => <div /> }));


describe('Contact Page', () => {
  it('renders heading "Get in Touch"', () => {
    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { name: /get in touch/i })).toBeInTheDocument();
  });
});
