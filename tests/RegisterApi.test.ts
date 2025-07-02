import handler from '@/pages/api/auth/register';

const mockSignUp = jest.fn();
jest.mock('@supabase/supabase-js', () => ({
  createClient: jest.fn(() => ({
    auth: { signUp: mockSignUp },
  })),
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

beforeEach(() => {
  jest.clearAllMocks();
});

describe('register API', () => {
  it('returns 201 on success', async () => {
    mockSignUp.mockResolvedValue({
      data: { user: { id: '1' }, session: { access_token: 'tok' } },
      error: null,
    });
    const req = mockReq({ name: 'John', email: 'a@b.c', password: 'Password123' });
    const res = mockRes();
    await handler(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ user: { id: '1' }, token: 'tok' });
  });

  it('returns 409 for duplicate email', async () => {
    mockSignUp.mockResolvedValue({
      data: { user: null },
      error: { message: 'User already registered', status: 400 },
    });
    const req = mockReq({ name: 'John', email: 'a@b.c', password: 'Password123' });
    const res = mockRes();
    await handler(req, res);
    expect(res.status).toHaveBeenCalledWith(409);
    expect(res.json).toHaveBeenCalledWith({ message: 'User already registered' });
  });
});
