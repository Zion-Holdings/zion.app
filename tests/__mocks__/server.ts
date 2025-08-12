export function mockFetch(response: any, status = 200) {
  global.fetch = vi.fn().mockResolvedValue({
    status,
    json: () => Promise.resolve(response),
  });
}

