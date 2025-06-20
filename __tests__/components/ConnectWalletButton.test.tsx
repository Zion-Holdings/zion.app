import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ConnectWalletButton from '@/components/ConnectWalletButton';
import { useWallet } from '@/context/WalletContext';
import { useTokenBalance } from '@/hooks/useTokenBalance';

jest.mock('@/context/WalletContext');
jest.mock('@/hooks/useTokenBalance');

const mockUseWallet = useWallet as jest.Mock;
const mockUseTokenBalance = useTokenBalance as jest.Mock;

describe('ConnectWalletButton', () => {
  test('renders connect button when disconnected', () => {
    const connectWallet = jest.fn();
    mockUseWallet.mockReturnValue({
      isConnected: false,
      connectWallet,
      disconnectWallet: jest.fn(),
      displayAddress: null,
      address: null,
      chainId: null,
      provider: null,
    });
    mockUseTokenBalance.mockReturnValue(null);

    render(<ConnectWalletButton />);
    const button = screen.getByText('Connect Wallet');
    fireEvent.click(button);
    expect(connectWallet).toHaveBeenCalled();
  });

  test('shows address and disconnect button when connected', () => {
    const disconnectWallet = jest.fn();
    mockUseWallet.mockReturnValue({
      isConnected: true,
      connectWallet: jest.fn(),
      disconnectWallet,
      displayAddress: '0x1234...abcd',
      address: '0x1234',
      chainId: 1,
      provider: {},
    });
    mockUseTokenBalance.mockReturnValue('100');

    render(<ConnectWalletButton />);
    expect(screen.getByText(/Connected:/)).toBeInTheDocument();
    const button = screen.getByText('Disconnect Wallet');
    fireEvent.click(button);
    expect(disconnectWallet).toHaveBeenCalled();
  });
});
