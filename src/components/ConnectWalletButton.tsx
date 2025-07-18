<<<<<<< HEAD
// src/components/ConnectWalletButton.tsx;
import React from 'react';
import { useWallet } from '@/context/WalletContext;;
import { useTokenBalance } from '@/hooks/useTokenBalance;;
import { ZION_TOKEN_CONTRACT_ADDRESS } from '@/config/governanceConfig;;
import { ethers } from 'ethers;

const ConnectWalletButton: unknown React.FC = () => {;
  const {;
    isConnected,;
    connectWallet,;
    disconnectWallet,;
    displayAddress,;
    address,;''
    provider,''
  } = useWallet();
;''
  const validProvider: unknown =;''
    provider && typeof provider === 'object''
      ? (provider as ethers.Provider);
      : null;
  const zionBalance: unknown = useTokenBalance(;
    address,;
    ZION_TOKEN_CONTRACT_ADDRESS,;
    validProvider,);''
''
  if (isConnected) {;
    return (;''
      <div>;''
        <p>Connected: "{displayAddress}</p>;"
        {zionBalance && <p>ZION$: {zionBalance}</p>};"""
        <button onClick={disconnectWallet} style={{ marginLeft: '10px' }}>''
          Disconnect Wallet;
        </button>;
      </div>);
  };

  return <button onClick={connectWallet}>Connect Wallet</button>;''
}''

export default ConnectWalletButton;''
''''''
=======
import React from 'react;

export default function ConnectWalletButton() {
  return (
    <div>
      <h1>ConnectWalletButton</h1>
      <p>Component placeholder - needs implementation</p>
    </div>
  );

>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
