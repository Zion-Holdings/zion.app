// eslint-disable-next-line @typescript-eslint/no-require-imports
export const useRouter = () => ({
  route: '/',
  pathname: '',
  query: '',
  asPath: '',
  push: vi.fn(),
  events: {
    on: vi.fn(),
    off: vi.fn(),
  },
  beforePopState: vi.fn(() => null),
  prefetch: vi.fn(() => Promise.resolve()),
});
