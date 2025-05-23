import { checkOnline, safeFetch } from '@/integrations/supabase/client';
import { vi } from 'vitest';

// Test that checkOnline returns false when navigator is offline
it('checkOnline returns false when navigator is offline', async () => {
  Object.defineProperty(window, 'navigator', {
    value: { onLine: false },
    writable: true,
  });
  const result = await checkOnline();
  expect(result).toBe(false);
});

// Test that safeFetch throws custom error when fetch fails
it('safeFetch throws when fetch rejects', async () => {
  Object.defineProperty(window, 'navigator', {
    value: { onLine: true },
    writable: true,
  });
  // ensure the online check succeeds so safeFetch proceeds to call fetch
  const fetchSpy = vi.spyOn(globalThis, 'fetch');
  fetchSpy.mockResolvedValueOnce(new Response());
  // subsequent fetch call for the actual request will reject
  fetchSpy.mockRejectedValueOnce(new Error('Network error'));
  await expect(safeFetch('https://example.com')).rejects.toThrow('Failed to connect to Supabase');
});
