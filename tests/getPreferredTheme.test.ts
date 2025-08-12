import { getPreferredTheme } from '@/utils/themeUtils';

describe('getPreferredTheme', () => {
  it('returns dark when system prefers dark', () => {
    (window.matchMedia as jest.Mock).mockReturnValueOnce({
      matches: true,
      media: '(prefers-color-scheme: dark)',
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    });
    expect(getPreferredTheme()).toBe('dark');
  });

  it('returns light when system prefers light', () => {
    (window.matchMedia as jest.Mock).mockReturnValueOnce({
      matches: false,
      media: '(prefers-color-scheme: dark)',
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    });
    expect(getPreferredTheme()).toBe('light');
  });
});
