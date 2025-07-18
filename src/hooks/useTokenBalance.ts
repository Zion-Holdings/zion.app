import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import {logErrorToProduction} from '@/utils/productionLogger';


const ERC20_ABI = [
  'function balanceOf(address owner) view returns (uint256)',
  'function decimals() view returns (uint8)'
];

export function useTokenBalance(
  address: string | null,
  tokenAddress: string,
  provider: ethers.Provider | null
) {
  const [balance, setBalance] = useState<string | null>(null);

  useEffect(() => {
    if (!address || !provider) {
      setBalance(null);
      return;
    }

    let isStale = false;

    async function fetchBalance() {
      try {
        const contract = new ethers.Contract(tokenAddress, ERC20_ABI, provider);
        if (typeof contract.balanceOf !== 'function' || typeof contract.decimals !== 'function') {
          throw new Error('Contract methods balanceOf or decimals are not functions');
        }
        const [rawBalance, decimals] = await Promise.all([
          contract.balanceOf(address),
          contract.decimals()
        ]);
        if (!isStale) {
          setBalance(ethers.formatUnits(rawBalance, decimals));
        }
      } catch (_err) {
        logErrorToProduction('useTokenBalance: failed to fetch balance', { data: err });
        if (!isStale) setBalance(null);
      }
    }

    fetchBalance();

    return () => {
      isStale = true;
    };
  }, [address, tokenAddress, provider]);

  return balance;
}
