// src/components/ConnectWalletButton.tsx
import React from 'react';
import { useWallet } from '@/context/WalletContext';
import { useTokenBalance } from '@/hooks/useTokenBalance';
import { ZION_TOKEN_CONTRACT_ADDRESS } from '@/config/governanceConfig';

const ConnectWalletButton: React.FC = () => {
  const { isConnected, connectWallet, disconnectWallet, displayAddress, address, provider } = useWallet();

  const zionBalance = useTokenBalance(address, ZION_TOKEN_CONTRACT_ADDRESS, provider);

  if (isConnected) {
    return (
      <div>
        <p>Connected: {displayAddress}</p>
        {zionBalance && <p>ZION$: {zionBalance}</p>}
        <button onClick={disconnectWallet} style={{ marginLeft: '10px' }}>
          Disconnect Wallet
        </button>
      </div>
    );
  }

  return (
    <button onClick={connectWallet}>
      Connect Wallet
    </button>
  );
};

export default ConnectWalletButton;
