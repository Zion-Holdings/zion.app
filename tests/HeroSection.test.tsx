import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HeroSection } from '@/components/HeroSection';
import * as router from 'react-router-dom';

test('clicking Sign Up navigates to /signup', () => {
  const navigateMock = jest.fn();
  jest.spyOn(router, 'useNavigate').mockReturnValue(navigateMock);

  render(
    <MemoryRouter>
      <HeroSection />
    </MemoryRouter>
  );

  fireEvent.click(screen.getByTestId('hero-signup-btn'));

  expect(navigateMock).toHaveBeenCalledWith('/signup', expect.any(Object));
});
