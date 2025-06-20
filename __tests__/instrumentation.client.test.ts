import { register } from '../sentry';
import * as Sentry from '@sentry/nextjs';
import { Integrations } from "@sentry/tracing"; // Import this if it's used in the Sentry.init call options

describe('Sentry Initialization', () => {
  let consoleWarnSpy: jest.SpyInstance;
  let sentryInitSpy: jest.SpyInstance;
  const originalEnv = { ...process.env }; // Shallow copy to preserve original values

  beforeEach(() => {
    // Reset process.env for each test to ensure isolation
    process.env = { ...originalEnv };
    // Mock console.warn
    consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    // Mock Sentry.init
    sentryInitSpy = jest.spyOn(Sentry, 'init').mockImplementation(() => {});
  });

  afterEach(() => {
    // Restore all mocks
    jest.restoreAllMocks();
    // No need to restore process.env here as Jest does it or we re-initialize it in beforeEach
  });

  test('should warn and not initialize Sentry if DSN is missing', () => {
    delete process.env.NEXT_PUBLIC_SENTRY_DSN;
    register();
    expect(consoleWarnSpy).toHaveBeenCalledWith(
      'Warning: NEXT_PUBLIC_SENTRY_DSN is not set. Sentry will not be initialized.'
    );
    expect(sentryInitSpy).not.toHaveBeenCalled();
  });

  test('should warn for missing release and environment if only DSN is present', () => {
    process.env.NEXT_PUBLIC_SENTRY_DSN = 'https://mockdsn@sentry.io/123';
    delete process.env.NEXT_PUBLIC_SENTRY_RELEASE;
    delete process.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT;

    register();

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      'Warning: NEXT_PUBLIC_SENTRY_RELEASE is not set. Sentry will proceed without release information.'
    );
    expect(consoleWarnSpy).toHaveBeenCalledWith(
      'Warning: NEXT_PUBLIC_SENTRY_ENVIRONMENT is not set. Sentry will proceed without environment information.'
    );
    expect(sentryInitSpy).toHaveBeenCalledWith({
      dsn: 'https://mockdsn@sentry.io/123',
      tracesSampleRate: 1.0,
      integrations: [new Integrations.Http({ tracing: true })],
    });
  });

  test('should initialize Sentry with DSN, release, and environment if all are present', () => {
    process.env.NEXT_PUBLIC_SENTRY_DSN = 'https://mockdsn@sentry.io/123';
    process.env.NEXT_PUBLIC_SENTRY_RELEASE = 'mock-release-1.0.0';
    process.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT = 'test-env';

    register();

    expect(consoleWarnSpy).not.toHaveBeenCalled();
    expect(sentryInitSpy).toHaveBeenCalledWith({
      dsn: 'https://mockdsn@sentry.io/123',
      release: 'mock-release-1.0.0',
      environment: 'test-env',
      tracesSampleRate: 1.0,
      integrations: [new Integrations.Http({ tracing: true })],
    });
  });

  test('should initialize Sentry with DSN and release if environment is missing', () => {
    process.env.NEXT_PUBLIC_SENTRY_DSN = 'https://mockdsn@sentry.io/123';
    process.env.NEXT_PUBLIC_SENTRY_RELEASE = 'mock-release-1.0.1';
    delete process.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT;

    register();

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      'Warning: NEXT_PUBLIC_SENTRY_ENVIRONMENT is not set. Sentry will proceed without environment information.'
    );
    expect(sentryInitSpy).toHaveBeenCalledWith({
      dsn: 'https://mockdsn@sentry.io/123',
      release: 'mock-release-1.0.1',
      tracesSampleRate: 1.0,
      integrations: [new Integrations.Http({ tracing: true })],
    });
  });

  test('should initialize Sentry with DSN and environment if release is missing', () => {
    process.env.NEXT_PUBLIC_SENTRY_DSN = 'https://mockdsn@sentry.io/123';
    delete process.env.NEXT_PUBLIC_SENTRY_RELEASE;
    process.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT = 'test-env-2';

    register();

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      'Warning: NEXT_PUBLIC_SENTRY_RELEASE is not set. Sentry will proceed without release information.'
    );
    expect(sentryInitSpy).toHaveBeenCalledWith({
      dsn: 'https://mockdsn@sentry.io/123',
      environment: 'test-env-2',
      tracesSampleRate: 1.0,
      integrations: [new Integrations.Http({ tracing: true })],
    });
  });
});
