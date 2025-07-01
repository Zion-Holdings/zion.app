import React from 'react';
import dynamic from 'next/dynamic';

const WishlistComponent = dynamic(() => import('../src/pages/Wishlist').catch(() => ({ 
  default: () => <div style={{ padding: '2rem', textAlign: 'center' }}>
    <h2>Wishlist Page</h2>
    <p>Loading wishlist functionality...</p>
  </div> 
})), {
  loading: () => <div style={{ padding: '2rem', textAlign: 'center' }}>Loading...</div>,
  ssr: false
});

export default WishlistComponent;