import React from 'react';
import dynamic from 'next/dynamic';

const TeamComponent = dynamic(() => import('../src/pages/OrgChart').catch(() => ({ 
  default: () => <div style={{ padding: '2rem', textAlign: 'center' }}>
    <h2>Team Page</h2>
    <p>Loading team information...</p>
  </div> 
})), {
  loading: () => <div style={{ padding: '2rem', textAlign: 'center' }}>Loading...</div>,
  ssr: false
});

export default TeamComponent;
