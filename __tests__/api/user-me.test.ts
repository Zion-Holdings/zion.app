import { expect, test } from 'vitest';
import handler from '@/pages/api/users/me';

function mockReq(method: string, body?: any) {
  return { method, body } as any;
}
function mockRes() {
  const res: any = {};
  res.status = vi.fn().mockReturnValue(res);
  res.json = vi.fn().mockReturnValue(res);
  res.setHeader = vi.fn();
  res.end = vi.fn();
  return res;
}

test('GET returns profile', () => {
  const req = mockReq('GET');
  const res = mockRes();
  handler(req, res);
  expect(res.status).toHaveBeenCalledWith(200);
  expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ email: 'jane@example.com' }));
});

test('PUT updates profile', () => {
  const req = mockReq('PUT', { name: 'New' });
  const res = mockRes();
  handler(req, res);
  expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ name: 'New' }));
});

test('DELETE soft deletes account', () => {
  const req = mockReq('DELETE');
  const res = mockRes();
  handler(req, res);
  expect(res.json).toHaveBeenCalledWith({ success: true });
});
