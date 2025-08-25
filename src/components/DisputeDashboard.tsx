import React from 'react';

export function DisputeDashboard() {
  return (
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6">
      <h3 className="text-xl font-bold text-white mb-4">Dispute Overview</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-zion-cyan">8</div>
          <div className="text-zion-slate-light text-sm">Active Disputes</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-400">16</div>
          <div className="text-zion-slate-light text-sm">Resolved This Month</div>
        </div>
      </div>
      <div className="mt-4 text-center">
        <div className="text-lg font-semibold text-white">Average Resolution Time</div>
        <div className="text-2xl font-bold text-zion-purple">3.2 days</div>
      </div>
    </div>
  );
}