
;
import { MongoMemoryServer } from mongodb-memory-server';/** @jest-environment node */;
import mongoose from mongoose';
process.env.JWT_SECRET = testsecret';;
import { registerUser } from ../../server/controllers/authController';import User from ../../server/models/User';;
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

test('registerUser persists user to the database', async () => {'  const req = { body: { name: Test', email: persist@test.com', password: Password123' } };  const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

  await registerUser(req, res);

  const exists = await User.findOne({ email: persist@test.com' });  expect(exists).toBeTruthy();
  expect(res.status).toHaveBeenCalledWith(201);
});
