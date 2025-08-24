import { render, fireEvent } from '@testing-library/react';
import ThemeToggle from '@/components/ThemeToggle';
import { ThemeProvider } from '@/context/ThemeContext';

it('applies dark class when toggled', () => {
  render(
    <ThemeProvider>
      <ThemeToggle />
    </ThemeProvider>
  );

  const button = document.querySelector('button');
  fireEvent.click(button!);
  expect(document.documentElement.classList.contains('dark')).toBe(true);
});
