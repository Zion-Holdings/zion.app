import React from 'react';
import AdminVaultPage from '../admin/vault';

export default function FounderBackup() {
  return (
    <div>
      <AdminVaultPage />
      <div className="mt-8 p-4 border rounded">
        <h2 className="text-xl font-semibold">Operator Prompt</h2>
        <p className="text-sm text-gray-500">Summarize the most critical 10 items a Zion OS founder should back up to recover global protocol control in the event of loss or migration.</p>
      </div>
    </div>
  );
}