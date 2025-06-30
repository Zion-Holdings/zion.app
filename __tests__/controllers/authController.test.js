const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { loginUser, registerUser } = require('../../server/controllers/authController');
const User = require('../../server/models/User');
const { vi, describe, it, expect, beforeEach } = require('vitest');

vi.mock('../../server/models/User');
vi.mock('bcryptjs');
vi.mock('jsonwebtoken');

describe('authController.loginUser', () => {
  const req = { body: { email: 'test@example.com', password: 'Password123' } };
  const res = { status: vi.fn().mockReturnThis(), json: vi.fn() };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('returns token when credentials are valid', async () => {
    User.findOne.mockResolvedValue({
      _id: '1',
      email: 'test@example.com',
      name: 'Test',
      passwordHash: 'hashed'
    });
    bcrypt.compareSync.mockReturnValue(true);
    jwt.sign.mockReturnValue('signed-jwt');

    await loginUser(req, res);

    expect(jwt.sign).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledWith({
      accessToken: 'signed-jwt',
      user: { id: '1', email: 'test@example.com', name: 'Test' }
    });
  });

  it('returns 401 when credentials are invalid', async () => {
    User.findOne.mockResolvedValue({
      _id: '1',
      email: 'test@example.com',
      name: 'Test',
      passwordHash: 'hashed'
    });
    bcrypt.compareSync.mockReturnValue(false);

    await loginUser(req, res);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ code: 'WRONG_PASSWORD', message: 'Incorrect password' });
  });

  it('returns 403 when account inactive', async () => {
    User.findOne.mockResolvedValue({
      _id: '1',
      email: 'test@example.com',
      name: 'Test',
      passwordHash: 'hashed',
      active: false,
    });
    bcrypt.compareSync.mockReturnValue(true);

    await loginUser(req, res);

    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.json).toHaveBeenCalledWith({ code: 'ACCOUNT_INACTIVE', message: 'Account inactive' });
  });
});

describe('authController.registerUser', () => {
  const req = { body: { name: 'Test', email: 'test@example.com', password: 'Password123' } };
  const res = { status: vi.fn().mockReturnThis(), json: vi.fn() };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('creates a new user and returns access token', async () => {
    User.create.mockResolvedValue({ _id: '1', email: 'test@example.com', name: 'Test' });
    jwt.sign.mockReturnValue('signed-jwt');

    await registerUser(req, res);

    expect(User.create).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      accessToken: 'signed-jwt',
      user: { id: '1', email: 'test@example.com', name: 'Test' },
    });
  });
});
