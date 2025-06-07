/** @jest-environment node */
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { registerUser, loginUser } = require('../../server/controllers/authController');
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
});
