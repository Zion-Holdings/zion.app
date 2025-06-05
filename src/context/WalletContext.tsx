// src/context/WalletContext.tsx

// Definition of getAppKitProjectId
const getAppKitProjectId = (): string | undefined => {
  return import.meta.env.VITE_REOWN_PROJECT_ID;
};

import React, { createContext, useState, useContext, ReactNode, useCallback, useEffect, useRef } from 'react';
import { ethers } from 'ethers';
import { captureException } from '@/utils/sentry';
import { ZION_TOKEN_NETWORK_ID } from '@/config/governanceConfig';
import { createAppKit, AppKitInstanceInterface } from '@reown/appkit/react'; // useAppKit removed as it's not used
import { EthersAdapter } from '@reown/appkit-adapter-ethers';
import { mainnet, polygon, goerli, optimism, arbitrum, base } from '@reown/appkit/networks';

interface Eip1193ProviderWithEvents extends ethers.Eip1193Provider {
  on?: (event: string, listener: (...args: any[]) => void) => void;
  removeListener?: (event: string, listener: (...args: any[]) => void) => void;
}

export interface WalletState {
  provider: ethers.BrowserProvider | null;
  signer: ethers.Signer | null;
  address: string | null;
  chainId: number | null;
  isConnected: boolean;
  isWalletSystemAvailable: boolean;
}

export interface WalletContextType extends WalletState {
  connectWallet: () => Promise<void>;
  disconnectWallet: () => Promise<void>;
  displayAddress: string | null;
  appKit: AppKitInstanceInterface | null;
}

const initialWalletState: WalletState = {
  provider: null,
  signer: null,
  address: null,
  chainId: null,
  isConnected: false,
  isWalletSystemAvailable: false,
};

const WalletContext = createContext<WalletContextType | undefined>(undefined);

const KNOWN_INVALID_PROJECT_IDS = [
  'YOUR_PROJECT_ID',
  'dummy',
  'fallback',
];

// --- Module-scoped Reown AppKit Configuration Variables ---
const rawProjectId = getAppKitProjectId();
console.log('WalletContext: Resolved rawProjectId from getAppKitProjectId():', rawProjectId);

const isProjectIdValid = rawProjectId && !KNOWN_INVALID_PROJECT_IDS.includes(rawProjectId);

if (!isProjectIdValid && typeof window !== 'undefined') { // Only warn in client-side environments
  console.warn(
    `WalletContext: Invalid or placeholder project ID detected: "${rawProjectId}". Wallet system will be unavailable.`
  );
}

const metadata = {
  name: 'Zion',
  description: 'Zion Finance Platform',
  url: typeof window !== 'undefined' ? window.location.origin : 'https://example.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
};

const ZION_CHAIN_MAP: Record<number, any> = {
  1: mainnet,
  5: goerli,
  137: polygon,
  // 10: optimism,
  // 42161: arbitrum,
  // 8453: base,
};

const targetNetwork = ZION_CHAIN_MAP[ZION_TOKEN_NETWORK_ID] || mainnet;

