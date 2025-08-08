import React, { useEffect, useState } from 'react';

export default function DocsAdmin() {
  const [token, setToken] = useState('');
  const [value, setValue] = useState('');
  const [status, setStatus] = useState<string | null>(null);

  const fetchContent = async () => {
    setStatus('Loading...');
    const res = await fetch('/api/admin/docs/get', { headers: { 'x-admin-token': token } });
    if (!res.ok) {
      setStatus('Failed to load');
      return;
    }
    const json = await res.json();
    setValue(JSON.stringify(json, null, 2));
    setStatus('Loaded');
  };

  const saveContent = async () => {
    setStatus('Saving...');
    try {
      const parsed = JSON.parse(value);
      const res = await fetch('/api/admin/docs/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-admin-token': token },
        body: JSON.stringify(parsed),
      });
      if (!res.ok) throw new Error('Save failed');
      const data = await res.json();
      setStatus(`Saved version ${data.version}`);
    } catch (e) {
      setStatus('Invalid JSON or save error');
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Docs Admin</h1>
      <div className="flex items-center gap-2">
        <input
          placeholder="Admin token"
          type="password"
          className="border rounded px-3 py-2 text-sm w-64"
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
        <button onClick={fetchContent} className="px-3 py-2 text-sm rounded bg-gray-900 text-white">Load</button>
        <button onClick={saveContent} className="px-3 py-2 text-sm rounded bg-green-600 text-white">Save</button>
        {status && <p className="text-sm text-gray-600">{status}</p>}
      </div>
      <textarea
        className="w-full h-[70vh] border rounded p-3 font-mono text-sm"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}