
import React from 'react';
import { SEO } from '@/components/SEO';
import { AppHeader } from '@/layout/AppHeader';
import { Footer } from '@/components/Footer';
import { DisputeDetail } from '@/components/disputes';
import { ProtectedRoute } from '@/components/ProtectedRoute';

function DisputeDetailPage() {
  return (
    <ProtectedRoute>
      <>
        <SEO 
          title="Dispute Details | Zion AI Marketplace" 
          description="View and manage dispute details"
        />
        <AppHeader />
        <DisputeDetail />
        <Footer />
      </>
    </ProtectedRoute>
  );
}

export default DisputeDetailPage;
