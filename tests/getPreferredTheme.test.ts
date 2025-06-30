import { getPreferredTheme } from '@/utils/themeUtils';
import { vi, describe, it, expect, type MockInstance } from 'vitest';

describe('getPreferredTheme', () => {
  it('returns dark when system prefers dark', () => {
    (window.matchMedia as MockInstance<any,any>).mockReturnValueOnce({
      matches: true,
      media: '(prefers-color-scheme: dark)',
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    });
    expect(getPreferredTheme()).toBe('dark');
  });

  it('returns light when system prefers light', () => {
    (window.matchMedia as MockInstance<any,any>).mockReturnValueOnce({
      matches: false,
      media: '(prefers-color-scheme: dark)',
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    });
    expect(getPreferredTheme()).toBe('light');
  });
});
