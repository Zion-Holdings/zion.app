import { describe, it, expect, vi } from 'vitest';
import { enableDevToolsInStaging, highlightZeroHeightElements } from '@/utils/devtools';

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
    expect(logSpy).toHaveBeenCalled();
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

describe('highlightZeroHeightElements', () => {
  afterEach(() => {
    process.env.NODE_ENV = originalEnv;
    document.body.innerHTML = '';
  });

  it('adds outlines in development', () => {
    process.env.NODE_ENV = 'development';
    document.body.innerHTML =
      '<div id="zero" style="height:0"></div><div id="nonzero" style="height:10px"></div>';

    highlightZeroHeightElements();
    window.dispatchEvent(new Event('load'));

    const zero = document.getElementById('zero') as HTMLElement | null;
    const nonzero = document.getElementById('nonzero') as HTMLElement | null;
    expect(zero?.style.outline).toBe('2px dashed red');
    expect(nonzero?.style.outline).toBe('');
  });

  it('does nothing in production', () => {
    process.env.NODE_ENV = 'production';
    document.body.innerHTML = '<div id="zero" style="height:0"></div>';

    highlightZeroHeightElements();
    window.dispatchEvent(new Event('load'));

    const zero = document.getElementById('zero') as HTMLElement | null;
    expect(zero?.style.outline).toBe('');
  });
});
