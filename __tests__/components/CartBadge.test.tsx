import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PrimaryNav from '@/layout/PrimaryNav';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

const mockStore = configureStore([]);

function renderWithStore(cartItems: any[]) {
  const store = mockStore({ cart: { items: cartItems } });
  return render(
    <MemoryRouterProvider>
      <Provider store={store}>
        <PrimaryNav />
      </Provider>
    </MemoryRouterProvider>
  );
}

describe('Cart badge count', () => {
  it('shows updated count', () => {
    const items = [
      { id: 'service-4', name: 'Service', price: 10, quantity: 2 },
      { id: 'service-3', name: 'Service2', price: 5, quantity: 1 },
    ];
    renderWithStore(items);
    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('shows mini cart preview on hover', async () => {
    const items = [
      { id: '1', name: 'A', price: 5, quantity: 1 },
    ];
    const user = userEvent.setup();
    renderWithStore(items);
    await user.hover(screen.getByLabelText(/Cart/i));
    expect(screen.getByText('Subtotal')).toBeInTheDocument();
  });
});
