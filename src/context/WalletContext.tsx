import { logInfo, logWarn, logErrorToProduction } from '@/utils/productionLogger';
import { getAppKitProjectId } from '@/config/env';
import { ZION_TOKEN_NETWORK_ID } from '@/config/governanceConfig';

// src/context/WalletContext.tsx

// Use getAppKitProjectId from shared env config

import React, { createContext, useState, useContext, useCallback, useEffect, useRef, useMemo } from 'react';
import type { ReactNode } from 'react';
import type { AppKitInstanceInterface } from '@reown/appkit/react';
// import { captureException } from '@reown/appkit/react';

import { createAppKit } from '@reown/appkit/react';
import type { mainnet as _MainnetType, goerli as _GoerliType, polygon as _PolygonType, optimism as _OptimismType, arbitrum as _ArbitrumType, base as _BaseType } from '@reown/appkit/networks';
import { mainnet, goerli, polygon, optimism, arbitrum, base } from '@reown/appkit/networks';
import type { ethers as _EthersType } from 'ethers';
import { ethers } from 'ethers';

// Use real wallet imports except in CI/build environments
const _isBuildEnv = process.env.CI === 'true';

// Dynamic imports for ESM compatibility

// Load AppKit modules dynamically to avoid ESM issues

// Some injected wallet providers implement the EIP-1193 interface but also
// expose event methods like `on` and `removeListener`. The `ethers` type for
// `Eip1193Provider` does not include these, so we define a helper interface with
// optional definitions so we can safely check for them.
interface Eip1193ProviderWithEvents {
  on?: (event: string, listener: (...args: unknown[]) => void) => void;
  removeListener?: (event: string, listener: (...args: unknown[]) => void) => void;
  request?: (args: { method: string; params?: unknown[] }) => Promise<unknown>;
}

