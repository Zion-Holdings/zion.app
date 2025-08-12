
import React from 'react';
import { SEO } from '@/components/SEO';
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
        
        <main className="container mx-auto py-10 px-4">
          <ContractBuilderContent />
        </main>
        
      </>
    </ProtectedRoute>
  );
}

export default ContractBuilderPage;
