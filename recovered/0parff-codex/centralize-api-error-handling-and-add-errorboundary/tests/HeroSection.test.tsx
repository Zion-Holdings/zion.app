import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HeroSection } from '@/components/HeroSection';
import * as router from 'react-router-dom';
import { vi } from 'vitest';

test('clicking Sign Up navigates to /signup', () => {
  const navigateMock = vi.fn();
  vi.spyOn(router, 'useNavigate').mockReturnValue(navigateMock);

  render(
    <MemoryRouter>
      <HeroSection />
    </MemoryRouter>
  );

  fireEvent.click(screen.getByTestId('hero-signup-btn'));

  expect(navigateMock).toHaveBeenCalledWith('/signup', expect.any(Object));
});