// Define the shape of the wallet state and context
export interface WalletState { // Added export
  provider: unknown | null; // Updated to BrowserProvider for ethers v6
  signer: unknown | null;
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

// Provide a safe default context to avoid runtime crashes if the provider
// fails to mount for any reason (e.g. missing environment vars). This helps
// prevent blank screens by allowing components using `useWallet` to render
// gracefully with a no-op implementation.
const defaultWalletContext: WalletContextType = {
  ...initialWalletState,
  connectWallet: async () => {},
  disconnectWallet: async () => {},
  displayAddress: null,
  appKit: null,
};


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
    logInfo('[WalletProvider] Initializing...');
  }

  const rawProjectId = getAppKitProjectId();
  if (process.env.NODE_ENV === 'development') {
    logInfo('WalletContext: Resolved rawProjectId from getAppKitProjectId():', { data:  { data: rawProjectId } });
  }

  // Check if the project ID is valid
  const isProjectIdValid = rawProjectId && !KNOWN_INVALID_PROJECT_IDS.includes(rawProjectId);
  const projectId = rawProjectId; // The createAppKit call expects 'projectId'

  if (!isProjectIdValid) {
    if (process.env.NODE_ENV === 'development') {
      logWarn(
        `WalletContext: Invalid or placeholder project ID detected: "${rawProjectId}". Wallet system will be unavailable.`
      );
    }
  }

  const PLACEHOLDER_PROJECT_IDS = ['YOUR_DEFAULT_PROJECT_ID_ENV_MISSING', 'YOUR_DEFAULT_PROJECT_ID_FALLBACK', 'your_project_id_here'];
  if (projectId && PLACEHOLDER_PROJECT_IDS.includes(projectId)) {
      const errorMessage = 'WalletContext: Critical Error - Reown AppKit Project ID is not set or is a placeholder. Please set NEXT_PUBLIC_REOWN_PROJECT_ID environment variable.';
      if (process.env.NODE_ENV === 'development') {
        logErrorToProduction(errorMessage, { data: { resolvedProjectId: projectId } });
      }
  }

  const metadata = useMemo(() => ({
    name: 'Zion',
    description: 'Zion Finance Platform',
    url: typeof window !== 'undefined' ? window.location.origin : 'https://example.com',
    icons: ['https://avatars.githubusercontent.com/u/37784886'],
  }), []);

  const ZION_CHAIN_MAP: Record<number, unknown> = {
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
      logWarn( // More of a warning during runtime, error is logged at init.
        'WalletContext: Project ID is invalid or missing. AppKit initialization skipped. Wallet system unavailable. ID:', 
        { data: { projectId: rawProjectId } }
      );
      if (appKitRef.current) appKitRef.current = null; // Ensure it's nulled if it somehow existed
      setWallet((_prev) => ({
        ...initialWalletState, // Reset to initial, ensuring all fields are non-connected
        isWalletSystemAvailable: false,
      }));
      return;
    }

    // Priority 2: Check for client-side environment.
    if (typeof window === 'undefined') {
      logInfo('WalletContext: SSR environment or non-browser, AppKit not initialized.');
      // appKitRef.current should be null from initialization.
      // isWalletSystemAvailable was set by useState based on isProjectIdValid.
      // If isProjectIdValid was true, we now mark isWalletSystemAvailable as false because AppKit can't run.
      setWallet((_prev) => ({
        ...initialWalletState, // Reset to initial state
        isWalletSystemAvailable: false, // Crucially false for non-browser env
        // projectId might have been valid, so initialWalletState is safer
      }));
      return;
    }

    // Proceed with AppKit initialization only if client-side and project ID is valid
    if (!appKitRef.current) { // Check if already initialized
      if (process.env.NODE_ENV === 'development') {
        logInfo('WalletContext: Client-side, valid project ID. Attempting AppKit init. ID:', { data:  { data: rawProjectId } });
      }
      try {
        appKitRef.current = createAppKit({
          adapters: [], // Empty adapters array for now
          networks: [targetNetwork],
          defaultNetwork: targetNetwork,
          projectId: rawProjectId,
          metadata,
          features: { analytics: false },
        });
        if (process.env.NODE_ENV === 'development') {
          logInfo('WalletContext: appKitInstance created successfully:', { data:  { data: appKitRef.current } });
        }
        // On successful creation, system is available. Connection state will be updated by subscriptions.
        setWallet((_prev) => ({
          ..._prev,
          isWalletSystemAvailable: true,
          isConnected: false, // Explicitly false until wallet connects
        }));
      } catch (error) {
        logErrorToProduction('WalletContext: CRITICAL error creating appKitInstance with valid Project ID:', { data: error });
        appKitRef.current = null;
        setWallet((_prev) => ({
          ...initialWalletState,
          isWalletSystemAvailable: false,
        }));
      }
    } else {
      // AppKit already initialized. This block might be hit if dependencies change (e.g. projectId)
      // but AppKit instance was somehow preserved. Ensure state is consistent.
      if (process.env.NODE_ENV === 'development') {
        logInfo('WalletContext: AppKit already initialized. Ensuring state consistency. ID:', { data:  { data: rawProjectId } });
      }
      setWallet((_prev) => ({
        ..._prev,
        isWalletSystemAvailable: true,
      }));
    }
  }, [isProjectIdValid, rawProjectId, targetNetwork, metadata]); // Added targetNetwork

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
      setWallet((_prev) => ({
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
          if (typeof ethers === 'object' && ethers !== null && 'BrowserProvider' in ethers && typeof (ethers as typeof import('ethers')).BrowserProvider === 'function') {
            const EthersBrowserProvider = (ethers as typeof import('ethers')).BrowserProvider;
            // Ensure the provider has a required request method for Eip1193Provider
            const safeProvider = Object.assign({}, currentProvider, {
              request: typeof (currentProvider as any).request === 'function'
                ? (currentProvider as any).request
                : async (_args: { method: string; params?: unknown[] }) => { throw new Error('Provider does not implement request'); }
            }) as import('ethers').Eip1193Provider;
            const ethersProvider = new EthersBrowserProvider(safeProvider);
            const ethersSigner = await ethersProvider.getSigner();
            setWallet((_prev) => ({
              ..._prev,
              provider: ethersProvider,
              signer: ethersSigner,
              address: currentAddress, // Use currentAddress from AppKit
              chainId: Number(currentChainId), // Use currentChainId from AppKit
              isConnected: true,
              isWalletSystemAvailable: true, // System is available and connected
            }));
          } else {
            setWallet((_prev) => ({
              ...initialWalletState,
              isConnected: false,
              isWalletSystemAvailable: true,
            }));
          }
        } catch (error) {
          logErrorToProduction('WalletContext: Error getting signer or updating wallet state:', { data: error });
          // AppKit exists, but failed to get signer or other error
          setWallet((_prev) => ({
            ...initialWalletState,
            isConnected: false, // Not connected due to error
            isWalletSystemAvailable: true, // AppKit itself is still available
          }));
        }
      } else {
        // Not connected or essential info missing
        setWallet((_prev) => ({
          ...initialWalletState,
        isConnected: false, // Explicitly not connected
        isWalletSystemAvailable: true, // AppKit is available, just not connected
      }));
    }
  } // This closes the outer if (currentAppKit?.getState().isConnected && currentAppKit?.getAddress())
  else {
    // Not connected or essential info missing (outer else)
    setWallet((_prev) => ({
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
        : (callback: (provider?: unknown) => void) => {
            const provider = targetAppKit.getWalletProvider?.();
            callback(provider);

            if (typeof window !== 'undefined') {
              const ethRaw = (window as Window & { ethereum?: Eip1193ProviderWithEvents }).ethereum;
              if (typeof ethRaw === 'object' && ethRaw !== null && 'on' in ethRaw && typeof ethRaw.on === 'function') {
                const handler = () => callback(targetAppKit.getWalletProvider?.());
                ethRaw.on('accountsChanged', handler);
                return () => {
                  if ('removeListener' in ethRaw && typeof ethRaw.removeListener === 'function') {
                    ethRaw.removeListener('accountsChanged', handler);
                  }
                };
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
      logWarn('WalletContext: connectWallet called but wallet system is not available.');
      // Optionally, inform the user via toast or other UI element
      return;
    }

    const modalController = appKitRef.current;
    if (!modalController) { // Should be redundant due to isWalletSystemAvailable check
      // captureException(new Error('AppKit not initialized in connectWallet (modalController is null after availability check)'));

      return;
    }

    // Attempt to automatically open the MetaMask install page if no provider is detected
    if (typeof window !== 'undefined' && !(window as Window & { ethereum?: Eip1193ProviderWithEvents }).ethereum) {
      try {
        window.open('https://metamask.io/download.html', '_blank');
        logInfo('WalletContext: No wallet provider detected. Opening MetaMask install page.');
      } catch (installError) {
        logWarn('WalletContext: Failed to open MetaMask install page.', { data:  { data: installError } });
      }
    }

    try {
      await modalController.open();
    } catch (error: unknown) {
      logErrorToProduction('WalletContext: Error opening wallet modal:', { data: error });
      if (error instanceof Error && /Coinbase Wallet SDK/i.test(error.message)) {
        logWarn(
          'Failed to load Coinbase Wallet. Please ensure the SDK is available or try a different wallet provider.'
        );
      }
      // Potentially update state to reflect connection attempt failure if needed, though subscriptions should handle it.
    }

  }, [wallet.isWalletSystemAvailable]); // appKitRef is stable

  const disconnectWallet = useCallback(async () => {
    if (!wallet.isWalletSystemAvailable || !appKitRef.current) {
      logWarn('WalletContext: disconnectWallet called but wallet system is not available.');
      return;
    }

    const actionKit = appKitRef.current;

    if (actionKit?.getState().isConnected) {
      try {
        await actionKit.disconnect();
        // State update is typically handled by the subscription to provider changes
      } catch (error) {
        logErrorToProduction('WalletContext: Error during disconnect.', { data: error });
        logErrorToProduction('WalletContext: Error disconnecting wallet:', { data: error });
      }
    } else {
      // If not connected but called, ensure state is clean.
      // updateWalletState(); // This might be redundant if subscriptions are robust
      logInfo('WalletContext: disconnectWallet called but already disconnected or appKit not ready.');
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
    console.error('useWallet must be used within a WalletProvider');
    return defaultWalletContext;
  }
  return context;
};

