import { expect, test, vi } from 'vitest';
import handler from '@/pages/api/users/[id]';

function mockReq(method: string, query: any = {}, body?: any) {
  return { method, query, body } as any;
}
function mockRes() {
  const res: any = {};
  res.status = vi.fn().mockReturnValue(res);
  res.json = vi.fn().mockReturnValue(res);
  res.setHeader = vi.fn();
  res.end = vi.fn();
  return res;
}

test('PATCH updates user fields', () => {
  const req = mockReq('PATCH', { id: '1' }, { name: 'New', bio: 'Bio', avatarUrl: 'img.png' });
  const res = mockRes();
  handler(req, res);
  expect(res.status).toHaveBeenCalledWith(200);
  expect(res.json).toHaveBeenCalledWith(
    expect.objectContaining({ name: 'New', bio: 'Bio', avatarUrl: 'img.png' })
  );
});
