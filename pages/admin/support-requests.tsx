import { GetServerSideProps } from 'next';
import { useState } from 'react';
import { readJson } from '../../utils/fsDb';

export const getServerSideProps: GetServerSideProps = async () => {
  const requests = readJson<any[]>('support/requests.json', []);
  return { props: { initialRequests: requests } };
};

export default function SupportRequests({ initialRequests }: { initialRequests: any[] }) {
  const [requests, setRequests] = useState(initialRequests);

  async function resolve(id: string) {
    await fetch('/api/support/resolve', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) });
    setRequests((prev: any[]) => prev.map((r) => (r.id === id ? { ...r, status: 'resolved', resolvedAt: Date.now() } : r)));
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Support Requests</h1>
      <div className="grid gap-3">
        {requests.length === 0 && <div className="opacity-70">No requests found.</div>}
        {requests.map((r) => (
          <div key={r.id} className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 flex items-center justify-between">
            <div className="text-sm">
              <div className="font-medium">{r.id}</div>
              <div className="opacity-80">Session: {r.sessionId}</div>
              <div className="opacity-80">Tag: {r.tag}</div>
              <div className="opacity-80">Reason: {r.reason}</div>
              <div className="opacity-80">Status: {r.status}</div>
            </div>
            {r.status !== 'resolved' && (
              <button onClick={() => resolve(r.id)} className="enhanced-button enhanced-button-primary">Mark Resolved</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}