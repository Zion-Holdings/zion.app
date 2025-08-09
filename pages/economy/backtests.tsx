import fs from 'fs';
import path from 'path';
import EnhancedLayout from '../../components/layout/EnhancedLayout';

export async function getStaticProps() {
  const dir = path.join(process.cwd(), 'data', 'reports', 'economy', 'backtests');
  let runs: string[] = [];
  if (fs.existsSync(dir)) {
    runs = fs.readdirSync(dir).filter((f) => f.startsWith('backtest-') && f.endsWith('.csv')).sort().reverse();
  }
  return { props: { runs } };
}

export default function BacktestsPage({ runs }: { runs: string[] }) {
  return (
    <EnhancedLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-semibold">Economy Backtests</h1>
        {runs.length ? (
          <ul className="list-disc pl-5 text-sm">
            {runs.slice(0, 30).map((f) => (
              <li key={f}><a className="underline" href={`/reports/economy/backtests/${f}`} target="_blank" rel="noreferrer">{f}</a></li>
            ))}
          </ul>
        ) : (
          <div className="text-sm opacity-80">No backtests available yet.</div>
        )}
      </div>
    </EnhancedLayout>
  );
}