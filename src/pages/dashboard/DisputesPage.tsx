
import React from 'react';
import { NextSeo } from '@/components/NextSeo';
import { Footer } from '@/components/Footer';
import { DisputeDashboard } from '@/components/disputes';
import { ProtectedRoute } from '@/components/ProtectedRoute';

function DisputesPage() {
  return (
    <ProtectedRoute>
      <>
        <NextSeo 
          title="Dispute Resolution Center | Zion AI Marketplace" 
          description="View and manage disputes between clients and talents"
        />
        <DisputeDashboard />
        <Footer />
      </>
    </ProtectedRoute>
  );
}

export default DisputesPage;
