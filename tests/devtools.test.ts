import { describe, it, expect, vi } from 'vitest';
import { enableDevToolsInStaging } from '@/utils/devtools';

const originalEnv = process.env.NODE_ENV;

describe('enableDevToolsInStaging', () => {
  afterEach(() => {
    process.env.NODE_ENV = originalEnv;
    vi.resetModules();
    vi.restoreAllMocks();
  });

  it('loads react-devtools in non-production env', async () => {
    process.env.NODE_ENV = 'development';
    const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
    vi.mock('react-devtools', () => ({}), { virtual: true });

    enableDevToolsInStaging();

    await Promise.resolve();
    expect(logSpy).toHaveBeenCalledWith('DevTools enabled');
  });

  it('does nothing in production env', async () => {
    process.env.NODE_ENV = 'production';
    const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
    vi.mock('react-devtools', () => ({}), { virtual: true });

    enableDevToolsInStaging();

    await Promise.resolve();
    expect(logSpy).not.toHaveBeenCalled();
  });
});
