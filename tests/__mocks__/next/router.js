// eslint-disable-next-line @typescript-eslint/no-require-imports
export const useRouter = () => ({
  route: '/',
  pathname: '',
  query: '',
  asPath: '',
  push: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
  },
  beforePopState: jest.fn(() => null),
  prefetch: jest.fn(() => Promise.resolve()),
});
