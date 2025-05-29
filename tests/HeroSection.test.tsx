import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HeroSection } from '@/components/HeroSection';
import * as router from 'react-router-dom'; // Keep for types if vi.mock needs it
import { vi } from 'vitest';

const navigateMock = vi.fn();

vi.mock('react-router-dom', async (importOriginal) => {
  const actual = await importOriginal<typeof router>();
  return {
    ...actual, // Preserve other exports from react-router-dom
    useNavigate: () => navigateMock, // Mock useNavigate to return our vi.fn()
  };
});

describe('HeroSection', () => { // Added describe block for beforeEach
  beforeEach(() => {
    navigateMock.mockClear(); // Clear mock before each test
  });

  test('clicking Sign Up navigates to /signup', () => {
    render(
      <MemoryRouter>
        <HeroSection />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByTestId('hero-signup-btn'));

    // The original test used expect.any(Object) for the second arg.
    // If options are passed to navigate, that's correct.
    // If not, it might just be called with '/signup'.
    // For now, I'll keep it flexible or assume options might be passed.
    // Let's stick to the original assertion's structure if it was passing before.
    // However, usually, it's navigate('/path') or navigate('/path', { state: ... })
    // For a simple redirect, often it's just the path.
    // Given the error was about redefining, not this assertion, I'll keep it as is.
    expect(navigateMock).toHaveBeenCalledWith('/signup', expect.any(Object));
  });
});
