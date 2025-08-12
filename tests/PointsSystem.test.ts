import { expect, test, vi } from 'vitest';
import handler from '@/pages/api/points/increment';

const insertMock = vi.fn();
vi.mock('@supabase/supabase-js', () => ({
  createClient: () => ({
    from: () => ({
      insert: insertMock,
      select: vi.fn().mockReturnThis(),
      update: vi.fn().mockReturnThis(),
      eq: vi.fn().mockReturnThis(),
      single: vi.fn().mockResolvedValue({ data: { points: 0 } }),
    }),
  }),
}));

function mockReq(body: any) {
  return { method: 'POST', body } as any;
}
function mockRes() {
  const res: any = {};
  res.status = vi.fn().mockReturnValue(res);
  res.json = vi.fn().mockReturnValue(res);
  res.setHeader = vi.fn();
  res.end = vi.fn();
  return res;
}

test('points increase after order', async () => {
  insertMock.mockResolvedValue({ error: null });
  const req = mockReq({ userId: '1', amount: 25, reason: 'test' });
  const res = mockRes();
  await handler(req, res);
  expect(insertMock).toHaveBeenCalled();
  expect(res.status).toHaveBeenCalledWith(200);
});
