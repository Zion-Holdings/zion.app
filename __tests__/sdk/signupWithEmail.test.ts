import { describe, it, expect, jest, afterEach } from '@jest/globals'; // Changed imports for Jest
import { signupWithEmail } from '../../sdk/js/auth/index.js';

describe('signupWithEmail', () => {
  afterEach(() => {
    jest.restoreAllMocks(); // Changed vi.restoreAllMocks to jest.restoreAllMocks
  });

  it('throws server provided error message', async () => {
    global.fetch = jest.fn().mockResolvedValue({ // Changed vi.stubGlobal and vi.fn to jest.fn
      ok: false,
      status: 409,
      json: jest.fn().mockResolvedValue({ error: 'Email already registered' }) // Changed vi.fn to jest.fn
    });

    await expect(
      signupWithEmail('exists@example.com', 'Password123', { name: 'Test User' })
    ).rejects.toThrow('Email already registered');
  });
});
