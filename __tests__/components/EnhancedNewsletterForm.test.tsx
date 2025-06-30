import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { vi, expect, test, describe, beforeEach, afterEach } from 'vitest';
import { EnhancedNewsletterForm } from '@/components/EnhancedNewsletterForm';
import * as toastHook from '@/hooks/use-toast';

vi.mock('@/hooks/use-toast', () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn(),
    info: vi.fn(),
  }
}));

describe('EnhancedNewsletterForm', () => {
  let originalFetch: typeof global.fetch;

  beforeEach(() => {
    originalFetch = global.fetch;
    vi.clearAllMocks();
     // Ensure toast mocks are reset if they are part of the module factory
    (toastHook.toast.success as ReturnType<typeof vi.fn>).mockClear();
    (toastHook.toast.error as ReturnType<typeof vi.fn>).mockClear();
    (toastHook.toast.info as ReturnType<typeof vi.fn>).mockClear();
  });

  afterEach(() => {
    global.fetch = originalFetch;
    vi.restoreAllMocks();
  });

  test('submit invalid email shows error toast', () => {
    render(<EnhancedNewsletterForm />);
    fireEvent.change(screen.getByPlaceholderText(/enter your email/i), {
      target: { value: 'invalid-email' },
    });
    fireEvent.submit(screen.getByRole('button', { name: /subscribe/i }));
    expect(toastHook.toast.error).toHaveBeenCalledWith('Invalid email');
  });

  test('successful subscription shows success toast', async () => {
    global.fetch = vi.fn().mockResolvedValue({ ok: true, json: async () => ({}) }) as any;
    render(<EnhancedNewsletterForm />);
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
      .mockResolvedValue({ ok: false, json: async () => ({ error: 'failed' }) }) as any;
    render(<EnhancedNewsletterForm />);
    fireEvent.change(screen.getByPlaceholderText(/enter your email/i), {
      target: { value: 'test@example.com' },
    });
    fireEvent.submit(screen.getByRole('button', { name: /subscribe/i }));
    await waitFor(() => {
      expect(toastHook.toast.error).toHaveBeenCalledWith('failed');
    });
  });
});
