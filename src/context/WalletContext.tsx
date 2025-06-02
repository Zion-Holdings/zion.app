// src/context/WalletContext.tsx
import React, { createContext, useState, useContext, ReactNode, useCallback, useEffect } from 'react';
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';
import { ZION_TOKEN_NETWORK_ID } from '@/config/governanceConfig';

// Define the shape of the wallet state and context
interface WalletState {
  provider: ethers.providers.Web3Provider | null;
  signer: ethers.Signer | null;
  address: string | null;
  chainId: number | null;
  isConnected: boolean;
}

interface WalletContextType extends WalletState {
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  displayAddress: string | null; // Shortened address for display
}

const initialWalletState: WalletState = {
  provider: null,
  signer: null,
  address: null,
  chainId: null,
  isConnected: false,
};

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const WalletProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [wallet, setWallet] = useState<WalletState>(initialWalletState);
  const [web3ModalInstance, setWeb3ModalInstance] = useState<Web3Modal | null>(null);

  useEffect(() => {
    // Initialize Web3Modal instance on client-side
    if (typeof window !== 'undefined') {
        const providerOptions = {
            // Example: Add options for WalletConnect, Coinbase Wallet, etc.
            // walletconnect: {
            //   package: WalletConnectProvider, // import WalletConnectProvider from "@walletconnect/web3-provider";
            //   options: {
            //     infuraId: "YOUR_INFURA_ID" // Or other RPC provider URL
            //   }
            // }
        };

        const NETWORK_MAP: Record<number, string> = {
            1: 'mainnet',
            4: 'rinkeby',
            5: 'goerli',
            137: 'matic',
        };

        const modal = new Web3Modal({
            network: NETWORK_MAP[ZION_TOKEN_NETWORK_ID] || 'mainnet',
            cacheProvider: true, // Optional
            providerOptions,
        });
        setWeb3ModalInstance(modal);
    }
  }, []);

  const connectWallet = useCallback(async () => {
    if (!web3ModalInstance) {
        console.error('Web3Modal not initialized');
        return;
    }
    try {
      const instance = await web3ModalInstance.connect();
      const provider = new ethers.providers.Web3Provider(instance);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      const network = await provider.getNetwork();

      setWallet({
        provider,
        signer,
        address,
        chainId: network.chainId,
        isConnected: true,
      });

      // Listen for account changes
      instance.on('accountsChanged', (accounts: string[]) => {
        if (accounts.length > 0) {
          setWallet(prev => ({ ...prev, address: accounts[0] }));
        } else {
          disconnectWallet();
        }
      });

      // Listen for chain changes
      instance.on('chainChanged', (chainId: number) => {
        // May need to re-initialize provider and signer
        console.log('Network changed to:', chainId);
        connectWallet(); // Reconnect to update provider and signer for the new chain
      });

      // Listen for disconnect
      instance.on('disconnect', (error: any) => {
        console.log('Disconnected', error);
        disconnectWallet();
      });

    } catch (error) {
      console.error('Error connecting wallet:', error);
    }
  }, [web3ModalInstance]);

  const disconnectWallet = useCallback(async () => {
    if (web3ModalInstance?.cachedProvider) {
        web3ModalInstance.clearCachedProvider();
    }
    // Reset Metamask specific state if it was the provider
    if (wallet.provider?.provider?.isMetaMask && wallet.provider?.provider?.request) {
        // This is a bit of a hack, official way to "disconnect" Metamask isn't really there
        // await wallet.provider.provider.request({
        // method: "wallet_requestPermissions",
        // params: [{ eth_accounts: {} }]
        // });
    }
    setWallet(initialWalletState);
  }, [web3ModalInstance, wallet.provider]);

  const displayAddress = wallet.address
    ? `${wallet.address.substring(0, 6)}...${wallet.address.substring(wallet.address.length - 4)}`
    : null;

  return (
    <WalletContext.Provider value={{ ...wallet, connectWallet, disconnectWallet, displayAddress }}>
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
