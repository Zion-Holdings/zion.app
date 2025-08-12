import React, { useState } from 'react';
// import { DelayTolerantDAO } from '@/offworld/delayDao';

export default function OffworldLab() {
  const [latency, setLatency] = useState(0);
  const [queuedVotes, setQueuedVotes] = useState(0);
  // const [dao] = useState(() => new DelayTolerantDAO());

  const tickLatency = () => setLatency(l => (l + 1) % 60);

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Offworld Lab</h1>
      <p className="text-yellow-600">⚠️ Temporarily disabled during deployment fixes</p>
      <p>Simulated latency: {latency}s</p>
      <p>Queued votes: {queuedVotes}</p>
      <div className="space-x-2">
        <button
          className="px-3 py-1 bg-gray-400 text-white rounded cursor-not-allowed"
          disabled
          onClick={() => {
            // dao.submitVote({ proposalId: 'demo', voter: 'tester', support: true });
            setQueuedVotes(v => v + 1);
            tickLatency();
          }}
        >
          Cast Offline Vote (Disabled)
        </button>
        <button
          className="px-3 py-1 bg-gray-400 text-white rounded cursor-not-allowed"
          disabled
          onClick={async () => {
            // await dao.connect();
            setQueuedVotes(0);
          }}
        >
          Sync to Satellite (Disabled)
        </button>
      </div>
    </div>
  );
}
