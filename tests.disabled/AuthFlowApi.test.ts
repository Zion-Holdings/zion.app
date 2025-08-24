import registerHandler from '@/pages/api/auth/register';
import loginHandler from '@/pages/api/auth/login';

const signUpMock = jest.fn();
const signInMock = jest.fn();

jest.mock('@supabase/supabase-js', () => ({
  createClient: jest.fn(() => ({
    auth: { signUp: signUpMock, signInWithPassword: signInMock }
  }))
}));

function mockReq(method: string, body: any) {
  return { method, body } as any;
}

function mockRes() {
  const res: any = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  res.setHeader = jest.fn();
  res.end = jest.fn();
  return res;
}

describe('auth flow', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('register then login stores token', async () => {
    signUpMock.mockResolvedValue({
      data: { user: { id: '1' }, session: { access_token: 'tok' } },
      error: null,
    });
    signInMock.mockResolvedValue({
      data: { user: { id: '1' }, session: { access_token: 'tok2', refresh_token: 'ref' } },
      error: null,
    });

    const regReq = mockReq('POST', { name: 'John', email: 'a@b.c', password: 'Password123' });
    const regRes = mockRes();
    await registerHandler(regReq, regRes);

    const logReq = mockReq('POST', { email: 'a@b.c', password: 'Password123' });
    const logRes = mockRes();
    await loginHandler(logReq, logRes);

    expect(logRes.status).toHaveBeenCalledWith(200);
    expect(logRes.json).toHaveBeenCalledWith({ user: { id: '1' }, accessToken: 'tok2', refreshToken: 'ref' });
    expect(logRes.setHeader).toHaveBeenCalledWith('Set-Cookie', expect.stringContaining('access=tok2'));
  });
});
