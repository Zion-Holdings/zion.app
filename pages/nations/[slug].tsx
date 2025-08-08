import { GetServerSideProps } from 'next';
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import { getNationBySlug } from '../../utils/nationStore';

export default function NationPublicPage({ nation }: { nation: any }) {
  if (!nation) return <EnhancedLayout><div>Not found</div></EnhancedLayout>;

  async function joinNation() {
    await fetch(`/api/nations/${nation.slug}/join`, { method: 'POST' });
    window.location.reload();
  }

  return (
    <EnhancedLayout>
      <div className="max-w-3xl mx-auto space-y-4">
        <div className="flex items-center gap-4">
          {nation.flagDataUrl && <img src={nation.flagDataUrl} alt="Flag" className="h-14 w-14 object-contain rounded" />}
          <div>
            <h1 className="text-2xl font-semibold">{nation.name}</h1>
            <p className="text-sm text-gray-600">Governance: {nation.governanceStyle} • Funding: {nation.fundingModel}</p>
          </div>
        </div>
        <button className="px-3 py-2 rounded bg-emerald-600 text-white" onClick={joinNation}>Join Nation</button>
        <div>
          <h2 className="text-lg font-semibold mb-1">Constitution</h2>
          <pre className="whitespace-pre-wrap text-sm bg-gray-50 p-3 rounded border">{nation.constitution || 'No constitution provided.'}</pre>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-3 rounded border">
            <div className="text-sm text-gray-600">Population</div>
            <div className="text-xl font-semibold">{nation.population}</div>
          </div>
          <div className="p-3 rounded border">
            <div className="text-sm text-gray-600">Currency</div>
            <div className="text-xl font-semibold">{nation.currency}</div>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Milestones & goals</h2>
          {nation.milestones?.length ? (
            <ul className="list-disc pl-6 text-sm">
              {nation.milestones.map((m: any) => (
                <li key={m.id}><span className="font-medium">{m.title}</span> — {m.status}</li>
              ))}
            </ul>
          ) : <p className="text-sm text-gray-600">No milestones yet.</p>}
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">DAO Proposals</h2>
          {nation.proposals?.length ? (
            <ul className="space-y-2">
              {nation.proposals.map((p: any) => (
                <li key={p.id} className="p-3 rounded border">
                  <div className="font-medium">{p.title}</div>
                  <div className="text-sm text-gray-600">{p.status}</div>
                </li>
              ))}
            </ul>
          ) : <p className="text-sm text-gray-600">No proposals yet.</p>}
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