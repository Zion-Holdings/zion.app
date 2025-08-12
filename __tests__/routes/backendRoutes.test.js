/** @jest-environment node */
// eslint-disable-next-line @typescript-eslint/no-require-imports
const express = require('express');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const request = require('supertest');

// eslint-disable-next-line @typescript-eslint/no-require-imports
const authRoutes = require('../../server/routes/auth');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const syncRoutes = require('../../server/routes/sync');

// eslint-disable-next-line @typescript-eslint/no-require-imports
const User = require('../../server/models/User');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const bcrypt = require('bcryptjs');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const jwt = require('jsonwebtoken');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const syncStore = require('../../server/utils/syncStore');

jest.mock('../../server/models/User');
jest.mock('bcryptjs');
jest.mock('jsonwebtoken');

function createApp() {
  const app = express();
  app.use(express.json());
  app.use('/auth', authRoutes);
  app.use('/sync', syncRoutes);
  app.use((err, _req, res, _next) => {
    res.status(err.status || 500).json({ code: err.code, message: err.message });
  });
  return app;
}

describe('Auth endpoints', () => {
  let app;
  beforeEach(() => {
    app = createApp();
    jest.clearAllMocks();
  });

  describe('POST /auth/login', () => {
    it('returns token on success', async () => {
      User.findOne.mockReturnValue({
        select: jest.fn().mockResolvedValue({
          _id: '1',
          email: 'user@example.com',
          name: 'User',
          passwordHash: 'hash',
        }),
      });
      bcrypt.compare.mockResolvedValue(true);
      jwt.sign.mockReturnValue('jwt');

      const res = await request(app)
        .post('/auth/login')
        .send({ email: 'user@example.com', password: 'pass' });

      expect(res.status).toBe(200);
      expect(res.body).toEqual({
        accessToken: 'jwt',
        user: { id: '1', email: 'user@example.com', name: 'User' },
      });
    });

    it('fails with 401 for wrong password', async () => {
      User.findOne.mockReturnValue({
        select: jest.fn().mockResolvedValue({
          _id: '1',
          email: 'user@example.com',
          name: 'User',
          passwordHash: 'hash',
        }),
      });
      bcrypt.compare.mockResolvedValue(false);

      const res = await request(app)
        .post('/auth/login')
        .send({ email: 'user@example.com', password: 'bad' });

      expect(res.status).toBe(401);
      expect(res.body.code).toBe('WRONG_PASSWORD');
    });

    it('fails with 500 when email missing', async () => {
      const res = await request(app)
        .post('/auth/login')
        .send({ password: 'pass' });

      expect(res.status).toBe(500);
    });
  });

  describe('POST /auth/register', () => {
    it('creates user on success', async () => {
      User.mockImplementation(() => ({ setPassword: jest.fn() }));
      const saved = { _id: '1', email: 'user@example.com', name: 'User' };
      User.create.mockResolvedValue(saved);
      User.findOne.mockResolvedValue(saved);
      jwt.sign.mockReturnValue('jwt');

      const res = await request(app)
        .post('/auth/register')
        .send({ name: 'User', email: 'user@example.com', password: 'pass' });

      expect(res.status).toBe(201);
      expect(res.body).toEqual({
        accessToken: 'jwt',
        user: { id: '1', email: 'user@example.com', name: 'User' },
      });
    });

    it('returns 400 when required fields missing', async () => {
      const res = await request(app)
        .post('/auth/register')
        .send({ name: 'User', email: 'user@example.com' });

      expect(res.status).toBe(400);
    });

    it('returns 409 when email exists', async () => {
      User.mockImplementation(() => ({ setPassword: jest.fn() }));
      const err = new Error();
      err.code = 11000;
      User.create.mockRejectedValue(err);

      const res = await request(app)
        .post('/auth/register')
        .send({ name: 'User', email: 'user@example.com', password: 'pass' });

      expect(res.status).toBe(409);
      expect(res.body.code).toBe('EMAIL_EXISTS');
    });
  });
});

describe('Sync endpoints', () => {
  let app;
  beforeEach(() => {
    app = createApp();
    jest.clearAllMocks();
    syncStore.proposals.clear();
    syncStore.lastUpdated = 0;
  });

  describe('GET /sync/status', () => {
    it('returns current sync state', async () => {
      syncStore.lastUpdated = Date.now();
      syncStore.proposals.set('p1', { id: 'p1' });

      const res = await request(app).get('/sync/status');

      expect(res.status).toBe(200);
      expect(res.body.proposals).toHaveLength(1);
      expect(res.body.lastUpdated).toBe(syncStore.lastUpdated);
    });
  });

  describe('POST /sync/hub', () => {
    it('updates store and returns ok', async () => {
      const res = await request(app)
        .post('/sync/hub')
        .send({ proposals: [{ id: 'p1', version: 1 }] });

      expect(res.status).toBe(200);
      expect(res.body.status).toBe('ok');
      expect(syncStore.proposals.get('p1')).toEqual({ id: 'p1', version: 1 });
    });

    it('rejects invalid merkle root', async () => {
      const res = await request(app)
        .post('/sync/hub')
        .send({ merkleRoot: 'bad', proposals: [] });

      expect(res.status).toBe(400);
      expect(res.body.error).toBe('Invalid merkle root');
    });
  });
});
