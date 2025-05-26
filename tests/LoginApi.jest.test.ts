import handler from '@/pages/api/auth/login';

const signInMock = jest.fn();
jest.mock('@supabase/supabase-js', () => ({
  createClient: () => ({
    auth: { signInWithPassword: signInMock },
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

test('successful login returns 200 with token and user', async () => {
  signInMock.mockResolvedValue({
    data: { user: { id: '1' }, session: { access_token: 'tok' } },
    error: null,
  });
  const req = mockReq({ email: 'a@b.c', password: 'secret' });
  const res = mockRes();
  await handler(req, res);
  expect(res.status).toHaveBeenCalledWith(200);
  expect(res.json).toHaveBeenCalledWith({ user: { id: '1' }, token: 'tok' });
});
