import React from 'react';
import dynamic from 'next/dynamic';

const TalentsComponent = dynamic(() => import('../src/pages/TalentsPage').catch(() => ({ 
  default: () => <div style={{ padding: '2rem', textAlign: 'center' }}>
    <h2>Talents Page</h2>
    <p>Loading talent listings...</p>
  </div> 
})), {
  loading: () => <div style={{ padding: '2rem', textAlign: 'center' }}>Loading...</div>,
  ssr: false
});

export default TalentsComponent;
