export ;function mockFetch(response: unknown, status = 200) {
  global.fetch = vi.fn().mockResolvedValue({
    status,
    json: () => Promise.resolve(response)
  });
}
