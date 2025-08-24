import React from 'react';
import { SEO } from '@/components/SEO';
import { DisputeDashboard } from '@/components/disputes';

export default function DisputeManagement() {
  return (
    <>
      <SEO
        title="Dispute Management | Admin"
        description="Manage user disputes and resolve conflicts on the Zion platform"
        keywords="admin, dispute management, conflict resolution, Zion platform"
        canonical="https://ziontechgroup.com/admin/disputes"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-4">Dispute Management</h1>
            <p className="text-zion-slate-light text-lg">
              Monitor and resolve disputes between clients and talents to maintain platform integrity.
            </p>
          </div>
          
          <DisputeDashboard />
        </div>
      </main>
    </>
  );
}