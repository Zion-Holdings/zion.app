import { render, fireEvent, waitFor } from '@testing-library/react'; // Added waitFor
import { ModeToggle } from '@/components/ModeToggle';
import { ThemeProvider } from '@/context/ThemeContext'; // Changed import path for ThemeProvider

it('applies dark class when toggled', async () => { // Made test async
  render(
    <ThemeProvider> {/* This ThemeProvider is now from @/context/ThemeContext */}
      <ModeToggle />
    </ThemeProvider>
  );

  const button = document.querySelector('button');
  fireEvent.click(button!);

  await waitFor(() => { // Added waitFor for the assertion
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });
});
