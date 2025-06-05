// src/context/WalletContext.tsx


// Definition of getAppKitProjectId
const getAppKitProjectId = (): string | undefined => {
  return import.meta.env.VITE_REOWN_PROJECT_ID;
};

import React, { createContext, useState, useContext, ReactNode, useCallback, useEffect, useRef } from 'react';

import { ethers } from 'ethers';
import { captureException } from '@/utils/sentry';
import { ZION_TOKEN_NETWORK_ID } from '@/config/governanceConfig';
import { createAppKit, AppKitInstanceInterface } from '@reown/appkit/react';
import { EthersAdapter } from '@reown/appkit-adapter-ethers';
import { mainnet, polygon, goerli, optimism, arbitrum, base } from '@reown/appkit/networks'; // Import necessary chain objects

// Some injected wallet providers implement the EIP-1193 interface but also
// expose event methods like `on` and `removeListener`. The `ethers` type for
// `Eip1193Provider` does not include these, so we define a helper interface with
// optional definitions so we can safely check for them.
interface Eip1193ProviderWithEvents extends ethers.Eip1193Provider {
  on?: (event: string, listener: (...args: any[]) => void) => void;
  removeListener?: (event: string, listener: (...args: any[]) => void) => void;
}

// Define the shape of the wallet state and context
export interface WalletState { // Added export
  provider: ethers.BrowserProvider | null; // Updated to BrowserProvider for ethers v6
  signer: ethers.Signer | null;
  address: string | null;
  chainId: number | null;
  isConnected: boolean;
  isWalletSystemAvailable: boolean; // New state for wallet system availability
}

export interface WalletContextType extends WalletState { // Added export
  connectWallet: () => Promise<void>;
  disconnectWallet: () => Promise<void>; // disconnect can be async
  displayAddress: string | null; // Shortened address for display
  appKit: AppKitInstanceInterface | null; // To access modal.open, etc.
}

const initialWalletState: WalletState = {
  provider: null,
  signer: null,
  address: null,
  chainId: null,
  isConnected: false,
  isWalletSystemAvailable: false, // Initialize as false
};

export const WalletContext = createContext<WalletContextType | undefined>(undefined);


// Known default/fallback project IDs that indicate the wallet system should be considered unavailable
const KNOWN_INVALID_PROJECT_IDS = [
  'YOUR_PROJECT_ID', // Common placeholder
  'dummy',
  'fallback',
  'YOUR_DEFAULT_PROJECT_ID_ENV_MISSING',
  'YOUR_DEFAULT_PROJECT_ID_FALLBACK',
];

// --- Reown AppKit Configuration ---

// The entire first WalletProvider component (original lines 55-145) and
// the subsequent problematic block (original lines 147-180) have been removed.
// This is to ensure only one well-structured WalletProvider (the one using useRef,
// originally starting at line 181) remains.

