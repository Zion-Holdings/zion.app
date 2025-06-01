const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { loginUser } = require('../../server/controllers/authController');
const User = require('../../server/models/User');

jest.mock('../../server/models/User');
jest.mock('bcryptjs');
jest.mock('jsonwebtoken');

describe('authController.loginUser', () => {
  const req = { body: { email: 'test@example.com', password: 'Password123' } };
  const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

  beforeEach(() => {
    jest.clearAllMocks();
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
      token: 'signed-jwt',
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
    expect(res.json).toHaveBeenCalledWith({ message: 'Invalid credentials' });
  });
});
