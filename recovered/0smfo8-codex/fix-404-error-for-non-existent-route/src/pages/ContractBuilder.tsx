
import React from 'react';
import { SEO } from '@/components/SEO';
import { AppHeader } from '@/components/layout/AppHeader';
import { Footer } from '@/components/Footer';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { ContractBuilderContent } from '@/components/contracts/page/ContractBuilderContent';

function ContractBuilderPage() {
  return (
    <ProtectedRoute>
      <>
        <SEO 
          title="Smart Contract Builder | Zion AI Marketplace" 
          description="Create and deploy blockchain-backed smart contracts for your projects"
        />
        <AppHeader />
        
        <main className="container mx-auto py-10 px-4">
          <ContractBuilderContent />
        </main>
        
        <Footer />
      </>
    </ProtectedRoute>
  );
}

export default ContractBuilderPage;
