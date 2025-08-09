import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-2">Welcome</h1>
      <p className="text-sm opacity-80 mb-4">Explore our IT service providers and solutions.</p>
      <div className="flex gap-3 mb-8">
        <Link href="/providers"><a className="enhanced-button enhanced-button-primary">Browse Providers</a></Link>
        <Link href="/automations/ideas"><a className="enhanced-button enhanced-button-secondary">Autonomous Ideas Miner</a></Link>
        <Link href="/automations/market"><a className="enhanced-button enhanced-button-secondary">Market Signals Watcher</a></Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link href="/automations/ideas">
          <a className="enhanced-card enhanced-hover border border-gray-100 dark:border-gray-800">
            <div className="font-medium mb-1">Autonomous Ideas Miner</div>
            <div className="text-sm opacity-80">Continuously mines HN, arXiv, and GitHub to surface actionable ideas.</div>
          </a>
        </Link>
        <Link href="/automations/market">
          <a className="enhanced-card enhanced-hover border border-gray-100 dark:border-gray-800">
            <div className="font-medium mb-1">Market Signals Watcher</div>
            <div className="text-sm opacity-80">Watches NPM downloads and GitHub trends to inform decisions.</div>
          </a>
        </Link>
        <Link href="/automations/deps">
          <a className="enhanced-card enhanced-hover border border-gray-100 dark:border-gray-800">
            <div className="font-medium mb-1">Dependency Health Auditor</div>
            <div className="text-sm opacity-80">Audits vulnerabilities and outdated packages on a schedule.</div>
          </a>
        </Link>
        <Link href="/automations/github">
          <a className="enhanced-card enhanced-hover border border-gray-100 dark:border-gray-800">
            <div className="font-medium mb-1">GitHub Ecosystem Metrics</div>
            <div className="text-sm opacity-80">Tracks stars of top repos across key topics.</div>
          </a>
        </Link>
      </div>
    </div>
  );
}