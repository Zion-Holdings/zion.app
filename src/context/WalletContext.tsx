// src/context/WalletContext.tsx
import React, { createContext, useState, useContext, ReactNode, useCallback, useEffect } from 'react';
import { ethers } from 'ethers';
import { ZION_TOKEN_NETWORK_ID } from '@/config/governanceConfig';
import {
  createAppKit,
  useAppKit,
  useAppKitAccount,
  useAppKitNetwork,
  useAppKitProvider,
  useAppKitEvents,
} from '@reown/appkit/react';
import { EthersAdapter } from '@reown/appkit-adapter-ethers';
import { mainnet, polygon, goerli, optimism, arbitrum, base } from '@reown/appkit/networks'; // Import necessary chain objects

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
  appKit: ReturnType<typeof createAppKit> | null; // To access modal.open, etc.
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
// IMPORTANT: Replace 'YOUR_PROJECT_ID' with your actual WalletConnect Cloud project ID
const projectId = 'YOUR_PROJECT_ID';

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

const appKitInstance = typeof window !== 'undefined' ? createAppKit({
  adapters: [new EthersAdapter({
    ethers, // pass the ethers library instance
    // provider: undefined, // Optional: if you have a specific EIP-1193 provider to pre-configure
  })],
  networks: [targetNetwork], // Configure with the network ZION_TOKEN_NETWORK_ID maps to
  defaultNetwork: targetNetwork,
  projectId,
  metadata,
  features: {
    analytics: true, // Optional: enable analytics
    // ... other features like swaps, onramp if needed
  },
}) : null;
// --- End Reown AppKit Configuration ---

export const WalletProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [wallet, setWallet] = useState<WalletState>(initialWalletState);
  const appKit = useAppKit(); // Hook to interact with AppKit
  const { address } = useAppKitAccount();
  const { chainId } = useAppKitNetwork();
  const { walletProvider } = useAppKitProvider("eip155");

  const updateWalletState = useCallback(async () => {
    // Use address, chainId, walletProvider from hooks
    if (appKit?.getState().isConnected && address) {
      // const currentAddress = appKit.getAddress(); // Replaced by hook
      // const currentChainId = appKit.getChainId(); // Replaced by hook
      // const currentProvider = appKit.getWalletProvider(); // Replaced by hook

      if (address && chainId && walletProvider) {
        const ethersProvider = new ethers.BrowserProvider(walletProvider);
        const ethersSigner = await ethersProvider.getSigner();
        setWallet({
          provider: ethersProvider,
          signer: ethersSigner,
          address: address, // from hook
          chainId: Number(chainId), // from hook, ensure chainId is a number
          isConnected: true,
        });
      } else {
        setWallet(initialWalletState);
      }
    } else {
      setWallet(initialWalletState);
    }
  }, [appKit, address, chainId, walletProvider]); // Add hook values to dependency array

  // Subscribe to AppKit events
  useAppKitEvents({
    onChainChanged: updateWalletState,
    onAccountChanged: updateWalletState,
    onProviderChanged: updateWalletState, // Or a more specific handler if needed
    onDisconnect: () => { // Handle disconnect event specifically
      setWallet(initialWalletState);
    },
    // onConnect: updateWalletState, // Could also trigger updateWalletState on connect
  });

  useEffect(() => {
    // Initial state update on component mount if already connected
    // The useAppKitEvents will handle subsequent changes.
    if (appKit?.getState().isConnected) {
      updateWalletState();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appKit]); // updateWalletState is not needed here due to useAppKitEvents handling changes

  // connectWallet, disconnectWallet, displayAddress, and return statement remain the same
  // Ensure appKit from useAppKit() is used for open() and disconnect()
  // The appKitInstance in context is for modal etc.


  const connectWallet = useCallback(async () => {
    if (appKit) {
      try {
        await appKit.open(); // Opens the modal
        // State update will be handled by the subscription
      } catch (error) {
        console.error('Error connecting wallet:', error);
      }
    } else {
        console.error('AppKit not initialized');
    }
  }, [appKit]);

  const disconnectWallet = useCallback(async () => {
    if (appKit?.getState().isConnected) {
      try {
        await appKit.disconnect();
        // State update will be handled by the subscription
      } catch (error) {
        console.error('Error disconnecting wallet:', error);
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
