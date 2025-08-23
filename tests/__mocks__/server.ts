export function mockFetch(response: any, status = 200) {
  global.fetch = jest.fn().mockResolvedValue({
    status,
    json: () => Promise.resolve(response),
  }) as jest.Mock;
}

