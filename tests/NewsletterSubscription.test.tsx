import { render, screen, fireEvent } from '@testing-library/react';
import { EnhancedNewsletterForm } from '@/components/EnhancedNewsletterForm';
import { vi } from 'vitest';
import * as toastHook from '@/hooks/use-toast';

vi.mock('@/hooks/use-toast', () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn(),
  },
}));

beforeEach(() => {
  vi.clearAllMocks();
  // @ts-ignore
  delete global.fetch;
});

test('invalid email shows error', () => {
  render(<EnhancedNewsletterForm />);

  fireEvent.input(screen.getByPlaceholderText(/enter your email/i), {
    target: { value: 'bad' },
  });
  fireEvent.submit(screen.getByRole('button', { name: /subscribe/i }));

  expect(screen.getByRole('alert')).toHaveTextContent(/valid email/i);
});

test('valid email triggers fetch', async () => {
  const fetchMock = vi
    .fn()
    .mockResolvedValue({ ok: true, json: async () => ({}) });
  global.fetch = fetchMock as any;

  render(<EnhancedNewsletterForm />);

  fireEvent.input(screen.getByPlaceholderText(/enter your email/i), {
    target: { value: 'user@example.com' },
  });
  fireEvent.submit(screen.getByRole('button', { name: /subscribe/i }));

  await vi.waitFor(() => {
    expect(fetchMock).toHaveBeenCalledWith(
      '/api/newsletter/subscribe',
      expect.objectContaining({
        method: 'POST',
        body: JSON.stringify({ email: 'user@example.com' }),
      })
    );
  });
});
