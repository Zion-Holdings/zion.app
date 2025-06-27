// src/context/WalletContext.tsx


// Definition of getAppKitProjectId
const getAppKitProjectId = (): string | undefined => {
  // Prioritize NEXT_PUBLIC_ variable for Next.js context
  const nextPublicProjectId = process.env.NEXT_PUBLIC_REOWN_PROJECT_ID;
  if (nextPublicProjectId) {
    return nextPublicProjectId;
  }
  // Fallback to VITE_ variable if NEXT_PUBLIC_ is not set
  const viteProjectId = process.env.VITE_REOWN_PROJECT_ID;
  if (viteProjectId) {
    console.warn("WalletContext: Using VITE_REOWN_PROJECT_ID as fallback for AppKit Project ID.");
    return viteProjectId;
  }
  return undefined;
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
  'your_reown_project_id_here', // Added: Common placeholder from environment setup
  'your_project_id_here', // Added: Another common placeholder
];

// --- Reown AppKit Configuration ---

// The entire first WalletProvider component (original lines 55-145) and
// the subsequent problematic block (original lines 147-180) have been removed.
// This is to ensure only one well-structured WalletProvider (the one using useRef,
// originally starting at line 181) remains.

export const WalletProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

  if (process.env.NODE_ENV === 'development') {
    console.log('[WalletProvider] Initializing...');
  }

  const rawProjectId = getAppKitProjectId();
  if (process.env.NODE_ENV === 'development') {
    console.log('WalletContext: Resolved rawProjectId from getAppKitProjectId():', rawProjectId);
  }

  // Check if the project ID is valid
  const isProjectIdValid = rawProjectId && !KNOWN_INVALID_PROJECT_IDS.includes(rawProjectId);
  const projectId = rawProjectId; // The createAppKit call expects 'projectId'

  if (!isProjectIdValid) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(
        `WalletContext: Invalid or placeholder project ID detected: "${rawProjectId}". Wallet system will be unavailable.`
      );
    }
  }

  const PLACEHOLDER_PROJECT_IDS = ['YOUR_DEFAULT_PROJECT_ID_ENV_MISSING', 'YOUR_DEFAULT_PROJECT_ID_FALLBACK', 'your_project_id_here'];
  if (projectId && PLACEHOLDER_PROJECT_IDS.includes(projectId)) {
      const errorMessage = 'WalletContext: Critical Error - Reown AppKit Project ID is not set or is a placeholder. Please set NEXT_PUBLIC_REOWN_PROJECT_ID environment variable.';
      if (process.env.NODE_ENV === 'development') {
        console.error(errorMessage, 'Resolved Project ID:', projectId);
      }
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

  // Initialize AppKit
  useEffect(() => {
    // Priority 1: Check Project ID validity.
    if (!isProjectIdValid) {
      console.warn( // More of a warning during runtime, error is logged at init.
        'WalletContext: Project ID is invalid or missing. AppKit initialization skipped. Wallet system unavailable. ID:',
        rawProjectId
      );
      if (appKitRef.current) appKitRef.current = null; // Ensure it's nulled if it somehow existed
      setWallet(prev => ({
        ...initialWalletState, // Reset to initial, ensuring all fields are non-connected
        isWalletSystemAvailable: false,
      }));
      return;
    }

    // Priority 2: Check for client-side environment.
    if (typeof window === 'undefined') {
      console.log('WalletContext: SSR environment or non-browser, AppKit not initialized.');
      // appKitRef.current should be null from initialization.
      // isWalletSystemAvailable was set by useState based on isProjectIdValid.
      // If isProjectIdValid was true, we now mark isWalletSystemAvailable as false because AppKit can't run.
      setWallet(prev => ({
        ...initialWalletState, // Reset to initial state
        isWalletSystemAvailable: false, // Crucially false for non-browser env
        // projectId might have been valid, so initialWalletState is safer
      }));
      return;
    }

    // Proceed with AppKit initialization only if client-side and project ID is valid
    if (!appKitRef.current) { // Check if already initialized
      if (process.env.NODE_ENV === 'development') {
        console.log('WalletContext: Client-side, valid project ID. Attempting AppKit init. ID:', rawProjectId);
      }
      try {
        appKitRef.current = createAppKit({
          adapters: [new EthersAdapter({ ethers })],
          networks: [targetNetwork],
          defaultNetwork: targetNetwork,
          projectId: rawProjectId,
          metadata,
          features: { analytics: false },
        });
        if (process.env.NODE_ENV === 'development') {
          console.log('WalletContext: appKitInstance created successfully:', appKitRef.current);
        }
        // On successful creation, system is available. Connection state will be updated by subscriptions.
        setWallet(prev => ({
          ...prev,
          isWalletSystemAvailable: true,
          isConnected: false, // Explicitly false until wallet connects
        }));
      } catch (error) {
        console.error('WalletContext: CRITICAL error creating appKitInstance with valid Project ID:', error);
        captureException(error);
        appKitRef.current = null;
        setWallet(prev => ({
          ...initialWalletState,
          isWalletSystemAvailable: false,
        }));
      }
    } else {
      // AppKit already initialized. This block might be hit if dependencies change (e.g. projectId)
      // but AppKit instance was somehow preserved. Ensure state is consistent.
      if (process.env.NODE_ENV === 'development') {
        console.log('WalletContext: AppKit already initialized. Ensuring state consistency. ID:', rawProjectId);
      }
      setWallet(prev => ({
        ...prev,
        isWalletSystemAvailable: true,
      }));
    }
  }, [isProjectIdValid, rawProjectId, targetNetwork]); // Added targetNetwork

  const [wallet, setWallet] = useState<WalletState>({
    ...initialWalletState,
    // Explicitly set based on project ID validity initial check.
    // The useEffect below will further refine this if the project ID is valid and AppKit initializes.
    isWalletSystemAvailable: !!isProjectIdValid,
  });

  // Removed commented out useAppKit related code and console logs.

  const updateWalletState = useCallback(async () => {
    const currentAppKit = appKitRef.current;

    if (!currentAppKit) {
      // If appKit is not available (e.g., invalid project ID), ensure state reflects this
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

      // Ensure currentProvider, currentAddress, and currentChainId are valid before proceeding
      if (currentAppKit.getState().isConnected && currentAddress && currentProvider && currentChainId) {
        try {
          // currentProvider is already the EIP-1193 provider from AppKit
          const ethersProvider = new ethers.BrowserProvider(
            currentProvider as Eip1193ProviderWithEvents
          );
          const ethersSigner = await ethersProvider.getSigner();
          setWallet(prev => ({
            ...prev,
            provider: ethersProvider,
            signer: ethersSigner,
            address: currentAddress, // Use currentAddress from AppKit
            chainId: Number(currentChainId), // Use currentChainId from AppKit
            isConnected: true,
            isWalletSystemAvailable: true, // System is available and connected
          }));
        } catch (error) {
          captureException(error);
          console.error('WalletContext: Error getting signer or updating wallet state:', error);
          // AppKit exists, but failed to get signer or other error
          setWallet(prev => ({
            ...initialWalletState,
            isConnected: false, // Not connected due to error
            isWalletSystemAvailable: true, // AppKit itself is still available
          }));
        }
      } else {
        // Not connected or essential info missing
        setWallet(prev => ({
          ...initialWalletState,
        isConnected: false, // Explicitly not connected
        isWalletSystemAvailable: true, // AppKit is available, just not connected
      }));
    }
  } // This closes the outer if (currentAppKit?.getState().isConnected && currentAppKit?.getAddress())
  else {
    // Not connected or essential info missing (outer else)
    setWallet(prev => ({
      ...initialWalletState,
      isConnected: false, // Explicitly not connected
      isWalletSystemAvailable: true, // AppKit is available, just not connected
    }));
  }
}, []); // appKitRef.current is stable, updateWalletState is memoized.

  useEffect(() => {
    const targetAppKit = appKitRef.current;

    if (!targetAppKit) {
      setWallet(prev => ({ ...initialWalletState, isWalletSystemAvailable: false, isConnected: false }));
      return;
    }

    const subscribeProviderSafe =
      typeof targetAppKit.subscribeProvider === 'function'
        ? targetAppKit.subscribeProvider.bind(targetAppKit)
        : (callback: (provider?: any) => void) => {
            const provider = targetAppKit.getWalletProvider?.();
            callback(provider);

            if (typeof window !== 'undefined') {
              const eth: any = (window as any).ethereum;
              if (eth?.on) {
                const handler = () => callback(targetAppKit.getWalletProvider?.());
                eth.on('accountsChanged', handler);
                return () => eth.removeListener?.('accountsChanged', handler);
              }
            }
            return () => {};
          };

    updateWalletState();
    const unsubscribe = subscribeProviderSafe(updateWalletState);
    return () => {
      try {
        if (typeof unsubscribe === 'function') unsubscribe();
      } catch {
        /* noop */
      }
    };
  }, [updateWalletState, wallet.isWalletSystemAvailable]);

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
