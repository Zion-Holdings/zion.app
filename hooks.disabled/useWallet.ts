import { useCallback, useEffect, useMemo, useState } from 'react';

export type WalletState = {
  account: string | null;
  chainId: number | null;
  provider: any | null;
};

declare global {
  interface Window {
    ethereum?: any;
  }
}

export function useWallet() {
  const [state, setState] = useState<WalletState>({ account: null, chainId: null, provider: null });
  const [connecting, setConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const connect = useCallback(async () => {
    setConnecting(true);
    setError(null);
    try {
      if (!window.ethereum) {
        throw new Error('No EIP-1193 wallet found. Please install MetaMask or a compatible wallet.');
      }
      // Simplified wallet connection without ethers
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const chainId = await window.ethereum.request({ method: 'eth_chainId' });
      
      setState({ 
        account: accounts[0] ?? null, 
        chainId: parseInt(chainId, 16), 
        provider: window.ethereum 
      });

      window.ethereum.on('accountsChanged', (accounts: string[]) => {
        setState((prev) => ({ ...prev, account: accounts[0] ?? null }));
      });
      window.ethereum.on('chainChanged', (chainIdHex: string) => {
        const chainId = parseInt(chainIdHex, 16);
        setState((prev) => ({ ...prev, chainId }));
      });
    } catch (e: any) {
      setError(e?.message ?? 'Failed to connect wallet');
    } finally {
      setConnecting(false);
    }
  }, []);

  const switchNetwork = useCallback(
    async (targetChainId: number) => {
      if (!window.ethereum) {
        setError('No wallet found');
        return;
      }
      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: `0x${targetChainId.toString(16)}` }],
        });
      } catch (e: any) {
        setError(e?.message ?? 'Failed to switch network');
      }
    },
    []
  );

  const disconnect = useCallback(() => {
    setState({ account: null, chainId: null, provider: null });
    setError(null);
  }, []);

  const connected = useMemo(() => Boolean(state.account), [state.account]);

  return {
    ...state,
    connected,
    connecting,
    error,
    connect,
    disconnect,
    switchNetwork,
  };
}