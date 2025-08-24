import { useEffect, useState } from "react";
import Link from "next/link";

export default function ClientDashboard() {
  const [offers, setOffers] = useState<any[]>([]);

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/marketplace/offers", {
        headers: { "x-demo-user-role": "client", "x-demo-user-id": "client-1" },
      });
      const json = await res.json();
      if (json.ok) setOffers(json.offers);
    }
    load();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Client Dashboard</h1>
        <Link href="/client/hire" className="px-3 py-2 rounded bg-indigo-600 text-white">Create Offer</Link>
      </div>

      {offers.map((o) => (
        <div key={o.id} className="border rounded p-4 flex items-center justify-between">
          <div>
            <div className="font-medium">Offer to {o.talentSlug}</div>
            <div className="text-sm text-gray-600">{o.scopeSummary} • {o.paymentTerms?.type}</div>
            <div className="text-xs">Status: <span className="px-2 py-0.5 bg-gray-100 rounded">{o.status}</span></div>
          </div>
          <div>
            {o.projectId ? (
              <Link href={`/project/${o.projectId}`} className="px-3 py-1 rounded bg-emerald-600 text-white">Open Project</Link>
            ) : (
              <span className="text-xs text-gray-500">Awaiting talent response</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}