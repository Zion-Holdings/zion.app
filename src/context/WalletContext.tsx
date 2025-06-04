// src/context/WalletContext.tsx
import React, { createContext, useState, useContext, ReactNode, useCallback, useEffect } from 'react';
import { ethers } from 'ethers';
import { captureException } from '@/utils/sentry';
import { ZION_TOKEN_NETWORK_ID } from '@/config/governanceConfig';
import { createAppKit, useAppKit } from '@reown/appkit/react';
import { EthersAdapter } from '@reown/appkit-adapter-ethers';
import { mainnet, polygon, goerli, optimism, arbitrum, base } from '@reown/appkit/networks'; // Import necessary chain objects

// Minimal interface describing the AppKit object used in this context.  The
// real package types are unavailable in the repository, so we declare only the
// members that WalletContext interacts with.
interface ReownAppKit {
  open: () => Promise<void>;
  close: () => Promise<void>;
  disconnect: () => Promise<void>;
  getState: () => { isConnected?: boolean };
  getAddress: () => string | null | undefined;
  getChainId: () => string | number | null | undefined;
  getWalletProvider: () => unknown;
  subscribeProvider: (cb: () => void) => () => void;
  on?: (event: string, cb: () => void) => void; // Added for alternative event handling
  off?: (event: string, cb: () => void) => void; // Added for alternative event handling
}

// Some injected wallet providers implement the EIP-1193 interface but also
// expose event methods like `on` and `removeListener`. The `ethers` type for
// `Eip1193Provider` does not include these, so we define a helper interface with
// optional definitions so we can safely check for them.
interface Eip1193ProviderWithEvents extends ethers.Eip1193Provider {
  on?: (event: string, listener: (...args: any[]) => void) => void;
  removeListener?: (event: string, listener: (...args: any[]) => void) => void;
}

// Define the shape of the wallet state and context
interface WalletState {
  provider: ethers.BrowserProvider | null; // Updated to BrowserProvider for ethers v6
  signer: ethers.Signer | null;
  address: string | null;
  chainId: number | null;
  isConnected: boolean;
}

interface WalletContextType extends WalletState {
  connectWallet: () => Promise<void>;
  disconnectWallet: () => Promise<void>; // disconnect can be async
  displayAddress: string | null; // Shortened address for display
  appKit: ReownAppKit | null; // To access modal.open, etc.
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

const projectId = import.meta.env.VITE_REOWN_PROJECT_ID || 'YOUR_PROJECT_ID';
console.log('WalletContext: VITE_REOWN_PROJECT_ID:', import.meta.env.VITE_REOWN_PROJECT_ID, 'Resolved projectId:', projectId);

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

const appKitInstance: ReownAppKit | null = typeof window !== 'undefined'
  ? (createAppKit({
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
    }) as unknown as ReownAppKit)
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
  // `useAppKit` returns an object controlling the wallet modal.  Its full type
  // definitions are not available offline, so cast to our minimal interface.
  const appKit = useAppKit() as unknown as ReownAppKit | null; // Hook to interact with AppKit
  console.log('WalletContext: appKit from useAppKit():', appKit);
  if (appKit && typeof appKit.subscribeProvider !== 'function') {
    console.error('WalletContext: appKit from useAppKit() does NOT have a subscribeProvider method!', appKit);
  } else if (!appKit) {
    console.error('WalletContext: appKit from useAppKit() is null.');
  }

  const updateWalletState = useCallback(async () => {
    if (appKitInstance?.getState().isConnected && appKit?.getAddress()) {
      const currentAddress = appKit.getAddress();
        const currentChainId = appKit.getChainId();
        const currentProvider = appKit.getWalletProvider();

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
        }
      } else {
        setWallet(initialWalletState);
      }
    } else {
      setWallet(initialWalletState);
    }
  }, [appKit]);


  useEffect(() => {
    console.log('WalletContext: appKit:', appKit);
    console.log('WalletContext: typeof appKit.subscribeProvider:', typeof appKit?.subscribeProvider);
    console.log('WalletContext: typeof appKit.on:', typeof appKit?.on);
    console.log('WalletContext: typeof appKit.off:', typeof appKit?.off);

    if (appKit && typeof appKit.subscribeProvider === 'function') {
      console.log('WalletContext: Using appKit.subscribeProvider for provider changes.');
      updateWalletState(); // Initial state update
      const unsubscribe = appKit.subscribeProvider(updateWalletState);
      return () => unsubscribe();
    } else if (appKit && typeof appKit.on === 'function' && typeof appKit.off === 'function') {
      console.log('WalletContext: Using appKit.on/off for provider changes (event: "providerChanged").');
      updateWalletState(); // Initial state update
      appKit.on('providerChanged', updateWalletState);
      return () => appKit.off?.('providerChanged', updateWalletState); // Use optional chaining for off in case appKit becomes null
    } else {
      console.error(
        'WalletContext: Unable to subscribe to provider changes. Neither subscribeProvider nor on/off methods are available or appKit is invalid. appKit keys:',
        appKit ? Object.keys(appKit) : 'appKit is null'
      );
      console.warn('WalletProvider: Real-time wallet event subscription will not be active for this session.');
      // Optionally, attempt to update state once if appKitInstance is available and seems okay
      // This might be relevant if useAppKit() is the issue but appKitInstance was fine.
      if (appKitInstance && typeof appKitInstance.subscribeProvider === 'function' && !appKitInstance.getState().isConnected) {
        console.log('WalletContext: Attempting initial state update with appKitInstance as fallback (subscribeProvider).');
        // This is a speculative fallback
      } else if (appKitInstance && typeof appKitInstance.on === 'function' && !appKitInstance.getState().isConnected) {
        console.log('WalletContext: Attempting initial state update with appKitInstance as fallback (on method).');
        // This is another speculative fallback
      }
    }
  }, [appKit, updateWalletState]);


  const connectWallet = useCallback(async () => {
    if (!appKit) {
      captureException(new Error('AppKit not initialized in connectWallet'));
      return;
    }

    try {
      await appKit.open(); // Opens the modal
      // State update will be handled by the subscription
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
    if (appKitInstance?.getState().isConnected) {
      try {
        await appKitInstance.disconnect();
        // State update will be handled by the subscription
      } catch (error) {
        captureException(error);
      }
    }
  }, [appKit]);

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
