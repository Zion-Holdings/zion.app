import { describe, it, expect, vi, beforeEach } from 'vitest';
import httpMocks from 'node-mocks-http';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import * as authController from '../server/controllers/authController';
import User from '../server/models/User';

beforeEach(() => {
  process.env.JWT_SECRET = 'testsecret';
  vi.restoreAllMocks();
});

describe('loginUser controller', () => {
  it('returns token and user on success', async () => {
    const req = httpMocks.createRequest({
      method: 'POST',
      body: { email: 'test@example.com', password: 'pass' },
    });
    const res = httpMocks.createResponse();
    const next = vi.fn();

    const selectMock = vi.fn().mockResolvedValue({
      _id: '1',
      email: 'test@example.com',
      name: 'Test',
      passwordHash: 'hash',
    });
    vi.spyOn(User, 'findOne').mockReturnValue({ select: selectMock } as any);
    vi.spyOn(bcrypt, 'compare').mockResolvedValue(true);
    vi.spyOn(jwt, 'sign').mockReturnValue('jwt');

    await authController.loginUser(req, res, next);

    expect(next).not.toHaveBeenCalled();
    expect(res._getJSONData()).toEqual({
      accessToken: 'jwt',
      user: { id: '1', email: 'test@example.com', name: 'Test' },
    });
  });

  it('calls next with 401 on bad credentials', async () => {
    const req = httpMocks.createRequest({
      method: 'POST',
      body: { email: 'bad@example.com', password: 'wrong' },
    });
    const res = httpMocks.createResponse();
    const next = vi.fn();

    vi.spyOn(User, 'findOne').mockReturnValue({ select: vi.fn().mockResolvedValue(null) } as any);

    await authController.loginUser(req, res, next);

    expect(next).toHaveBeenCalled();
    const err = next.mock.calls[0][0];
    expect(err.status).toBe(401);
    expect(err.code).toBe('EMAIL_NOT_FOUND');
  });

  it('calls next with 403 on inactive account', async () => {
    const req = httpMocks.createRequest({
      method: 'POST',
      body: { email: 'inactive@example.com', password: 'pass' },
    });
    const res = httpMocks.createResponse();
    const next = vi.fn();

    const selectMock = vi.fn().mockResolvedValue({
      _id: '1',
      email: 'inactive@example.com',
      name: 'Inactive',
      passwordHash: 'hash',
      active: false,
    });
    vi.spyOn(User, 'findOne').mockReturnValue({ select: selectMock } as any);

    await authController.loginUser(req, res, next);

    expect(next).toHaveBeenCalled();
    const err = next.mock.calls[0][0];
    expect(err.status).toBe(403);
    expect(err.code).toBe('ACCOUNT_INACTIVE');
  });
});
