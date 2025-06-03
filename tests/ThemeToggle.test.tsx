import { render, fireEvent } from '@testing-library/react';
import { ModeToggle } from '@/components/ModeToggle'; // Corrected import
import { ThemeProvider } from '@/components/ThemeProvider';

it('applies dark class when toggled', () => {
  render(
    <ThemeProvider>
      <ModeToggle /> {/* Corrected component name */}
    </ThemeProvider>
  );

  const button = document.querySelector('button');
  fireEvent.click(button!);
  expect(document.documentElement.classList.contains('dark')).toBe(true);
});
