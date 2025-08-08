import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';

const NationDashboardPage: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query as { slug?: string };
  const [nation, setNation] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const population = nation?.members?.length || 0;
  const talentCount = nation?.members?.filter((m: any) => m.role === 'talent').length || 0;
  const clientCount = nation?.members?.filter((m: any) => m.role === 'client').length || 0;
  const talentClientRatio = useMemo(() => {
    if (!nation) return '0:0';
    return `${talentCount}:${clientCount}`;
  }, [nation, talentCount, clientCount]);

  async function refresh() {
    if (!slug) return;
    const res = await fetch(`/api/nations/${slug}`);
    const data = await res.json();
    if (res.ok) setNation(data.nation);
  }

  useEffect(() => {
    if (!slug) return;
    refresh();
  }, [slug]);

  async function addMilestone(form: HTMLFormElement) {
    const formData = new FormData(form);
    const title = String(formData.get('title') || '');
    const description = String(formData.get('description') || '');
    const targetDate = String(formData.get('targetDate') || '');
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`/api/nations/${slug}/milestones`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description, targetDate })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Failed to add milestone');
      setNation(data.nation);
      form.reset();
    } catch (e: any) {
      setError(e?.message || 'Failed to add milestone');
    } finally {
      setLoading(false);
    }
  }

  async function addProposal(form: HTMLFormElement) {
    const formData = new FormData(form);
    const title = String(formData.get('title') || '');
    const description = String(formData.get('description') || '');
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`/api/nations/${slug}/proposals`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Failed to add proposal');
      setNation(data.nation);
      form.reset();
    } catch (e: any) {
      setError(e?.message || 'Failed to add proposal');
    } finally {
      setLoading(false);
    }
  }

  async function vote(proposalId: string, vote: 'for' | 'against') {
    if (!slug) return;
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`/api/nations/${slug}/proposals`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ proposalId, vote })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Failed to vote');
      setNation(data.nation);
    } catch (e: any) {
      setError(e?.message || 'Failed to vote');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <Head>
        <title>{nation?.name ? `${nation.name} - Dashboard` : 'Nation Dashboard'}</title>
      </Head>
      {!nation ? (
        <p>Loading...</p>
      ) : (
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            {nation.flagDataUrl && <img src={nation.flagDataUrl} alt="Flag" className="h-10 w-10 rounded" />}
            <h1 className="text-2xl font-semibold">{nation.name}</h1>
            <span className="text-sm text-gray-500">Currency: {nation.currency}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded">
              <p className="text-sm text-gray-500">Population</p>
              <p className="text-2xl font-semibold">{population}</p>
            </div>
            <div className="p-4 border rounded">
              <p className="text-sm text-gray-500">Talent vs. Client</p>
              <p className="text-2xl font-semibold">{talentClientRatio}</p>
            </div>
            <div className="p-4 border rounded">
              <p className="text-sm text-gray-500">Governance</p>
              <p className="text-lg">{nation.governanceStyle}</p>
            </div>
          </div>

          <section>
            <h2 className="font-medium mb-2">Milestones & Roadmap</h2>
            <form onSubmit={(e) => { e.preventDefault(); addMilestone(e.currentTarget); }} className="flex flex-col md:flex-row gap-2 mb-3">
              <input name="title" placeholder="Milestone title" className="border rounded p-2 flex-1 bg-transparent" required />
              <input name="description" placeholder="Description" className="border rounded p-2 flex-1 bg-transparent" />
              <input name="targetDate" type="date" className="border rounded p-2 bg-transparent" />
              <button disabled={loading} className="px-3 py-2 rounded bg-indigo-600 text-white disabled:opacity-50">Add</button>
            </form>
            <div className="space-y-2">
              {(nation.milestones || []).map((m: any) => (
                <div key={m.id} className="p-3 border rounded">
                  <p className="font-medium">{m.title}</p>
                  {m.description && <p className="text-sm text-gray-600 dark:text-gray-400">{m.description}</p>}
                  <p className="text-xs text-gray-500">{m.targetDate || 'No date'} • {m.status}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-medium mb-2">DAO Proposals</h2>
            <form onSubmit={(e) => { e.preventDefault(); addProposal(e.currentTarget); }} className="flex flex-col md:flex-row gap-2 mb-3">
              <input name="title" placeholder="Proposal title" className="border rounded p-2 flex-1 bg-transparent" required />
              <input name="description" placeholder="Description" className="border rounded p-2 flex-1 bg-transparent" />
              <button disabled={loading} className="px-3 py-2 rounded bg-green-600 text-white disabled:opacity-50">Create</button>
            </form>
            <div className="space-y-2">
              {(nation.proposals || []).map((p: any) => (
                <div key={p.id} className="p-3 border rounded">
                  <p className="font-medium">{p.title}</p>
                  {p.description && <p className="text-sm text-gray-600 dark:text-gray-400">{p.description}</p>}
                  <p className="text-xs text-gray-500">Status: {p.status} • For: {p.votesFor} • Against: {p.votesAgainst}</p>
                  <div className="flex gap-2 mt-2">
                    <button disabled={loading} onClick={() => vote(p.id, 'for')} className="px-3 py-1 rounded border">Vote For</button>
                    <button disabled={loading} onClick={() => vote(p.id, 'against')} className="px-3 py-1 rounded border">Vote Against</button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {error && <p className="text-red-600 text-sm">{error}</p>}
        </div>
      )}
    </div>
  );
};

export default NationDashboardPage;