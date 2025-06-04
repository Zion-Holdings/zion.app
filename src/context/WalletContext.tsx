// src/context/WalletContext.tsx
import React, { createContext, useState, useContext, ReactNode, useCallback, useEffect } from 'react';
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
};

const WalletContext = createContext<WalletContextType | undefined>(undefined);

// --- Reown AppKit Configuration ---

// The project ID is provided via Vite environment variables. Set
// VITE_REOWN_PROJECT_ID in your `.env` file with the value from
// cloud.reown.com. If the ID is missing, the SDK will throw an error
// like "Origin <your-domain> not found on Allowlist".
import { getAppKitProjectId } from '@/config/env';

const projectId = getAppKitProjectId();
console.log('WalletContext: Resolved projectId from getAppKitProjectId():', projectId);

const metadata = {
  name: 'Zion', // Replace with your project's name
  description: 'Zion Finance Platform', // Replace with your project's description
  url: typeof window !== 'undefined' ? window.location.origin : 'https://example.com', // Dynamic URL or placeholder
  icons: ['https://avatars.githubusercontent.com/u/37784886'], // Replace with your project's icon URLs
};

const ZION_CHAIN_MAP: Record<number, any> = {
    1: mainnet,
    5: goerli, // Common testnet, assuming ZION_TOKEN_NETWORK_ID might be this
    137: polygon,
    // Add other chains supported by your ZION_TOKEN_NETWORK_ID or dApp
    // Example:
    // 10: optimism,
    // 42161: arbitrum,
    // 8453: base,
};

const targetNetwork = ZION_CHAIN_MAP[ZION_TOKEN_NETWORK_ID] || mainnet;

const appKitInstance: AppKitInstanceInterface | null = typeof window !== 'undefined'
  ? createAppKit({
      adapters: [
        new EthersAdapter({
          ethers, // pass the ethers library instance
          // provider: undefined, // Optional: if you have a specific EIP-1193 provider to pre-configure
        }),
      ],
      networks: [targetNetwork], // Configure with the network ZION_TOKEN_NETWORK_ID maps to
      defaultNetwork: targetNetwork,
      projectId,
      metadata,
      features: {
        analytics: false, // Optional: enable analytics
        // ... other features like swaps, onramp if needed
      },
    })
  : null;
console.log('WalletContext: appKitInstance created:', appKitInstance);
if (appKitInstance && typeof appKitInstance.subscribeProvider !== 'function') {
  console.error('WalletContext: appKitInstance does NOT have a subscribeProvider method!', appKitInstance);
} else if (!appKitInstance) {
  console.error('WalletContext: appKitInstance is null after creation attempt.');
}
// --- End Reown AppKit Configuration ---

