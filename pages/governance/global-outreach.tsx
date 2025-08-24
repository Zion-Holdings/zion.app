import React from 'react';
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import ProposalGenerator from '../../components/governance/ProposalGenerator';

export default function GlobalOutreachPage() {
  return (
    <EnhancedLayout>
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">Global Outreach</h1>
        <p className="text-gray-600">Interface to generate and deliver DAO proposals internationally.</p>
        <ProposalGenerator />
      </div>
    </EnhancedLayout>
  );
}