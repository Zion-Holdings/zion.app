'use client';

import dynamic from 'next/dynamic';
import './leads.css';

const LeadsControl = dynamic(() => import('@/components/LeadsControl'), { ssr: false });

export default function LeadsClient() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-white">Leads Control Center</h1>
          <p className="text-slate-400 text-sm mt-1">
            Manage outreach, pipeline, and partnership leads from this workspace.
          </p>
        </div>
        <LeadsControl />
      </div>
    </main>
  );
}
