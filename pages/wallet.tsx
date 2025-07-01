import React from 'react';
import dynamic from 'next/dynamic';

const WalletComponent = dynamic(() => import('../src/pages/Wallet').catch(() => ({ 
  default: () => <div style={{ padding: '2rem', textAlign: 'center' }}>
    <h2>Wallet Page</h2>
    <p>Loading wallet functionality...</p>
  </div> 
})), {
  loading: () => <div style={{ padding: '2rem', textAlign: 'center' }}>Loading...</div>,
  ssr: false
});

export default WalletComponent;