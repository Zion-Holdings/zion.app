import Head from 'next/head';
import market from '../../data/automation/market.json';

type Download = { package: string; downloads: number };

type Trending = { language: string; mentions: number };

export default function MarketAutomation() {
  const downloads = (market.metrics?.npmDownloads as Download[]) || [];
  const trending = (market.metrics?.githubTrending as Trending[]) || [];
  return (
    <div>
      <Head>
        <title>Market Signals Watcher</title>
      </Head>
      <h1 className="text-2xl font-semibold mb-2">Market Signals Watcher</h1>
      <p className="text-sm opacity-80 mb-4">Updated {new Date(market.updatedAt).toLocaleString()}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="enhanced-card border border-gray-100 dark:border-gray-800">
          <div className="font-medium mb-2">NPM Weekly Downloads</div>
          <div className="space-y-1 text-sm">
            {downloads.map((d, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="opacity-80">{d.package}</span>
                <span className="tabular-nums">{d.downloads.toLocaleString()}</span>
              </div>
            ))}
            {downloads.length === 0 && <div className="opacity-60">No data yet.</div>}
          </div>
        </div>
        <div className="enhanced-card border border-gray-100 dark:border-gray-800">
          <div className="font-medium mb-2">GitHub Trending Languages</div>
          <div className="space-y-1 text-sm">
            {trending.map((t, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="opacity-80">{t.language}</span>
                <span className="tabular-nums">{t.mentions}</span>
              </div>
            ))}
            {trending.length === 0 && <div className="opacity-60">No data yet.</div>}
          </div>
        </div>
      </div>
    </div>
  );
}