// src/components/ConnectWalletButton.tsx
import React from 'react';
import { useWallet } from '@/context/WalletContext'; // Adjust path if needed

const ConnectWalletButton: React.FC = () => {
  const { isConnected, connectWallet, disconnectWallet, displayAddress, address, chainId } = useWallet();

  // Placeholder for ZION$ balance
  const [zionBalance, setZionBalance] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (isConnected && address) {
      // TODO: Implement actual ZION$ balance fetching here
      // 1. Check if ZION_TOKEN_CONTRACT_ADDRESS is set
      // 2. Use ethers.js to interact with the contract (if ERC20)
      //    const contract = new ethers.Contract(ZION_TOKEN_CONTRACT_ADDRESS, ERC20_ABI, provider);
      //    const balance = await contract.balanceOf(address);
      //    setZionBalance(ethers.utils.formatUnits(balance, 18)); // Assuming 18 decimals
      // OR
      // 3. Fetch from backend API if balance is off-chain
      console.log(`Fetching ZION$ balance for ${address} on chain ${chainId}`);
      setZionBalance("N/A"); // Placeholder
    } else {
      setZionBalance(null);
    }
  }, [isConnected, address, chainId]);

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