export const WalletProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

  console.log('WalletProvider: Initializing...');

  const rawProjectId = getAppKitProjectId();
  console.log('WalletContext: Resolved rawProjectId from getAppKitProjectId():', rawProjectId);

  // Check if the project ID is valid
  const isProjectIdValid = rawProjectId && !KNOWN_INVALID_PROJECT_IDS.includes(rawProjectId);
  const projectId = rawProjectId; // The createAppKit call expects 'projectId'

  if (!isProjectIdValid) {
    console.warn(
      `WalletContext: Invalid or placeholder project ID detected: "${rawProjectId}". Wallet system will be unavailable.`
    );
  }

  const PLACEHOLDER_PROJECT_IDS = ['YOUR_DEFAULT_PROJECT_ID_ENV_MISSING', 'YOUR_DEFAULT_PROJECT_ID_FALLBACK'];
  if (projectId && PLACEHOLDER_PROJECT_IDS.includes(projectId)) {
      const errorMessage = 'WalletContext: Critical Error - Reown AppKit Project ID is not set or is a placeholder. Please set VITE_REOWN_PROJECT_ID environment variable.';
      console.error(errorMessage, 'Resolved Project ID:', projectId);
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
    10: optimism,
    42161: arbitrum,
    8453: base,
  };

  const targetNetwork = ZION_CHAIN_MAP[ZION_TOKEN_NETWORK_ID] || mainnet;

  const appKitRef = useRef<AppKitInstanceInterface | null>(null);

  // Initialize AppKit (this is the useEffect previously around line 180)
  useEffect(() => {
    if (typeof window === 'undefined') {
      console.log('WalletContext: SSR environment, AppKit not initialized.');
      appKitRef.current = null;
      setWallet(prev => ({ ...prev, isWalletSystemAvailable: false }));
      return;
    }

    if (isProjectIdValid) {
      if (!appKitRef.current) { // Check if already initialized
        console.log('WalletContext: Valid project ID. Attempting AppKit init. ID:', rawProjectId);
        try {
          appKitRef.current = createAppKit({
            adapters: [new EthersAdapter({ ethers })],
            networks: [targetNetwork],
            defaultNetwork: targetNetwork,
            projectId: rawProjectId, // Use the validated projectId
            metadata,
            features: { analytics: false },
          });
          console.log('WalletContext: appKitInstance created successfully:', appKitRef.current);
          setWallet(prev => ({ ...prev, isWalletSystemAvailable: !!appKitRef.current }));
        } catch (error) {
          console.error('WalletContext: CRITICAL error creating appKitInstance even with a valid Project ID:', error);
          captureException(error);
          appKitRef.current = null;
          setWallet(prev => ({ ...prev, isWalletSystemAvailable: false }));
        }
      }
    } else {
      console.error(
        'WalletContext: CRITICAL - Wallet system disabled. Invalid, missing, or placeholder VITE_REOWN_PROJECT_ID. Detected ID: "' +
          rawProjectId +
          '". Please ensure VITE_REOWN_PROJECT_ID is correctly set in your environment.'
      );
      appKitRef.current = null;
      setWallet(prev => ({ ...prev, isWalletSystemAvailable: false }));
    }
  }, [isProjectIdValid, rawProjectId]); // Dependencies as per subtask

  const [wallet, setWallet] = useState<WalletState>(initialWalletState);

  // Removed commented out useAppKit related code and console logs.

  const updateWalletState = useCallback(async () => {
    const currentAppKit = appKitRef.current;

    if (!currentAppKit) {
      setWallet(prev => ({
        ...initialWalletState,
        isWalletSystemAvailable: false,
      }));
      return;
    }

    if (currentAppKit.getState().isConnected && currentAppKit.getAddress()) {
      const currentAddress = currentAppKit.getAddress();
      const currentChainId = currentAppKit.getChainId();
      const currentProvider = currentAppKit.getWalletProvider();

      // New logic block starts
      // Ensure all necessary details are present from AppKit
      if (currentProvider && currentAddress && currentChainId !== undefined) {
        try {
          const ethersProvider = new ethers.BrowserProvider(
            currentProvider as Eip1193ProviderWithEvents // Use currentProvider from AppKit
          );
          const ethersSigner = await ethersProvider.getSigner();
          setWallet(prev => ({
            ...prev,
            provider: ethersProvider,
            signer: ethersSigner,
            address: currentAddress, // Use currentAddress from AppKit
            chainId: Number(currentChainId), // Use currentChainId from AppKit
            isConnected: true,
            isWalletSystemAvailable: true,
          }));
        } catch (error) {
          captureException(error);
          console.error('WalletContext: Error getting signer or updating wallet state:', error);
          setWallet(prev => ({
            ...initialWalletState,
            isConnected: false,
            isWalletSystemAvailable: true, // AppKit exists, connection failed
          }));
        }
      } else {
        // AppKit is connected (or getState().isConnected was true) but didn't provide all necessary details
        console.warn('WalletContext: AppKit reported connected, but essential details (provider, address, or chainId) are missing.');
        setWallet(prev => ({
          ...initialWalletState,
          isConnected: false,
          isWalletSystemAvailable: true, // AppKit is available
        }));
      }
      // New logic block ends
    } else {
      // This is the outer else, for when currentAppKit.getState().isConnected is false
      setWallet(prev => ({
        ...initialWalletState,
        isConnected: false,
        isWalletSystemAvailable: true, // AppKit is available, just not connected
      }));
    }
  }, []);

  useEffect(() => {
    const targetAppKit = appKitRef.current;
    // console.log('WalletContext: Subscription useEffect. TargetAppKit:', targetAppKit ? 'available' : 'null'); // Debug log

    if (targetAppKit) {
      if (typeof targetAppKit.subscribeProvider === 'function') {
        // console.log('WalletContext: Subscribing to provider changes.'); // Debug log
        updateWalletState(); // Initial state update
        const unsubscribe = targetAppKit.subscribeProvider(updateWalletState);
        return () => unsubscribe();
      } else {
        // This case implies a problem with AppKitInstanceInterface or the instance itself
        console.error('WalletContext: CRITICAL - subscribeProvider is not available on targetAppKit. Wallet state might be inconsistent.');
        // Attempt to set a safe state, though this indicates a deeper issue.
        setWallet(prev => ({ ...initialWalletState, isWalletSystemAvailable: false, isConnected: false }));
      }
    } else {
      // console.warn('WalletContext: AppKit instance is null. Unable to subscribe. Setting wallet to unavailable/disconnected.'); // Debug log
      // This is expected if isProjectIdValid was false or AppKit failed to initialize
      setWallet(prev => ({ ...initialWalletState, isWalletSystemAvailable: false, isConnected: false }));
    }
  }, [updateWalletState]); // updateWalletState is memoized.

  const connectWallet = useCallback(async () => {
    if (!wallet.isWalletSystemAvailable || !appKitRef.current) {
      console.warn('WalletContext: connectWallet called but wallet system is not available.');
      // Optionally, inform the user via toast or other UI element
      return;
    }

    const modalController = appKitRef.current;
    if (!modalController) { // Should be redundant due to isWalletSystemAvailable check
      captureException(new Error('AppKit not initialized in connectWallet (modalController is null after availability check)'));

      return;
    }

    try {
      await modalController.open();
    } catch (error: any) {
      captureException(error);
      console.error('WalletContext: Error opening wallet modal:', error);
      if (error instanceof Error && /Coinbase Wallet SDK/i.test(error.message)) {
        console.warn(
          'Failed to load Coinbase Wallet. Please ensure the SDK is available or try a different wallet provider.'
        );
      }
      // Potentially update state to reflect connection attempt failure if needed, though subscriptions should handle it.
    }

  }, [wallet.isWalletSystemAvailable]); // appKitRef is stable

  const disconnectWallet = useCallback(async () => {
    if (!wallet.isWalletSystemAvailable || !appKitRef.current) {
      console.warn('WalletContext: disconnectWallet called but wallet system is not available.');
      return;
    }

    const actionKit = appKitRef.current;

    if (actionKit?.getState().isConnected) {
      try {
        await actionKit.disconnect();
        // State update is typically handled by the subscription to provider changes
      } catch (error) {
        console.error('WalletContext: Error during disconnect.', error);
        captureException(error);
        console.error('WalletContext: Error disconnecting wallet:', error);
      }
    } else {
      // If not connected but called, ensure state is clean.
      // updateWalletState(); // This might be redundant if subscriptions are robust
      console.log('WalletContext: disconnectWallet called but already disconnected or appKit not ready.');
    }

  }, [wallet.isWalletSystemAvailable]); // appKitRef is stable


  const displayAddress = wallet.address
    ? `${wallet.address.substring(0, 6)}...${wallet.address.substring(wallet.address.length - 4)}`
    : null;

  // The context value now includes isWalletSystemAvailable via the wallet state object
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
