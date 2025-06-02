// src/context/WalletContext.tsx
import React, { createContext, useState, useContext, ReactNode, useCallback, useEffect } from 'react';
import { ethers } from 'ethers';
import { ZION_TOKEN_NETWORK_ID } from '@/config/governanceConfig';
import { createAppKit, useAppKit } from '@reown/appkit/react';
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

  const updateWalletState = useCallback(async () => {
    if (appKitInstance?.getState().isConnected && appKit?.getAddress()) {
      const currentAddress = appKit.getAddress();
      const currentChainId = appKit.getChainId();
      const currentProvider = appKit.getWalletProvider();

      if (currentAddress && currentChainId && currentProvider) {
        const ethersProvider = new ethers.BrowserProvider(currentProvider);
        const ethersSigner = await ethersProvider.getSigner();
        setWallet({
          provider: ethersProvider,
          signer: ethersSigner,
          address: currentAddress,
          chainId: Number(currentChainId), // Ensure chainId is a number
          isConnected: true,
        });
      } else {
        setWallet(initialWalletState);
      }
    } else {
      setWallet(initialWalletState);
    }
  }, [appKit]);


  useEffect(() => {
    if (appKit) {
      // Initial state update
      updateWalletState();

      // Subscribe to AppKit state changes
      const unsubscribe = appKit.subscribeProvider(updateWalletState);
      return () => unsubscribe(); // Cleanup subscription
    }
  }, [appKit, updateWalletState]);


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
    if (appKitInstance?.getState().isConnected) {
      try {
        await appKitInstance.disconnect();
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
