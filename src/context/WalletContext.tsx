import React, {
  createContext,
  useState,
  useContext,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import type { ReactNode } from 'react';

// Define the shape of the wallet state and context
export interface WalletState {
  provider: unknown | null;
  signer: unknown | null;
  address: string | null;
  chainId: number | null;
  isConnected: boolean;
  isWalletSystemAvailable: boolean;
}

export interface WalletContextType extends WalletState {
  connectWallet: () => Promise<void>;
  disconnectWallet: () => Promise<void>;
  displayAddress: string | null;
  appKit: any | null;
}

const initialWalletState: WalletState = {
  provider: null,
  signer: null,
  address: null,
  chainId: null,
  isConnected: false,
  isWalletSystemAvailable: false,
};

export const WalletContext = createContext<WalletContextType | undefined>(
  undefined,
);

// Provide a safe default context
const defaultWalletContext: WalletContextType = {
  ...initialWalletState,
  connectWallet: async () => {},
  disconnectWallet: async () => {},
  displayAddress: null,
  appKit: null,
};

export const WalletProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [wallet, setWallet] = useState<WalletState>({
    ...initialWalletState,
    isWalletSystemAvailable: false,
  });

  const connectWallet = useCallback(async () => {
    console.log('Wallet connection requested');
    // Placeholder for wallet connection logic
    setWallet(prev => ({
      ...prev,
      isConnected: false,
      isWalletSystemAvailable: true,
    }));
  }, []);

  const disconnectWallet = useCallback(async () => {
    console.log('Wallet disconnection requested');
    setWallet(prev => ({
      ...prev,
      isConnected: false,
      address: null,
      provider: null,
      signer: null,
      chainId: null,
    }));
  }, []);

  const displayAddress = wallet.address
    ? `${wallet.address.substring(0, 6)}...${wallet.address.substring(wallet.address.length - 4)}`
    : null;

  return (
    <WalletContext.Provider
      value={{
        ...wallet,
        connectWallet,
        disconnectWallet,
        displayAddress,
        appKit: null,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = (): WalletContextType => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    console.error('useWallet must be used within a WalletProvider');
    return defaultWalletContext;
  }
  return context;
};