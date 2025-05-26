
import React from 'react';
import { NextSeo } from '@/components/NextSeo';
import { Footer } from '@/components/Footer';
import { DisputeDetail } from '@/components/disputes';
import { ProtectedRoute } from '@/components/ProtectedRoute';

function DisputeDetailPage() {
  return (
    <ProtectedRoute>
      <>
        <NextSeo 
          title="Dispute Details | Zion AI Marketplace" 
          description="View and manage dispute details"
        />
        <DisputeDetail />
        <Footer />
      </>
    </ProtectedRoute>
  );
}

export default DisputeDetailPage;