export const WalletProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  console.log('WalletProvider: Initializing...');
  const [wallet, setWallet] = useState<WalletState>(initialWalletState);
  // `useAppKit` now returns AppKitInstanceInterface | null due to updated .d.ts
  const appKit = useAppKit(); // Hook to interact with AppKit
  console.log('WalletContext: appKit from useAppKit():', appKit);
  if (appKit && typeof appKit.subscribeProvider !== 'function') {
    // This error should ideally not appear if AppKitInstanceInterface is correctly implemented by useAppKit's return value
    console.error('WalletContext: appKit from useAppKit() does NOT have a subscribeProvider method (post-type update)!', appKit);
  } else if (!appKit) {
    console.warn('WalletContext: appKit from useAppKit() is null.'); // Changed to warn as it can be null initially
  }

  const updateWalletState = useCallback(async () => {
    // Prefer using appKit from useAppKit() if available and connected
    const currentAppKit = appKit || appKitInstance; // Fallback to appKitInstance if appKit from hook is null

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
          setWallet({
            provider: ethersProvider,
            signer: ethersSigner,
            address: currentAddress,
            chainId: Number(currentChainId), // Ensure chainId is a number
            isConnected: true,
          });
        } catch (error) {
          captureException(error);
          setWallet(initialWalletState); // Ensure state is reset on error
        }
      } else {
        // Not fully connected or missing details, reset
        setWallet(initialWalletState);
      }
    } else {
      // Not connected, reset
      setWallet(initialWalletState);
    }
  }, [appKit, appKitInstance]); // Added appKitInstance due to its usage as fallback


  useEffect(() => {
    // Prioritize appKit from useAppKit() for subscriptions
    const targetAppKit = appKit || appKitInstance; // Use appKit from hook if available, else appKitInstance

    console.log('WalletContext: useEffect using targetAppKit:', targetAppKit ? 'instance available' : 'no instance');
    if (targetAppKit && typeof targetAppKit.subscribeProvider === 'function') {
      console.log('WalletContext: Using subscribeProvider for provider changes.');
      updateWalletState(); // Initial state update
      const unsubscribe = targetAppKit.subscribeProvider(updateWalletState);
      return () => unsubscribe();
    } else if (targetAppKit) {
      // Fallback or error if subscribeProvider is not available but instance exists
      console.error(
        'WalletContext: targetAppKit instance is available but subscribeProvider is NOT a function. Attempting to use on/off as fallback.',
        targetAppKit
      );
      // Optional: attempt appKit.on/off as a fallback if defined, though the goal is to make subscribeProvider primary
      if (typeof targetAppKit.on === 'function' && typeof targetAppKit.off === 'function') {
        console.log('WalletContext: Fallback to using on/off for provider changes (event: "providerChanged").');
        updateWalletState(); // Initial state update
        targetAppKit.on('providerChanged', updateWalletState);
        return () => targetAppKit.off?.('providerChanged', updateWalletState);
      } else {
        console.error('WalletContext: on/off methods also not available on targetAppKit.');
      }
    } else {
      console.warn( // Changed to warn as appKit can be null initially
        'WalletContext: Unable to subscribe to provider changes. appKit (from useAppKit) and appKitInstance are null or invalid.'
      );
    }
  }, [appKit, appKitInstance, updateWalletState]); // appKitInstance added to dependency array


  const connectWallet = useCallback(async () => {
    // connectWallet should use the appKit instance meant for opening the modal.
    // The problem description implies appKit (from useAppKit()) is for subscriptions.
    // appKitInstance is created with createAppKit and is passed to the context.
    // Let's assume appKit (from useAppKit) is also capable of 'open', or prefer appKitInstance if it's distinct.
    // The current code uses 'appKit' from useAppKit() for 'open'.
    const modalController = appKit || appKitInstance; // Prefer appKit from hook, fallback to instance
    if (!modalController) {
      captureException(new Error('AppKit not initialized in connectWallet (modalController is null)'));
      return;
    }

    try {
      await modalController.open(); // Opens the modal
      // State update will be handled by the subscription if modalController.open() triggers provider events.
    } catch (error: any) {
      captureException(error);
      if (
        error instanceof Error &&
        /Coinbase Wallet SDK/i.test(error.message)
      ) {
        console.warn(
          'Failed to load Coinbase Wallet. Please ensure the SDK is available or try a different wallet provider.'
        );
      }
    }
  }, [appKit]);

  const disconnectWallet = useCallback(async () => {
    // Similar to connectWallet, decide which appKit instance is for actions.
    // appKitInstance is currently used.
    const actionKit = appKitInstance || appKit; // Prefer appKitInstance for direct actions if it's the configured one.
    if (actionKit?.getState().isConnected) {
      try {
        await actionKit.disconnect();
        // State update will be handled by the subscription
      } catch (error) {
        captureException(error);
      }
    }
  }, [appKit, appKitInstance]); // appKit and appKitInstance added

  const displayAddress = wallet.address
    ? `${wallet.address.substring(0, 6)}...${wallet.address.substring(wallet.address.length - 4)}`
    : null;

  return (
    <WalletContext.Provider value={{ ...wallet, connectWallet, disconnectWallet, displayAddress, appKit: appKitInstance }}>
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
