/** @jest-environment node */
import { expect } from '@playwright/test';
// Note: test and createClient are imported but not used in this specific test file
// eslint-disable-next-line @typescript-eslint/no-require-imports
const jwt = require('jsonwebtoken');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const bcrypt = require('bcryptjs');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { registerUser, loginUser } = require('../../server/controllers/authController');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const User = require('../../server/models/User');

jest.mock('../../server/models/User');
jest.mock('bcryptjs');
jest.mock('jsonwebtoken');

describe('auth flow integration', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('allows user to sign up then log in', async () => {
    const signupReq = { body: { name: 'Test', email: 'test@example.com', password: 'Password123' } };
    const signupRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    User.create.mockResolvedValue({ _id: '1', email: 'test@example.com', name: 'Test' });
    bcrypt.hash.mockResolvedValue('hashed');
    jwt.sign.mockReturnValue('signed-jwt');

    await registerUser(signupReq, signupRes);

    expect(signupRes.status).toHaveBeenCalledWith(201);

    const loginReq = { body: { email: 'test@example.com', password: 'Password123' } };
    const loginRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    User.findOne.mockResolvedValue({ _id: '1', email: 'test@example.com', name: 'Test', passwordHash: 'hashed' });
    bcrypt.compareSync.mockReturnValue(true);

    await loginUser(loginReq, loginRes);

    expect(loginRes.status).not.toHaveBeenCalledWith(401);
    expect(loginRes.json).toHaveBeenCalledWith({
      accessToken: 'signed-jwt',
      user: { id: '1', email: 'test@example.com', name: 'Test' },
    });
  });

  it('prevents login for inactive account', async () => {
    const loginReq = { body: { email: 'inactive@example.com', password: 'Password123' } };
    const loginRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    User.findOne.mockResolvedValue({ _id: '1', email: 'inactive@example.com', name: 'Test', passwordHash: 'hashed', active: false });
    bcrypt.compareSync.mockReturnValue(true);

    await loginUser(loginReq, loginRes);

    expect(loginRes.status).toHaveBeenCalledWith(403);
    expect(loginRes.json).toHaveBeenCalledWith({ code: 'ACCOUNT_INACTIVE', message: 'Account inactive' });
  });
});
