// src/context/WalletContext.tsx


// Definition of getAppKitProjectId
const getAppKitProjectId = (): string | undefined => {
  return import.meta.env.VITE_REOWN_PROJECT_ID;
};

import React, { createContext, useState, useContext, ReactNode, useCallback, useEffect, useRef } from 'react';

import { ethers } from 'ethers';
import { captureException } from '@/utils/sentry';
import { ZION_TOKEN_NETWORK_ID } from '@/config/governanceConfig';
import { createAppKit, useAppKit, AppKitInstanceInterface } from '@reown/appkit/react';
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

const WalletContext = createContext<WalletContextType | undefined>(undefined);


// Known default/fallback project IDs that indicate the wallet system should be considered unavailable
const KNOWN_INVALID_PROJECT_IDS = [
  'YOUR_PROJECT_ID', // Common placeholder
  'dummy',
  'fallback',
  // Add any other known default/placeholder IDs
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

  // Initialize appKitInstance only once and if projectId is valid
  useEffect(() => {
    if (typeof window !== 'undefined' && isProjectIdValid && !appKitRef.current) {
      try {
        appKitRef.current = createAppKit({
          adapters: [
            new EthersAdapter({
              ethers, // pass the ethers library instance
            }),
          ],
          networks: [targetNetwork],
          defaultNetwork: targetNetwork,
          projectId: rawProjectId, // Use the validated projectId
          metadata,
          features: {
            analytics: false,
          },
        });
        console.log('WalletContext: appKitInstance created successfully:', appKitRef.current);
        // Update wallet state to reflect that the system is available
        setWallet(prev => ({ ...prev, isWalletSystemAvailable: !!appKitRef.current }));
      } catch (error) {
        console.error('WalletContext: Error creating appKitInstance:', error);
        captureException(error);
        appKitRef.current = null; // Ensure it's null on failure
        setWallet(prev => ({ ...prev, isWalletSystemAvailable: false }));
      }
    } else if (typeof window === 'undefined') {
      console.log('WalletContext: SSR environment, AppKit not initialized.');
      setWallet(prev => ({ ...prev, isWalletSystemAvailable: false }));
    } else if (!isProjectIdValid) {
      console.warn('WalletContext: AppKit not initialized due to invalid project ID.');
      setWallet(prev => ({ ...prev, isWalletSystemAvailable: false }));
    }
  }, []); // Run once on mount

  const [wallet, setWallet] = useState<WalletState>({
    ...initialWalletState,
    // isWalletSystemAvailable will be updated by the useEffect above
  });

  // `useAppKit` now returns AppKitInstanceInterface | null due to updated .d.ts
  // const appKit = useAppKit(); // Hook to interact with AppKit
  // console.log('WalletContext [Investigation]: appKit from useAppKit() raw value:', appKit);
  // if (appKit) {
  //   console.log('WalletContext [Investigation]: typeof appKit:', typeof appKit);
  //   console.log('WalletContext [Investigation]: appKit properties:', Object.keys(appKit).join(', '));
  //   console.log('WalletContext [Investigation]: appKit.subscribeProvider type:', typeof appKit.subscribeProvider);
  //   console.log('WalletContext [Investigation]: appKit.on type:', typeof appKit.on);
  //   console.log('WalletContext [Investigation]: appKit.off type:', typeof appKit.off);
  //   console.log('WalletContext [Investigation]: appKit.open type:', typeof appKit.open);
  //   console.log('WalletContext [Investigation]: appKit.getState type:', typeof appKit.getState);
  // } else {
  //   console.log('WalletContext [Investigation]: appKit from useAppKit() is null or undefined.');
  // }
  // console.log('WalletContext: appKit from useAppKit():', appKit);
  // if (appKit && typeof appKit.subscribeProvider !== 'function') {
  //   // This error should ideally not appear if AppKitInstanceInterface is correctly implemented by useAppKit's return value
  //   console.error('WalletContext: appKit from useAppKit() does NOT have a subscribeProvider method (post-type update)!', appKit);
  // } else if (!appKit) {
  //   console.warn('WalletContext: appKit from useAppKit() is null.'); // Changed to warn as it can be null initially
  // }

  const updateWalletState = useCallback(async () => {
    const currentAppKit = appKitRef.current;


    if (currentAppKit?.getState().isConnected && currentAppKit?.getAddress()) {
      const currentAddress = currentAppKit.getAddress();
      const currentChainId = currentAppKit.getChainId();
      const currentProvider = currentAppKit.getWalletProvider();

      if (currentAddress && currentChainId && currentProvider) {
        try {
          const ethersProvider = new ethers.BrowserProvider(
            currentProvider as Eip1193ProviderWithEvents
          );
          const ethersSigner = await ethersProvider.getSigner();
          setWallet(prev => ({
            ...prev,
            provider: ethersProvider,
            signer: ethersSigner,
            address: currentAddress,
            chainId: Number(currentChainId),
            isConnected: true,
            isWalletSystemAvailable: !!currentAppKit, // System is available if appKit is there
          }));
        } catch (error) {
          captureException(error);
          console.error('WalletContext: Error getting signer or updating wallet state:', error);
          setWallet(prev => ({
            ...initialWalletState,
            isWalletSystemAvailable: !!currentAppKit, // Preserve availability status
          }));
        }
      } else {
        setWallet(prev => ({
          ...initialWalletState,
          isWalletSystemAvailable: !!currentAppKit,
        }));
      }
    } else {
      setWallet(prev => ({
        ...initialWalletState,
        isWalletSystemAvailable: !!currentAppKit,
      }));
    }

  }, []); // appKitRef is stable, no need to add as dependency if logic inside doesn't change based on its identity

  useEffect(() => {
    const targetAppKit = appKitRef.current;
    console.log('WalletContext: useEffect for subscriptions using targetAppKit:', targetAppKit ? 'instance available' : 'no instance');

    if (targetAppKit && typeof targetAppKit.subscribeProvider === 'function') {
      console.log('WalletContext: Using subscribeProvider for provider changes.');
      updateWalletState(); // Initial state update
      const unsubscribe = targetAppKit.subscribeProvider(() => updateWalletState());
      return () => unsubscribe();
    } else if (targetAppKit) {
      console.error(
        'WalletContext: subscribeProvider is not available on targetAppKit. Attempting to use on/off as fallback.',
        targetAppKit
      );
      // Fallback logic (optional, based on AppKit version)
      if (typeof targetAppKit.on === 'function' && typeof targetAppKit.off === 'function') {
        updateWalletState();
        targetAppKit.on('providerChanged', updateWalletState);
        return () => targetAppKit.off?.('providerChanged', updateWalletState);
      } else {
         console.error('WalletContext: on/off methods also not available on targetAppKit for fallback.');
      }
      // Ensure state reflects unavailability if subscription setup fails in a critical way
      setWallet(prev => ({ ...prev, isWalletSystemAvailable: false, isConnected: false }));
    } else {
      console.warn(
        'WalletContext: AppKit instance (appKitRef.current) is null. Unable to subscribe to provider changes. Wallet system likely unavailable.'
      );
      // Ensure wallet state reflects that the system is not available and not connected
      setWallet(prev => ({ ...initialWalletState, isWalletSystemAvailable: false }));
    }
  }, [updateWalletState]); // updateWalletState is memoized. appKitRef.current is accessed but its change doesn't trigger this.

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
