import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Checkout from '@/pages/Checkout';
import { vi } from 'vitest';
import * as authHook from '@/hooks/useAuth';
import * as stripeUtil from '@/utils/getStripe';


describe('Guest checkout flow', () => {
  it('redirects to Stripe with session id', async () => {
    vi.spyOn(authHook, 'useAuth').mockReturnValue({ user: null } as any);

    const redirectMock = vi.fn();
    vi.spyOn(stripeUtil, 'getStripe').mockResolvedValue({ redirectToCheckout: redirectMock } as any);

    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      json: () => Promise.resolve({ sessionId: 'sess_123' })
    } as any));

    render(
      <MemoryRouter>
        <Checkout />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole('button', { name: /buy now/i }));

    fireEvent.input(screen.getByLabelText(/email/i), { target: { value: 't@e.com' } });
    fireEvent.input(screen.getByLabelText(/shipping address/i), { target: { value: '123 St' } });
    fireEvent.submit(screen.getByRole('button', { name: /checkout/i }));

    await waitFor(() => {
      expect(redirectMock).toHaveBeenCalledWith({ sessionId: 'sess_123' });
    });
  });
});
