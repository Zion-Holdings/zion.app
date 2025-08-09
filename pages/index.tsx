import type { NextPage } from 'next';
import Head from 'next/head';

const Index: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Index - Zion Tech Solutions</title>
        <meta name="description" content="Index page" />
      </Head>
      
      <main>
        <h1 className="text-3xl font-semibold mb-4">ZION$ Autonomous Economy Suite</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a href="/economy/simulator" className="block p-4 rounded border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900">
            <h2 className="font-semibold">Interactive Economy Simulator</h2>
            <p className="text-sm opacity-80">Model token flow, treasury health, velocity, and inflation/deflation. Export CSV/JSON/PDF and snapshot for governance.</p>
          </a>
                     <a href="/economy/auto-report" className="block p-4 rounded border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900">
             <h2 className="font-semibold">Autopilot Reports</h2>
             <p className="text-sm opacity-80">Daily autonomous runs in the cloud generate economy reports and publish downloadable artifacts.</p>
           </a>
           <a href="/economy/optimizer" className="block p-4 rounded border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900">
             <h2 className="font-semibold">Emissions Optimizer</h2>
             <p className="text-sm opacity-80">Searches burn/tax and emission schedules to maximize treasury health and growth under inflation constraints.</p>
           </a>
        </div>
        <div className="mt-6 text-sm opacity-90">
          <p><strong>Fully autonomous:</strong> Managed by GitHub Actions on a daily schedule; changes are committed back to the repository.</p>
        </div>
      </main>
    </div>
  );
};

export default Index;