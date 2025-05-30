import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { RewardsWidget } from '@/components/RewardsWidget';
import * as auth from '@/hooks/useAuth';
import { vi } from 'vitest';

describe('RewardsWidget', () => {
  it('opens rewards summary when authenticated', () => {
    vi.spyOn(auth, 'useAuth').mockReturnValue({ user: { id: '1' } } as any);

    render(
      <MemoryRouter>
        <RewardsWidget />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole('button', { name: /rewards/i }));

    expect(screen.getByText(/your rewards/i)).toBeInTheDocument();
  });

  it('shows login modal when not authenticated', () => {
    vi.spyOn(auth, 'useAuth').mockReturnValue({ user: null } as any);

    render(
      <MemoryRouter>
        <RewardsWidget />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole('button', { name: /rewards/i }));

    expect(screen.getByText(/welcome back/i)).toBeInTheDocument();
  });
});
