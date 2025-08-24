import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { PaymentButton } from '@/components/transactions/PaymentButton';
import * as router from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

jest.mock('@/hooks/useAuth', () => ({
  useAuth: () => ({ isAuthenticated: false })
}));

jest.mock('@/hooks/use-toast', () => ({
  toast: {
    error: jest.fn(),
  }
}));

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: jest.fn(),
}));

describe('MarketplaceCard Buy Now', () => {
  it('navigates to login when unauthenticated', () => {
    const navigateMock = jest.fn();
    (router.useNavigate as jest.Mock).mockReturnValue(navigateMock);

    render(
      <MemoryRouter>
        <PaymentButton amount={10} serviceId="1" providerId="2" />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole('button'));
    expect(navigateMock).toHaveBeenCalledWith('/login', { state: { from: '/' } });
  });
});

