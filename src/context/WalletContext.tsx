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

let appKitInstance: AppKitInstanceInterface | null = null;

if (projectId) {
  appKitInstance = typeof window !== 'undefined'
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

  if (appKitInstance && typeof appKitInstance.subscribeProvider !== 'function') {
    console.error('WalletContext: Critical - appKitInstance created but lacks subscribeProvider method.', appKitInstance);
  } else if (!appKitInstance && typeof window !== 'undefined') {
    console.error('WalletContext: Critical - appKitInstance is null after creation attempt, even though window is defined and projectId is present.');
  }
} else {
  console.error('WalletContext: Critical - projectId is missing. AppKit initialization skipped.');
}

// --- End Reown AppKit Configuration ---

export const WalletProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [wallet, setWallet] = useState<WalletState>(initialWalletState);

  const updateWalletState = useCallback(async () => {
    const currentAppKit = appKitInstance;

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
  }, []); // appKitInstance is now a module-level const/let, not a prop/state


  useEffect(() => {
    if (!appKitInstance) {
      console.warn('WalletContext: useEffect - appKitInstance is null, skipping subscription setup.');
      return;
    }

    updateWalletState(); // Initial state update attempt

    if (typeof appKitInstance.subscribeProvider === 'function') {
      // console.log('WalletContext: Using subscribeProvider for provider changes.'); // Debug log removed
      const unsubscribe = appKitInstance.subscribeProvider(() => updateWalletState());
      return () => unsubscribe();
    } else if (typeof appKitInstance.on === 'function' && typeof appKitInstance.off === 'function') {
      console.warn('WalletContext: subscribeProvider is not available. Attempting to use on/off as fallback.');
      appKitInstance.on('providerChanged', updateWalletState);
      return () => appKitInstance.off?.('providerChanged', updateWalletState);
    } else {
      console.error('WalletContext: Critical - Unable to subscribe to provider changes. Neither subscribeProvider nor on/off methods are available on appKitInstance. AppKit may not be functioning correctly.');
    }
  }, [updateWalletState]); // Removed appKitInstance from deps


  const connectWallet = useCallback(async () => {
    const modalController = appKitInstance;
    if (!modalController) {
      console.error('WalletContext: AppKit not initialized (modalController is null). Cannot open wallet connect modal.');
      captureException(new Error('WalletContext: AppKit not initialized in connectWallet (modalController is null)'));
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
  }, []); // appKitInstance is module-level

  const disconnectWallet = useCallback(async () => {
    const actionKit = appKitInstance;
    if (actionKit?.getState().isConnected) {
      try {
        await actionKit.disconnect();
        // State update will be handled by the subscription
      } catch (error) {
        console.error('WalletContext: Error during disconnect.', error);
        captureException(error);
      }
    }
  }, []); // appKitInstance is module-level

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
