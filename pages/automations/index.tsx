import React, { useEffect, useState } from 'react';

export default function AutomationsIndex() {
  const [data, setData] = useState<{ updatedAt?: string; automations?: { key: string; name: string; latestUrl: string; lastGeneratedAt?: string }[] }>({});

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch('/data/reports/automations-latest.json');
        if (res.ok) {
          const json = await res.json();
          setData(json);
        }
      } catch {}
    }
    load();
  }, []);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Autonomous Automations</h1>
      <p className="text-gray-600 dark:text-gray-300">Live reports generated in the cloud and synced to this site.</p>
      {data.automations && data.automations.length ? (
        <ul className="space-y-3">
          {data.automations.map((a) => (
            <li key={a.key} className="rounded-xl border border-gray-200 dark:border-gray-800 p-4 flex items-center justify-between">
              <div>
                <div className="font-medium">{a.name}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Last generated: {a.lastGeneratedAt}</div>
              </div>
              <a href={a.latestUrl} className="enhanced-button enhanced-button-primary" target="_blank" rel="noreferrer">View JSON</a>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-gray-600 dark:text-gray-300">No automations available yet.</div>
      )}
    </div>
  );
}