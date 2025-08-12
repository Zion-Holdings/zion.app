/** @jest-environment node */
// eslint-disable-next-line @typescript-eslint/no-require-imports
const mongoose = require('mongoose');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { MongoMemoryServer } = require('mongodb-memory-server');

process.env.JWT_SECRET = 'testsecret';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const { registerUser } = require('../../server/controllers/authController');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const User = require('../../server/models/User');

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

afterEach(async () => {
  await mongoose.connection.db.dropDatabase();
});

test('registerUser persists user to the database', async () => {
  const req = { body: { name: 'Test', email: 'persist@test.com', password: 'Password123' } };
  const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

  await registerUser(req, res);

  const exists = await User.findOne({ email: 'persist@test.com' });
  expect(exists).toBeTruthy();
  expect(res.status).toHaveBeenCalledWith(201);
});
