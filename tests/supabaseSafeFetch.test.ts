import * as client from '@/integrations/supabase/client';

// Test that checkOnline returns false when navigator is offline
it('checkOnline returns false when navigator is offline', async () => {
  Object.defineProperty(window, 'navigator', {
    value: { onLine: false },
    writable: true,
  });
  const result = await client.checkOnline();
  expect(result).toBe(false);
});

// Test that checkOnline returns false when navigator is undefined
it('checkOnline returns false when navigator is undefined', async () => {
  const original = (global as any).navigator;
  Object.defineProperty(global, 'navigator', { value: undefined, configurable: true, writable: true });
  const result = await client.checkOnline();
  expect(result).toBe(false);
  Object.defineProperty(global, 'navigator', { value: original, configurable: true, writable: true });
});

// Test that safeFetch throws custom error when fetch fails
it('safeFetch throws when fetch rejects', async () => {
  Object.defineProperty(window, 'navigator', {
    value: { onLine: true },
    writable: true,
  });
  jest.spyOn(client, 'checkOnline').mockResolvedValue(true);
  jest.spyOn(global, 'fetch').mockRejectedValue(new Error('Network error'));
  await expect(client.safeFetch('https://example.com')).rejects.toThrow('Failed to connect to Supabase');
});

// Test that safeFetch preserves headers passed as a Headers object
it('safeFetch preserves Headers object values', async () => {
  Object.defineProperty(window, 'navigator', {
    value: { onLine: true },
    writable: true,
  });
  const headers = new Headers({ apikey: 'test-key' });
  const fetchSpy = jest.fn().mockResolvedValue({ ok: true, status: 200 } as Response);
  jest.spyOn(client, 'checkOnline').mockResolvedValue(true);
  global.fetch = fetchSpy as any;

  await client.safeFetch('https://example.com', { headers });

  const calledHeaders = fetchSpy.mock.calls[0][1]?.headers as Headers;
  expect(calledHeaders.get('apikey')).toBe('test-key');
});
