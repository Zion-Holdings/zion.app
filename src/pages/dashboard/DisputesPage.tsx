
import React from 'react';
import { SEO } from '@/components/SEO';
import { DisputeDashboard } from '@/components/disputes';
import { ProtectedRoute } from '@/components/ProtectedRoute';

function DisputesPage() {
  return (
    <ProtectedRoute>
      <>
        <SEO 
          title="Dispute Resolution Center | Zion AI Marketplace" 
          description="View and manage disputes between clients and talents"
        />
        <DisputeDashboard />
      </>
    </ProtectedRoute>
  );
}

export default DisputesPage;
