import { describe, it, expect, vi, afterEach } from 'vitest';
import { signupWithEmail } from '../../sdk/js/auth/index.js';

describe('signupWithEmail', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('throws server provided error message', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 409,
      json: vi.fn().mockResolvedValue({ error: 'Email already registered' })
    });

    await expect(
      signupWithEmail('exists@example.com', 'Password123', { name: 'Test User' })
    ).rejects.toThrow('Email already registered');
  });
});
