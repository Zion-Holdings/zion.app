import fs from 'fs';
import path from 'path';
import EnhancedLayout from '../../components/layout/EnhancedLayout';

export async function getStaticProps() {
  const recDir = path.join(process.cwd(), 'data', 'policy', 'recommendations');
  let latest: string | null = null;
  let recommendation: any = null;
  if (fs.existsSync(recDir)) {
    const latestPath = path.join(recDir, 'latest.json');
    if (fs.existsSync(latestPath)) {
      try { latest = JSON.parse(fs.readFileSync(latestPath, 'utf8')).latest; } catch {}
    }
    if (latest) {
      const p = path.join(recDir, `${latest}.json`);
      if (fs.existsSync(p)) {
        try { recommendation = JSON.parse(fs.readFileSync(p, 'utf8')); } catch {}
      }
    }
  }
  // Find the newest proposal md
  const propDir = path.join(process.cwd(), 'docs', 'governance', 'proposals');
  let proposal: string | null = null;
  if (fs.existsSync(propDir)) {
    const files = fs.readdirSync(propDir).filter((f) => f.endsWith('.md')).sort().reverse();
    proposal = files[0] || null;
  }
  return { props: { latest, recommendation, proposal } };
}

export default function PolicyPage({ latest, recommendation, proposal }: any) {
  return (
    <EnhancedLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-semibold">Policy Recommendation</h1>
        {recommendation ? (
          <div className="text-sm space-y-2">
            <div>Generated: {recommendation.createdAt}</div>
            <div>Burn/Tax: {recommendation.parameters.burnTaxPercent}%</div>
            <div>Schedule: {recommendation.parameters.emissionSchedule}</div>
            <div>Monthly change: {recommendation.parameters.emissionMonthlyChangePct}%</div>
            <div>Expected avg inflation: {Number(recommendation.expected.avgInflationPct).toFixed(2)}%</div>
            <div>Expected ending treasury: {Math.round(Number(recommendation.expected.endingTreasury)).toLocaleString()}</div>
            <div>Expected ending supply: {Math.round(Number(recommendation.expected.endingSupply)).toLocaleString()}</div>
            {proposal ? (
              <div className="pt-2"><a className="underline" href={`/docs/governance/proposals/${proposal}`} target="_blank" rel="noreferrer">Open proposal</a></div>
            ) : null}
          </div>
        ) : (
          <div className="text-sm opacity-80">No recommendation available yet.</div>
        )}
      </div>
    </EnhancedLayout>
  );
}