import { render, screen, fireEvent, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import EquipmentDetail from '@/pages/EquipmentDetail';
import { safeStorage } from '@/utils/safeStorage';
import * as router from 'react-router-dom';

jest.mock('@/hooks/useAuth', () => ({ useAuth: () => ({ isAuthenticated: true }) }));
jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useParams: jest.fn(),
  useNavigate: jest.fn(),
}));

describe('Equipment Add to Cart', () => {
  beforeEach(() => {
    (router.useParams as jest.Mock).mockReturnValue({ id: '2u-rack-mount-server' });
    safeStorage.removeItem('cart');
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('increments quantity when adding the same item twice', () => {
    render(
      <MemoryRouter>
        <EquipmentDetail />
      </MemoryRouter>
    );

    const button = screen.getByRole('button', { name: /Add to Cart/i });
    fireEvent.click(button);
    act(() => {
      jest.runAllTimers();
    });

    const addedButton = screen.getByRole('button', { name: /Added/i });
    fireEvent.click(addedButton);
    act(() => {
      jest.runAllTimers();
    });

    const cart = JSON.parse(safeStorage.getItem('cart') || '[]');
    expect(cart).toHaveLength(1);
    expect(cart[0]).toEqual(
      expect.objectContaining({ id: '2u-rack-mount-server', quantity: 2 })
    );
  });
});
