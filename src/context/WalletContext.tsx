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

// --- End Reown AppKit Configuration ---

export const WalletProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  console.log('WalletProvider: Initializing...');
  const [wallet, setWallet] = useState<WalletState>(initialWalletState);
  const [appKitInstance, setAppKitInstance] = useState<AppKitInstanceInterface | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // --- Reown AppKit Configuration ---
      // The project ID is provided via Vite environment variables. Set
      // VITE_REOWN_PROJECT_ID in your `.env` file with the value from
      // cloud.reown.com. If the ID is missing, the SDK will throw an error
      // like "Origin <your-domain> not found on Allowlist".
      const projectId = getAppKitProjectId();
      console.log('WalletContext: Resolved projectId from getAppKitProjectId():', projectId);

      const metadata = {
        name: 'Zion', // Replace with your project's name
        description: 'Zion Finance Platform', // Replace with your project's description
        url: window.location.origin, // Dynamic URL
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

      const instance = createAppKit({
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
      });
      console.log('WalletContext: appKitInstance created:', instance);
      if (instance && typeof instance.subscribeProvider !== 'function') {
        console.error('WalletContext: instance does NOT have a subscribeProvider method!', instance);
      } else if (!instance) {
        console.error('WalletContext: instance is null after creation attempt.');
      }
      setAppKitInstance(instance);
      // --- End Reown AppKit Configuration ---
    }
  }, []); // Empty dependency array ensures this runs once on mount (client-side)


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
    // Prefer using appKit from useAppKit() if available and connected
    // const currentAppKit = appKitInstance; // Fallback to appKitInstance if appKit from hook is null
    // With appKitInstance now in state, direct usage is fine.

    if (appKitInstance?.getState().isConnected && appKitInstance?.getAddress()) {
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
  }, [appKitInstance]); // appKitInstance from state is now a dependency


  useEffect(() => {
    // Prioritize appKitInstance from state for subscriptions
    console.log('WalletContext: useEffect using appKitInstance from state:', appKitInstance ? 'instance available' : 'no instance');

    if (appKitInstance && typeof appKitInstance.subscribeProvider === 'function') {
      console.log('WalletContext: Using subscribeProvider for provider changes.');
      updateWalletState(); // Initial state update
      // The callback for subscribeProvider receives the provider, which updateWalletState doesn't strictly need
      // as it re-evaluates from appKitInstance.getState() etc. So, we can just call updateWalletState.
      const unsubscribe = appKitInstance.subscribeProvider(() => updateWalletState());
      return () => unsubscribe();
    } else if (appKitInstance) {
      // Fallback for older versions or if subscribeProvider is somehow not there but 'on' is.
      console.error(
        'WalletContext: subscribeProvider is not available. Attempting to use on/off as fallback.',
        appKitInstance
      );
      if (typeof appKitInstance.on === 'function' && typeof appKitInstance.off === 'function') {
        console.log('WalletContext: Fallback to using on/off for provider changes (event: "providerChanged").');
        updateWalletState();
        appKitInstance.on('providerChanged', updateWalletState);
        return () => appKitInstance.off?.('providerChanged', updateWalletState);
      } else {
        console.error('WalletContext: on/off methods also not available on appKitInstance for fallback.');
      }
    } else {
      console.warn(
        'WalletContext: Unable to subscribe to provider changes. appKitInstance from state is null or invalid.'
      );
    }
  }, [appKitInstance, updateWalletState]); // appKitInstance from state added to dependency array


  const connectWallet = useCallback(async () => {
    const modalController = appKitInstance; // Use appKitInstance from state
    if (!modalController) {
      captureException(new Error('AppKit not initialized in connectWallet (modalController is null)'));
      console.error('AppKit not initialized in connectWallet (modalController is null)');
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
  }, [appKitInstance]); // appKitInstance from state is now a dependency

  const disconnectWallet = useCallback(async () => {
    const actionKit = appKitInstance; // Use appKitInstance from state
    if (actionKit?.getState().isConnected) {
      try {
        await actionKit.disconnect();
        // State update will be handled by the subscription
      } catch (error) {
        captureException(error);
      }
    }
  }, [appKitInstance]); // appKitInstance from state is now a dependency

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
