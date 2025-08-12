import { render, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '@/components/ThemeProvider';
import { ModeToggle } from '@/components/ModeToggle';

beforeEach(() => {
  localStorage.clear();
  window.matchMedia = window.matchMedia || jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }));
});

test('stores selected theme in localStorage', () => {
  render(
    <ThemeProvider>
      <ModeToggle />
    </ThemeProvider>
  );

  const button = document.querySelector('button')!;
  fireEvent.click(button);

  expect(localStorage.getItem('theme')).toBe('dark');
});
