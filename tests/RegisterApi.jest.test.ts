import handler from '@/pages/api/auth/register';

const signUpMock = jest.fn();
jest.mock('@supabase/supabase-js', () => ({
  createClient: () => ({
    auth: { signUp: signUpMock },
  }),
}));

function mockReq(body: any) {
  return { method: 'POST', body } as any;
}

function mockRes() {
  const res: any = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  res.setHeader = jest.fn();
  res.end = jest.fn();
  return res;
}

test('successful registration returns 201 with token and user', async () => {
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
