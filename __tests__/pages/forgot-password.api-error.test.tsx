import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import * as Sentry from '@sentry/nextjs';
import ForgotPasswordPage from '../../pages/forgot-password';
import { vi, describe, test, expect, beforeEach, afterEach, type SpyInstance, type Mocked } from 'vitest';

vi.mock('axios');
vi.mock('@sentry/nextjs', () => ({
  captureException: vi.fn(),
}));

vi.mock('next/link', () => {
  return {
    default: ({ children, href }: { children: React.ReactNode; href: string }) => (
      <a href={href}>{children}</a>
    )
  };
});

const mockedAxios = axios as Mocked<typeof axios>;

describe('ForgotPasswordPage API error handling', () => {
  let consoleErrorSpy: SpyInstance<[message?: any, ...optionalParams: any[]], void>;

  beforeEach(() => {
    mockedAxios.post.mockReset();
    (Sentry.captureException as MockInstance<any,any>).mockClear();
    consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleErrorSpy.mockRestore();
  });

  test('shows error alert and captures exception on 500 response', async () => {
    mockedAxios.post.mockRejectedValueOnce(new Error('Request failed with status code 500'));

    render(<ForgotPasswordPage />);
    fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'fail@example.com' } });
    fireEvent.click(screen.getByRole('button', { name: /send reset link/i }));

    await waitFor(() => {
      expect(Sentry.captureException).toHaveBeenCalledTimes(1);
    });

    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(consoleErrorSpy).not.toHaveBeenCalled();
  });
});
