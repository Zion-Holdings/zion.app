import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { vi, expect, describe, test, beforeEach, afterEach } from 'vitest';
import { NewsletterForm } from '@/components/NewsletterForm';
import * as toastHook from '@/hooks/use-toast';

vi.mock('@/hooks/use-toast');

describe('NewsletterForm', () => {
  let originalFetch: typeof global.fetch;

  beforeEach(() => {
    originalFetch = global.fetch;
    vi.clearAllMocks();
  });

  afterEach(() => {
    global.fetch = originalFetch;
    vi.restoreAllMocks();
  });

  test('invalid email shows error toast', () => {
    render(<NewsletterForm />);
    fireEvent.change(screen.getByPlaceholderText(/enter your email/i), {
      target: { value: 'bad-email' },
    });
    fireEvent.submit(screen.getByRole('button', { name: /subscribe/i }));
    expect(toastHook.toast.error).toHaveBeenCalledWith('Invalid email');
  });

  test('successful subscription shows success toast', async () => {
    global.fetch = vi.fn().mockResolvedValue({ ok: true, json: vi.fn() }) as any;
    render(<NewsletterForm />);
    fireEvent.change(screen.getByPlaceholderText(/enter your email/i), {
      target: { value: 'test@example.com' },
    });
    fireEvent.submit(screen.getByRole('button', { name: /subscribe/i }));
    await waitFor(() => {
      expect(toastHook.toast.success).toHaveBeenCalledWith('Thanks for subscribing!');
    });
  });

  test('API error shows error toast', async () => {
    global.fetch = vi
      .fn()
      .mockResolvedValue({ ok: false, json: vi.fn().mockResolvedValue({ error: 'failed' }) }) as any;
    render(<NewsletterForm />);
    fireEvent.change(screen.getByPlaceholderText(/enter your email/i), {
      target: { value: 'test@example.com' },
    });
    fireEvent.submit(screen.getByRole('button', { name: /subscribe/i }));
    await waitFor(() => {
      expect(toastHook.toast.error).toHaveBeenCalledWith('failed');
    });
  });
});
