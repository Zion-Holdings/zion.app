import { render, screen } from '@testing-library/react';
import WalletPage from '@/pages/Wallet';
import * as useWalletHook from '@/hooks/useWallet';

describe('WalletPage', () => {
  it('renders balance heading', () => {
    jest.spyOn(useWalletHook, 'useWallet').mockReturnValue({
      wallet: { user_id: '1', balance: 100, updated_at: '' },
      transactions: [],
      loading: false,
      fetchWallet: jest.fn(),
      fetchTransactions: jest.fn(),
      earnTokens: jest.fn(),
      spendTokens: jest.fn(),
    } as any);

    render(<WalletPage />);
    expect(
      screen.getByRole('heading', { name: /balance/i })
    ).toBeInTheDocument();
  });
});
