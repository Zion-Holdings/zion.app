import { GetServerSideProps } from 'next';
import EnhancedLayout from '../../../components/layout/EnhancedLayout';
import { getNationBySlug, upsertNation } from '../../../utils/nationStore';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function NationDashboard({ nation: initialNation }: { nation: any }) {
  const [nation, setNation] = useState(initialNation);
  const [milestoneTitle, setMilestoneTitle] = useState('');
  const [proposalTitle, setProposalTitle] = useState('');
  const [proposalDesc, setProposalDesc] = useState('');

  async function addMilestone() {
    if (!milestoneTitle) return;
    const next = { ...nation };
    next.milestones = [
      { id: uuidv4(), title: milestoneTitle, status: 'planned' },
      ...(next.milestones || []),
    ];
    setNation(next);
    await fetch(`/api/nations/${nation.slug}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ milestones: next.milestones }),
    });
    setMilestoneTitle('');
  }

  async function createProposal() {
    if (!proposalTitle) return;
    await fetch(`/api/nations/${nation.slug}/proposals`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: proposalTitle, description: proposalDesc }),
    });
    setProposalTitle('');
    setProposalDesc('');
    window.location.reload();
  }

  const talentRatio = nation.talentCount || 0;
  const clientRatio = nation.clientCount || 0;

  return (
    <EnhancedLayout>
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {nation.flagDataUrl && <img src={nation.flagDataUrl} className="h-12 w-12 rounded object-contain" />}
            <div>
              <h1 className="text-2xl font-semibold">{nation.name} Dashboard</h1>
              <p className="text-sm text-gray-600">Currency: {nation.currency} • Governance: {nation.governanceStyle}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-600">Population</div>
            <div className="text-xl font-semibold">{nation.population}</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded border">
            <div className="text-sm text-gray-600">Talent vs. Client ratio</div>
            <div className="text-xl font-semibold">{talentRatio}:{clientRatio}</div>
          </div>
          <div className="p-4 rounded border">
            <div className="text-sm text-gray-600">Milestones</div>
            <div className="text-xl font-semibold">{nation.milestones?.length || 0}</div>
          </div>
          <div className="p-4 rounded border">
            <div className="text-sm text-gray-600">Open Proposals</div>
            <div className="text-xl font-semibold">{(nation.proposals || []).filter((p: any) => p.status === 'open').length}</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 rounded border space-y-3">
            <h2 className="font-semibold">Roadmap</h2>
            <div className="flex gap-2">
              <input className="flex-1 border rounded px-3 py-2" placeholder="Milestone title" value={milestoneTitle} onChange={e => setMilestoneTitle(e.target.value)} />
              <button className="px-3 py-2 rounded bg-indigo-600 text-white" onClick={addMilestone}>Add</button>
            </div>
            <ul className="space-y-2">
              {(nation.milestones || []).map((m: any) => (
                <li key={m.id} className="p-2 rounded border flex items-center justify-between">
                  <div>
                    <div className="font-medium text-sm">{m.title}</div>
                    <div className="text-xs text-gray-600">{m.status}</div>
                  </div>
                  <span className="text-xs px-2 py-1 rounded bg-gray-100">{m.status}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-4 rounded border space-y-3">
            <h2 className="font-semibold">Create Proposal</h2>
            <input className="w-full border rounded px-3 py-2" placeholder="Title" value={proposalTitle} onChange={e => setProposalTitle(e.target.value)} />
            <textarea className="w-full border rounded px-3 py-2 h-28" placeholder="Description" value={proposalDesc} onChange={e => setProposalDesc(e.target.value)} />
            <button className="px-3 py-2 rounded bg-green-600 text-white" onClick={createProposal}>Submit</button>
          </div>
        </div>
      </div>
    </EnhancedLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const slug = ctx.params?.slug as string;
  const nation = getNationBySlug(slug) || null;
  return { props: { nation } };
};