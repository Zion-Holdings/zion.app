import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import ConnectWalletButton from './ConnectWalletButton';
import { useWallet } from '@/context/WalletContext';

// Mock @/hooks/useAuth - Not used by this component, but was in initial template. Remove if confirmed unused.
// Actually, ConnectWalletButton uses useAuth()! So keep it.
const mockUseAuthInner = jest.fn(); // Renamed to avoid conflict with the outer mockUseAuth
jest.mock('@/hooks/useAuth', () => ({
  useAuth: () => mockUseAuthInner(),
}));


// Mock @/context/WalletContext
const mockUseWalletContext = jest.fn();
jest.mock('@/context/WalletContext', () => ({
  useWallet: () => mockUseWalletContext(),
}));


// Mock Notification API - Not directly used by ConnectWalletButton, but by ChatWidget which might be related if tests bleed.
// For ConnectWalletButton itself, this is not strictly needed.
const mockShowNotification = jest.fn();
const mockGetRegistration = jest.fn().mockResolvedValue({
  showNotification: mockShowNotification,
});
global.Notification = {
  permission: 'granted',
  requestPermission: jest.fn().mockResolvedValue('granted'),
} as any;
Object.defineProperty(global.navigator, 'serviceWorker', {
  value: {
    getRegistration: mockGetRegistration,
  },
  writable: true,
});


describe('ConnectWalletButton', () => {
  const mockConnectWalletFn = jest.fn(() => Promise.resolve()); // Ensure it's a promise if component awaits
  const mockDisconnectWalletFn = jest.fn();

  const disconnectedState = {
    isConnected: false,
    connectWallet: mockConnectWalletFn,
    disconnectWallet: mockDisconnectWalletFn,
    displayAddress: '',
    address: '',
    chainId: null,
    user: null, // Assuming useWallet might also provide user or ConnectWalletButton uses useAuth for it
    loading: false,
  };

  const connectedUserState = {
    id: 'test-user-id',
    // ... other user properties if needed by ConnectWalletButton via useAuth
  };

  const connectedWalletState = {
    isConnected: true,
    connectWallet: mockConnectWalletFn,
    disconnectWallet: mockDisconnectWalletFn,
    displayAddress: '0x123...abc',
    address: '0x1234567890abcdef1234567890abcdef12345678',
    chainId: 1,
    user: connectedUserState,
    loading: false,
  };


  beforeEach(() => {
    jest.clearAllMocks();
    // Default to disconnected state with no user for useAuth
    mockUseAuthInner.mockReturnValue({ user: null, loading: false });
    mockUseWalletContext.mockReturnValue(disconnectedState);
  });

  describe('When not connected', () => {
    it('should render "Connect Wallet" button', () => {
      render(<ConnectWalletButton />);
      expect(screen.getByRole('button', { name: /connect wallet/i })).toBeInTheDocument();
      expect(screen.queryByText(/connected:/i)).not.toBeInTheDocument();
      expect(screen.queryByRole('button', { name: /disconnect wallet/i })).not.toBeInTheDocument();
    });

    it('should call connectWallet when "Connect Wallet" button is clicked', () => {
      render(<ConnectWalletButton />);
      const connectButton = screen.getByRole('button', { name: /connect wallet/i });
      fireEvent.click(connectButton);
      expect(mockConnectWalletFn).toHaveBeenCalledTimes(1);
    });
  });

  describe('When connected', () => {
    beforeEach(() => {
      // Set up for connected state for both hooks
      mockUseAuthInner.mockReturnValue({ user: connectedUserState, loading: false });
      mockUseWalletContext.mockReturnValue(connectedWalletState);
    });

    it('should render connected address, ZION$ balance placeholder, and "Disconnect Wallet" button', () => {
      render(<ConnectWalletButton />);
      expect(screen.getByText(`Connected: ${connectedWalletState.displayAddress}`)).toBeInTheDocument();
      // ZION$ balance is set to "N/A" in useEffect after a brief moment
      expect(screen.getByText('ZION$: N/A')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /disconnect wallet/i })).toBeInTheDocument();

      // Use a more precise regex to avoid matching "Disconnect Wallet"
      const connectWalletButton = screen.queryByRole('button', { name: /^connect wallet$/i });
      if (connectWalletButton) {
        // This console.log should ideally not be hit now
        console.log("DEBUG: Connect Wallet button found when it shouldn't be:", connectWalletButton.outerHTML);
      }
      // screen.debug(undefined, 30000); // Keep for debugging if it still fails
      expect(connectWalletButton).not.toBeInTheDocument();
    });

    it('should call disconnectWallet when "Disconnect Wallet" button is clicked', () => {
      render(<ConnectWalletButton />);
      const disconnectButton = screen.getByRole('button', { name: /disconnect wallet/i });
      fireEvent.click(disconnectButton);
      expect(mockDisconnectWalletFn).toHaveBeenCalledTimes(1);
    });

    it('useEffect for ZION$ balance should log and set placeholder', () => {
      const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
      render(<ConnectWalletButton />);

      expect(consoleLogSpy).toHaveBeenCalledWith(
        `Fetching ZION$ balance for ${connectedWalletState.address} on chain ${connectedWalletState.chainId}`
      );
      expect(screen.getByText('ZION$: N/A')).toBeInTheDocument();
      consoleLogSpy.mockRestore();
    });

    it('should clear ZION$ balance if isConnected becomes false', () => {
      const { rerender } = render(<ConnectWalletButton />);
      expect(screen.getByText('ZION$: N/A')).toBeInTheDocument();

      mockUseWalletContext.mockReturnValue({
        ...connectedWalletState,
        isConnected: false,
        address: '',
        displayAddress: '',
        user: null, // Also update user for consistency if useAuth is used by balance effect
      });
      mockUseAuthInner.mockReturnValue({user: null, loading: false}); // Reflect disconnected user state

      rerender(<ConnectWalletButton />);

      expect(screen.queryByText(/ZION\$:/i)).not.toBeInTheDocument();
    });
  });
});
