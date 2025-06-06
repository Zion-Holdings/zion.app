import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import FounderBotPage from '@/pages/FounderBot';

jest.mock('@/components/ChatAssistant', () => ({
  ChatAssistant: () => <div data-testid="chat-assistant" />
}));

jest.mock('@/components/ui/button', () => ({
  Button: ({ children, ...props }) => <button {...props}>{children}</button>
}));

describe('FounderBotPage', () => {
  it('renders heading', () => {
    render(
      <MemoryRouter>
        <FounderBotPage />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { name: /ask the founder/i })).toBeInTheDocument();
  });
});
