import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
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
      <MemoryRouterProvider>
        <Contact />
      </MemoryRouterProvider>,
    );
    expect(
      screen.getByRole('heading', { name: /get in touch/i }),
    ).toBeInTheDocument();
  });
});

import fetchMock from 'jest-fetch-mock';
import userEvent from '@testing-library/user-event';

test('submits contact form', async () => {
  fetchMock.mockResolvedValueOnce(new Response('{}', { status: 200 }));
  render(
    <MemoryRouterProvider>
      <Contact />
    </MemoryRouterProvider>,
  );

  await userEvent.type(screen.getByLabelText(/your name/i), 'John');
  await userEvent.type(
    screen.getByLabelText(/email address/i),
    'john@example.com',
  );
  await userEvent.type(
    screen.getByLabelText(/message/i),
    'Hello there is a message',
  );
  await userEvent.click(screen.getByRole('button', { name: /send message/i }));

  await waitFor(() =>
    expect(fetchMock).toHaveBeenCalledWith('/api/contact', expect.any(Object)),
  );
  expect((screen.getByLabelText(/your name/i) as HTMLInputElement).value).toBe(
    '',
  );
  expect(await screen.findByText(/Message Sent!/i)).toBeInTheDocument();
});