// --- WalletProvider Component ---
export const WalletProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  console.log('WalletProvider: Initializing...');

  const appKitRef = useRef<AppKitInstanceInterface | null>(null);
  const [wallet, setWallet] = useState<WalletState>({
    ...initialWalletState,
    // isWalletSystemAvailable will be updated by the useEffect below,
    // or set based on isProjectIdValid early on for SSR or invalid ID cases.
    isWalletSystemAvailable: typeof window !== 'undefined' && isProjectIdValid,
  });

  useEffect(() => {
    if (typeof window !== 'undefined' && isProjectIdValid && !appKitRef.current) {
      try {
        appKitRef.current = createAppKit({
          adapters: [new EthersAdapter({ ethers })],
          networks: [targetNetwork],
          defaultNetwork: targetNetwork,
          projectId: rawProjectId, // Use the validated rawProjectId
          metadata,
          features: { analytics: false },
        });
        console.log('WalletContext: appKitInstance created successfully via appKitRef:', appKitRef.current);
        setWallet(prev => ({ ...prev, isWalletSystemAvailable: !!appKitRef.current }));
      } catch (error) {
        console.error('WalletContext: Error creating appKitInstance via appKitRef:', error);
        captureException(error);
        appKitRef.current = null;
        setWallet(prev => ({ ...prev, isWalletSystemAvailable: false }));
      }
    } else if (typeof window === 'undefined') {
      console.log('WalletContext: SSR environment, AppKit not initialized.');
      // isWalletSystemAvailable already set to false via initial state for SSR if window is undefined
    } else if (!isProjectIdValid) {
      console.warn('WalletContext: AppKit not initialized due to invalid project ID.');
      // isWalletSystemAvailable already set to false via initial state
    }
  }, []); // Dependencies: rawProjectId, metadata, targetNetwork are module-scoped and stable. isProjectIdValid is also stable.

  const updateWalletState = useCallback(async () => {
    const currentAppKit = appKitRef.current;

    if (!currentAppKit) {
      setWallet(prev => ({
        ...initialWalletState,
        isWalletSystemAvailable: false, // AppKit not available
      }));
      return;
    }

    const { isConnected: kitIsConnected } = currentAppKit.getState();
    const kitAddress = currentAppKit.getAddress();
    const kitChainId = currentAppKit.getChainId();
    const kitProvider = currentAppKit.getWalletProvider();

    if (kitIsConnected && kitAddress && kitChainId && kitProvider) {
      try {
        const ethersProvider = new ethers.BrowserProvider(kitProvider as Eip1193ProviderWithEvents);
        const ethersSigner = await ethersProvider.getSigner();
        setWallet({ // Not prev, set full state based on kit
          provider: ethersProvider,
          signer: ethersSigner,
          address: kitAddress,
          chainId: Number(kitChainId),
          isConnected: true,
          isWalletSystemAvailable: true,
        });
      } catch (error) {
        captureException(error);
        console.error('WalletContext: Error getting signer or updating wallet state:', error);
        setWallet(prev => ({
          ...initialWalletState,
          isConnected: false, // Ensure disconnected state on error
          isWalletSystemAvailable: true, // System was available, but connection failed
        }));
      }
    } else {
      setWallet(prev => ({
        ...initialWalletState,
        isConnected: false, // Ensure disconnected if kit says so
        isWalletSystemAvailable: true, // System is available, just not connected
      }));
    }
  }, []); // appKitRef is stable, so appKitRef.current changes don't trigger re-creation of this callback.

  useEffect(() => {
    const targetAppKitInstance = appKitRef.current;
    console.log('WalletContext: useEffect for subscriptions using targetAppKitInstance:', targetAppKitInstance ? 'instance available' : 'no instance');

    if (targetAppKitInstance && typeof targetAppKitInstance.subscribeProvider === 'function') {
      console.log('WalletContext: Using subscribeProvider for provider changes.');
      updateWalletState(); // Initial state update
      const unsubscribe = targetAppKitInstance.subscribeProvider(updateWalletState); // Pass callback directly
      return () => unsubscribe();
    } else if (targetAppKitInstance) {
      console.error('WalletContext: subscribeProvider is not available. Attempting on/off fallback.', targetAppKitInstance);
      if (typeof targetAppKitInstance.on === 'function' && typeof targetAppKitInstance.off === 'function') {
        updateWalletState();
        targetAppKitInstance.on('providerChanged', updateWalletState);
        return () => targetAppKitInstance.off?.('providerChanged', updateWalletState);
      } else {
        console.error('WalletContext: on/off methods also not available for fallback.');
        setWallet(prev => ({ ...prev, isWalletSystemAvailable: false, isConnected: false }));
      }
    } else {
      console.warn('WalletContext: AppKit instance is null. Unable to subscribe. Wallet system likely unavailable.');
      setWallet(prev => ({ ...initialWalletState, isWalletSystemAvailable: false }));
    }
  }, [updateWalletState]); // updateWalletState is memoized.

  const connectWallet = useCallback(async () => {
    if (!wallet.isWalletSystemAvailable || !appKitRef.current) {
      console.warn('WalletContext: connectWallet called but wallet system is not available.');
      return;
    }
    try {
      await appKitRef.current.open();
    } catch (error: any) {
      captureException(error);
      console.error('WalletContext: Error opening wallet modal:', error);
      if (error instanceof Error && /Coinbase Wallet SDK/i.test(error.message)) {
        console.warn('Failed to load Coinbase Wallet. Ensure SDK is available or try another provider.');
      }
    }
  }, [wallet.isWalletSystemAvailable]); // appKitRef is stable

  const disconnectWallet = useCallback(async () => {
    if (!wallet.isWalletSystemAvailable || !appKitRef.current) {
      console.warn('WalletContext: disconnectWallet called but wallet system is not available.');
      return;
    }
    if (appKitRef.current.getState().isConnected) {
      try {
        await appKitRef.current.disconnect();
      } catch (error) {
        captureException(error);
        console.error('WalletContext: Error disconnecting wallet:', error);
      }
    } else {
      console.log('WalletContext: disconnectWallet called but already disconnected or appKit not ready.');
    }
  }, [wallet.isWalletSystemAvailable]); // appKitRef is stable

  const displayAddress = wallet.address
    ? `${wallet.address.substring(0, 6)}...${wallet.address.substring(wallet.address.length - 4)}`
    : null;

  return (
    <WalletContext.Provider value={{ ...wallet, connectWallet, disconnectWallet, displayAddress, appKit: appKitRef.current }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = (): WalletContextType => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};
