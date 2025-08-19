import { expect, test, vi } from 'vitest';
import handler from '@/pages/api/auth/register';

const signUpMock = vi.fn();
vi.mock('@supabase/supabase-js', () => ({
  createClient: () => ({
    auth: { signUp: signUpMock },
  }),
}));

function mockReq(body: any) {
  return { method: 'POST', body } as any;
}

function mockRes() {
  const res: any = {};
  res.status = vi.fn().mockReturnValue(res);
  res.json = vi.fn().mockReturnValue(res);
  res.setHeader = vi.fn();
  res.end = vi.fn();
  return res;
}

test('register endpoint returns 201 on success', async () => {
  signUpMock.mockResolvedValue({
    data: { user: { id: '1' }, session: { access_token: 'tok' } },
    error: null,
  });
  const req = mockReq({ name: 'John', email: 'a@b.c', password: 'Password123' });
  const res = mockRes();
  await handler(req, res);
  expect(res.status).toHaveBeenCalledWith(201);
  expect(res.json).toHaveBeenCalledWith({ user: { id: '1' }, token: 'tok' });
});
