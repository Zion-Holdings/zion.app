import { useEffect, useState } from "react";
import Link from "next/link";

export default function TalentDashboard() {
  const [offers, setOffers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const res = await fetch("/api/marketplace/offers", {
          headers: {
            "x-demo-user-role": "talent",
            // Demo: set current talent slug to match a profile in data/talent.ts
            "x-demo-talent-slug": "ava-chen",
          },
        });
        const json = await res.json();
        if (!json.ok) throw new Error(json.error || "Failed to load offers");
        setOffers(json.offers || []);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  async function act(id: string, action: string) {
    const res = await fetch("/api/marketplace/offers", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "x-demo-user-role": "talent",
        "x-demo-talent-slug": "ava-chen",
      },
      body: JSON.stringify({ id, action }),
    });
    const json = await res.json();
    if (!json.ok) {
      alert(json.error || "Action failed");
    } else {
      location.reload();
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <div className="bg-green-50 border border-green-200 rounded p-4">
        <div className="text-lg">🎉 You’ve been selected for a project!</div>
        <div className="text-sm text-gray-600">Review and accept the offer to kick things off.</div>
      </div>

      {loading && <div>Loading…</div>}
      {error && <div className="text-red-600">{error}</div>}

      <div className="space-y-4">
        {offers.map((o) => (
          <div key={o.id} className="border rounded p-4 flex justify-between items-center">
            <div>
              <div className="font-medium">Offer • {o.scopeSummary}</div>
              <div className="text-sm text-gray-600">Start: {new Date(o.startDateIso).toLocaleDateString()} • Terms: {o.paymentTerms?.type}</div>
              <div className="text-xs mt-1">
                Status: <span className="px-2 py-0.5 rounded bg-gray-100">{o.status}</span>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <button onClick={() => setExpandedId(expandedId === o.id ? null : o.id)} className="px-2 py-1 text-xs rounded border">View Offer</button>
              <button onClick={() => act(o.id, "accept")} className="px-3 py-1 rounded bg-emerald-600 text-white">Accept Offer</button>
              <button onClick={() => act(o.id, "request_changes")} className="px-3 py-1 rounded border">Request Changes</button>
              {o.projectId && (
                <Link href={`/project/${o.projectId}`} className="px-3 py-1 rounded bg-indigo-600 text-white">Open Project</Link>
              )}
            </div>
          </div>
          {expandedId === o.id && (
            <div className="mt-3 text-sm bg-gray-50 border rounded p-3">
              <div className="font-medium mb-1">Project details</div>
              <div><b>Start</b>: {new Date(o.startDateIso).toLocaleDateString()}</div>
              <div className="mt-1"><b>Scope</b>: {o.scopeSummary}</div>
              <div className="mt-1"><b>Terms</b>: {o.paymentTerms?.type}</div>
              {o.paymentTerms?.type === 'hourly' && <div>Rate: ${o.paymentTerms.hourlyRateUsd}/hr</div>}
              {o.paymentTerms?.type === 'fixed' && <div>Amount: ${o.paymentTerms.fixedAmountUsd}</div>}
              {o.paymentTerms?.type === 'milestone' && (
                <ul className="list-disc pl-5">
                  {(o.paymentTerms.milestones || []).map((m: any) => (
                    <li key={m.id}>{m.title}</li>
                  ))}
                </ul>
              )}
              {o.agreementUrl && (
                <div className="mt-1"><a href={o.agreementUrl} className="underline text-indigo-600" target="_blank" rel="noreferrer">View Agreement</a></div>
              )}
            </div>
          )}
          </div>
        ))}
      </div>
    </div>
  );
}