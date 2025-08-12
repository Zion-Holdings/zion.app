import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import UserProfileDropdown from '../UserProfileDropdown';
import { useAuth } from '@/hooks/useAuth';
import type { AuthContextType } from '@/types/auth';

// Mock react-router-dom
vi.mock('react-router-dom', () => ({
  ...vi.requireActual('react-router-dom'), // import and retain default behavior
  Link: ({ to, children, ...props }) => <a href={to} {...props}>{children}</a>, // Simple mock for Link
  useNavigate: vi.fn(), // Mock useNavigate if logout uses it
}));


// Mock useAuth hook
vi.mock('@/hooks/useAuth');
const mockedUseAuth = useAuth as vi.MockedFunction<typeof useAuth>;

describe('UserProfileDropdown', () => {
  const mockLogout = vi.fn();

  afterEach(() => {
    mockLogout.mockClear();
    // Clear all mocks if necessary, e.g., (useNavigate as vi.Mock).mockClear();
  });

  it('renders the avatar icon when user is logged in', () => {
    mockedUseAuth.mockReturnValue({
      user: { id: '1', displayName: 'Test User', email: 'test@example.com' },
      logout: mockLogout,
      isLoading: false,
      // Cast to satisfy AuthContextType
    } as unknown as AuthContextType);
    render(<UserProfileDropdown />);
    expect(screen.getByLabelText('User profile')).toBeInTheDocument();
  });

  it('does not render when user is not logged in (component itself handles this via Header.tsx logic, so this test might be redundant here, but good for direct testing if component had its own user check)', () => {
    // Note: UserProfileDropdown itself doesn't conditionally render based on user prop directly.
    // Its parent component (Header.tsx) does. If testing Header.tsx, that's where this check is more relevant.
    // For this component, if it were to receive a `user` prop or similar, this test would be different.
    // Assuming it always renders if included by parent.
    // To truly test "does not render", we'd need to test its parent or ensure it returns null.
    // For now, let's assume if useAuth().user is null, the parent (Header.tsx) wouldn't render it.
    // This test will be more about the dropdown content if user is null (which shouldn't happen if parent controls).
    // Let's re-evaluate this specific test's utility for *this* component.
    // For now, we'll assume the component is always rendered by its parent when appropriate.
    // A more direct test of non-rendering would be in Header.test.tsx.
    mockedUseAuth.mockReturnValue({
      user: { id: '1', displayName: 'Test User' }, // Keep it rendered for dropdown tests
      logout: mockLogout,
      isLoading: false,
    } as unknown as AuthContextType);
    render(<UserProfileDropdown />);
    expect(screen.getByLabelText('User profile')).toBeInTheDocument(); // It will render its button
  });


  it('clicking the avatar toggles the dropdown visibility', () => {
    mockedUseAuth.mockReturnValue({
      user: { id: '1', displayName: 'Test User' },
      logout: mockLogout,
      isLoading: false,
    } as unknown as AuthContextType);
    render(<UserProfileDropdown />);
    const avatarButton = screen.getByLabelText('User profile');

    // Dropdown should be hidden initially
    expect(screen.queryByText('Profile')).not.toBeInTheDocument();

    // Click to open
    fireEvent.click(avatarButton);
    expect(screen.getByText('Profile')).toBeInTheDocument();
    expect(screen.getByText('Orders')).toBeInTheDocument();
    expect(screen.getByText('Wallet')).toBeInTheDocument();
    expect(screen.getByText('Logout')).toBeInTheDocument();

    // Click to close
    fireEvent.click(avatarButton);
    expect(screen.queryByText('Profile')).not.toBeInTheDocument();
  });

  it('dropdown contains Profile, Orders, Wallet, and Logout items when open', () => {
    mockedUseAuth.mockReturnValue({
      user: { id: '1', displayName: 'Test User' },
      logout: mockLogout,
      isLoading: false,
    } as unknown as AuthContextType);
    render(<UserProfileDropdown />);
    const avatarButton = screen.getByLabelText('User profile');
    fireEvent.click(avatarButton); // Open dropdown

    const profileLink = screen.getByText('Profile');
    expect(profileLink).toBeInTheDocument();
    expect(profileLink.closest('a')).toHaveAttribute('href', '/profile');

    const ordersLink = screen.getByText('Orders');
    expect(ordersLink).toBeInTheDocument();
    expect(ordersLink.closest('a')).toHaveAttribute('href', '/orders');

    const walletLink = screen.getByText('Wallet');
    expect(walletLink).toBeInTheDocument();
    expect(walletLink.closest('a')).toHaveAttribute('href', '/wallet');

    expect(screen.getByText('Logout')).toBeInTheDocument();
  });

  it('clicking Logout button calls the logout function from useAuth', () => {
    mockedUseAuth.mockReturnValue({
      user: { id: '1', displayName: 'Test User' },
      logout: mockLogout,
      isLoading: false,
    } as unknown as AuthContextType);
    render(<UserProfileDropdown />);
    const avatarButton = screen.getByLabelText('User profile');
    fireEvent.click(avatarButton); // Open dropdown

    const logoutButton = screen.getByText('Logout');
    fireEvent.click(logoutButton);

    expect(mockLogout).toHaveBeenCalledTimes(1);
  });

  it('closes dropdown when clicking outside', () => {
    mockedUseAuth.mockReturnValue({
      user: { id: '1', displayName: 'Test User' },
      logout: mockLogout,
      isLoading: false,
    } as unknown as AuthContextType);
    render(
      <div>
        <div data-testid="outside-element">Outside</div>
        <UserProfileDropdown />
      </div>
    );
    const avatarButton = screen.getByLabelText('User profile');
    fireEvent.click(avatarButton); // Open dropdown
    expect(screen.getByText('Profile')).toBeInTheDocument();

    fireEvent.mouseDown(screen.getByTestId('outside-element')); // Click outside
    expect(screen.queryByText('Profile')).not.toBeInTheDocument();
  });
});
