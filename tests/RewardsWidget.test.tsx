import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { RewardsWidget } from '@/components/RewardsWidget';
import * as auth from '@/hooks/useAuth';
// import { vi } from 'vitest'; // Removed Vitest import

describe('RewardsWidget', () => {
  it('opens rewards summary when authenticated', () => {
    jest.spyOn(auth, 'useAuth').mockReturnValue({ user: { id: '1', points: 150 } } as any); // Changed vi.spyOn to jest.spyOn

    render(
      <MemoryRouter>
        <RewardsWidget />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole('button', { name: /rewards/i }));

    expect(screen.getByText(/your rewards/i)).toBeInTheDocument();
    expect(screen.getByText('Points: 150')).toBeInTheDocument();
  });

  it('shows login modal when not authenticated', () => {
    jest.spyOn(auth, 'useAuth').mockReturnValue({ user: null } as any); // Changed vi.spyOn to jest.spyOn

    render(
      <MemoryRouter>
        <RewardsWidget />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole('button', { name: /rewards/i }));

    expect(screen.getByText(/welcome back/i)).toBeInTheDocument();
  });
});
