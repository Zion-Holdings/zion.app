import EnhancedLayout from '../../components/layout/EnhancedLayout';
import { readAllNations } from '../../utils/nationStore';

export default function NationsIndex({ nations }: { nations: any[] }) {
  return (
    <EnhancedLayout>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-semibold">Nations</h1>
          <a className="px-3 py-2 rounded bg-indigo-600 text-white" href="/nation-builder">Create Nation</a>
        </div>
        {nations.length === 0 ? (
          <p className="text-sm text-gray-600">No nations yet. Create one!</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {nations.map((n) => (
              <a key={n.id} href={`/nations/${n.slug}`} className="p-4 rounded border flex items-center gap-3 hover:shadow">
                {n.flagDataUrl && <img src={n.flagDataUrl} className="h-10 w-10 rounded object-contain" />}
                <div>
                  <div className="font-medium">{n.name}</div>
                  <div className="text-xs text-gray-600">Pop {n.population} • {n.currency}</div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </EnhancedLayout>
  );
}

export async function getServerSideProps() {
  const nations = readAllNations();
  return { props: { nations } };
}