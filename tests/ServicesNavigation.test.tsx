import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { MainNavigation } from '@/components/header/MainNavigation';
import { FeatureCTAs } from '@/components/home/FeatureCTAs';
import * as router from 'react-router-dom';
import { vi } from 'vitest';

const navigateMock = vi.fn();

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<typeof router>('react-router-dom');
  return {
    ...actual,
    useNavigate: () => navigateMock,
  };
});

describe('Services navigation links', () => {
  beforeEach(() => {
    navigateMock.mockClear();
  });

  test('MainNavigation Services link navigates to /services', () => {
    render(
      <MemoryRouter>
        <MainNavigation />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByLabelText('Services'));
    expect(navigateMock).toHaveBeenCalledWith('/services', expect.any(Object));
  });

  test('Explore Services button navigates to /services', () => {
    render(
      <MemoryRouter>
        <FeatureCTAs />
      </MemoryRouter>
    );

    fireEvent.click(
      screen.getByRole('link', { name: /explore services marketplace/i })
    );
    expect(navigateMock).toHaveBeenCalledWith('/services', expect.any(Object));
  });
});
