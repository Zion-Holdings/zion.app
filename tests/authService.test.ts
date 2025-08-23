import { describe, it, expect, vi } from 'vitest';
import axios from 'axios';
import { loginUser } from '@/services/authService';
import { toast } from '@/hooks/use-toast';

vi.mock('axios');
vi.mock('@/hooks/use-toast', () => ({
  toast: { error: vi.fn() }
}));

describe('loginUser service', () => {
  it('returns data on success', async () => {
    (axios.post as any).mockResolvedValue({ status: 200, data: { token: 't' } });
    const result = await loginUser('a@b.c', 'pass');
    expect(result.data).toEqual({ token: 't' });
  });

  it('shows toast on 401', async () => {
    const error = { response: { status: 401 } };
    (axios.post as any).mockRejectedValue(error);
    await expect(loginUser('a@b.c', 'x')).rejects.toBe(error);
    expect(toast.error).toHaveBeenCalledWith('Invalid email or password');
  });

  it('shows toast on 500', async () => {
    const error = { response: { status: 500 } };
    (axios.post as any).mockRejectedValue(error);
    await expect(loginUser('a@b.c', 'x')).rejects.toBe(error);
    expect(toast.error).toHaveBeenCalledWith('Server error. Please try again later.');
  });
});
