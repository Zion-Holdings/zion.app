import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { PointsBadge } from '@/components/loyalty/PointsBadge';
import { useAuth } from '@/hooks/useAuth';
import { usePoints } from '@/hooks/usePoints';

jest.mock('@/hooks/useAuth');
jest.mock('@/hooks/usePoints');

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Link: ({ to, children, ...props }: any) => (
    <a href={to} {...props}>{children}</a>
  )
}));

const mockedUseAuth = useAuth as jest.MockedFunction<typeof useAuth>;
const mockedUsePoints = usePoints as jest.MockedFunction<typeof usePoints>;

describe('PointsBadge', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('does not render when no user', () => {
    mockedUseAuth.mockReturnValue({ user: null } as any);
    mockedUsePoints.mockReturnValue({ ledger: [], balance: 0 } as any);

    render(
      <MemoryRouter>
        <PointsBadge />
      </MemoryRouter>
    );

    expect(screen.queryByText(/pts/)).not.toBeInTheDocument();
  });

  it('shows menu items when clicked', () => {
    mockedUseAuth.mockReturnValue({ user: { id: '1' }, signOut: jest.fn() } as any);
    mockedUsePoints.mockReturnValue({ ledger: [], balance: 12 } as any);

    render(
      <MemoryRouter>
        <PointsBadge />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByText('Profile')).toBeInTheDocument();
    expect(screen.getByText('Orders')).toBeInTheDocument();
    expect(screen.getByText('Logout')).toBeInTheDocument();
  });

  it('calls signOut on Logout click', () => {
    const signOut = jest.fn();
    mockedUseAuth.mockReturnValue({ user: { id: '1' }, signOut } as any);
    mockedUsePoints.mockReturnValue({ ledger: [], balance: 5 } as any);

    render(
      <MemoryRouter>
        <PointsBadge />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole('button'));
    fireEvent.click(screen.getByText('Logout'));

    expect(signOut).toHaveBeenCalled();
  });
});
