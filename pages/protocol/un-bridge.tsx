import React from 'react';
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import ProposalGenerator from '../../components/governance/ProposalGenerator';

export default function UNBridgePage() {
  return (
    <EnhancedLayout>
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">UN Bridge</h1>
        <p className="text-gray-600">Draft, translate, and submit proposals to global institutions.</p>
        <ProposalGenerator />
      </div>
    </EnhancedLayout>
  );
}