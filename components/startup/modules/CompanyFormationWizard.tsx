import React, { useState } from 'react';

export default function CompanyFormationWizard() {
  const [region, setRegion] = useState('US');
  const [entityType, setEntityType] = useState('LLC');

  async function handleGenerate() {
    try {
      await fetch('/api/startup-os/generate-docs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ region, entityType }),
      });
      alert('Formation documents drafted. Check your downloads or data store.');
    } catch (error) {
      alert('Failed to generate documents');
    }
  }

  return (
    <div id="company-formation" className="enhanced-card">
      <h2 className="text-lg font-semibold mb-4">Company Formation Wizard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <label className="text-sm">
          <span className="block mb-1">Region</span>
          <select className="w-full border rounded px-3 py-2 bg-white dark:bg-black" value={region} onChange={(e) => setRegion(e.target.value)}>
            <option>US</option>
            <option>EU</option>
            <option>Other</option>
          </select>
        </label>
        <label className="text-sm">
          <span className="block mb-1">Entity Type</span>
          <select className="w-full border rounded px-3 py-2 bg-white dark:bg-black" value={entityType} onChange={(e) => setEntityType(e.target.value)}>
            <option>LLC</option>
            <option>C-Corp</option>
            <option>DAO</option>
          </select>
        </label>
        <div className="flex items-end">
          <button onClick={handleGenerate} className="px-4 py-2 rounded bg-blue-600 text-white enhanced-hover">Auto-generate Docs</button>
        </div>
      </div>
      <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
        <p>Will draft: Cap table, Founder agreement, EIN application.</p>
      </div>
    </div>
  );
}