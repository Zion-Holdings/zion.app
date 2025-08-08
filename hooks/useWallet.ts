import { useCallback, useEffect, useState } from 'react';

let Web3ModalClass: any | null = null;
let ethersLib: any | null = null;

export function useWallet() {
  const [address, setAddress] = useState<string | null>(null);
  const [chainId, setChainId] = useState<number | null>(null);
  const [provider, setProvider] = useState<any>(null);

  useEffect(() => {
    (async () => {
      if (typeof window === 'undefined') return;
      try {
        const [{ default: Web3Modal }, { ethers }] = await Promise.all([
          import('web3modal'),
          import('ethers') as any,
        ]);
        Web3ModalClass = Web3Modal;
        ethersLib = ethers;
      } catch {
        // ignore
      }
    })();
  }, []);

  const connect = useCallback(async () => {
    if (!Web3ModalClass || !ethersLib) return;
    const web3Modal = new Web3ModalClass({ cacheProvider: true });
    const instance = await web3Modal.connect();
    const provider = new ethersLib.providers.Web3Provider(instance);
    const signer = provider.getSigner();
    const addr = await signer.getAddress();
    const network = await provider.getNetwork();
    setProvider(provider);
    setAddress(addr);
    setChainId(Number(network.chainId));
  }, []);

  const disconnect = useCallback(async () => {
    setProvider(null);
    setAddress(null);
    setChainId(null);
  }, []);

  return { address, chainId, provider, connect, disconnect };
}