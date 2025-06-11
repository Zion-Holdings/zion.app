import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../../pages/login';
import fetchMock from 'jest-fetch-mock';
import * as Sentry from '@sentry/nextjs';

jest.mock('@sentry/nextjs', () => ({
  captureException: jest.fn(),
}));

beforeEach(() => {
  fetchMock.resetMocks();
});

test('successful login redirects to home', async () => {
  fetchMock.mockResolvedValueOnce(new Response('{}', { status: 200 }));
  Object.defineProperty(window, 'location', {
    value: { href: '' },
    writable: true,
  });

  render(<Login />);

  await userEvent.type(screen.getByLabelText(/email/i), 'user@example.com');
  await userEvent.type(screen.getByLabelText(/password/i), 'password');
  await userEvent.click(screen.getByRole('button', { name: /login/i }));

  await waitFor(() => {
    expect(fetchMock).toHaveBeenCalledWith('/api/login', expect.any(Object));
  });

  expect(window.location.href).toBe('/');
});

test('failed login shows error message', async () => {
  fetchMock.mockResolvedValueOnce(new Response('invalid', { status: 401 }));

  render(<Login />);

  await userEvent.type(screen.getByLabelText(/email/i), 'user@example.com');
  await userEvent.type(screen.getByLabelText(/password/i), 'bad');
  await userEvent.click(screen.getByRole('button', { name: /login/i }));

  await waitFor(() => expect(screen.getByRole('alert')).toHaveTextContent('invalid'));
  expect(Sentry.captureException).toHaveBeenCalled();
});
