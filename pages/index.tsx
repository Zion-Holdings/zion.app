import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="space-y-10">
      <section className="text-center py-10">
        <h1 className="text-4xl font-extrabold">Zion Autonomous Cloud</h1>
        <p className="mt-3 text-gray-600 dark:text-gray-300">
          New intelligent automations running 24/7 in the cloud — no servers, no humans.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <Link href="/cloud-automations" legacyBehavior>
            <a className="px-5 py-3 bg-black text-white dark:bg-white dark:text-black rounded">View Automations</a>
          </Link>
          <Link href="/whitepaper-builder" legacyBehavior>
            <a className="px-5 py-3 border rounded">Whitepaper Builder</a>
          </Link>
          <Link href="/docs/zion-protocol.pdf" legacyBehavior>
            <a className="px-5 py-3 border rounded">Download Whitepaper PDF</a>
          </Link>
          <Link href="/automations/index.json" legacyBehavior>
            <a className="px-5 py-3 border rounded">Automations Index JSON</a>
          </Link>
          <Link href="/metrics/emissions.csv" legacyBehavior>
            <a className="px-5 py-3 border rounded">Emissions CSV</a>
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Autonomous Agents</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Feature
            title="Autonomous Whitepaper Publisher"
            description="Continuously validates and republishes the whitepaper source with integrity checks."
            href="/cloud-automations"
          />
          <Feature
            title="Static Whitepaper PDF Exporter"
            description="Publishes a static PDF artifact for direct download."
            href="/docs/zion-protocol.pdf"
          />
          <Feature
            title="Content Drift Sentinel"
            description="Detects structural changes in the whitepaper to alert stakeholders."
            href="/cloud-automations"
          />
          <Feature
            title="Emissions Simulator"
            description="Projects token emissions over 10 years with CSV/JSON outputs."
            href="/metrics/emissions.csv"
          />
          <Feature
            title="Governance Quorum Forecaster"
            description="Computes global and regional quorum requirements."
            href="/docs/governance-quorum-forecast.md"
          />
          <Feature
            title="Route Inventory"
            description="Snapshots public routes for monitoring and docs."
            href="/cloud-automations"
          />
          <Feature
            title="Repository Health Audit"
            description="Monitors repo size and file counts to prevent bloat."
            href="/cloud-automations"
          />
          <Feature
            title="Automations Index Writer"
            description="Exports a consolidated JSON index of all automations."
            href="/automations/index.json"
          />
          <Feature
            title="Multiverse Health Monitor"
            description="Observes regional deployment health and posts telemetry."
            href="/cloud-automations"
          />
          <Feature
            title="Governance Snapshot Syncer"
            description="Tracks governance proposals and participation signals."
            href="/cloud-automations"
          />
          <Feature
            title="AI Cache Refresher"
            description="Refreshes prompt graphs, adapters, and policy filters."
            href="/cloud-automations"
          />
          <Feature
            title="Talent Passport Evaluator"
            description="Evaluates credential updates and reputational signals."
            href="/cloud-automations"
          />
        </div>
      </section>
    </div>
  );
};

function Feature({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <Link href={href} legacyBehavior>
      <a className="block border rounded p-4 hover:bg-gray-50 dark:hover:bg-gray-900">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
      </a>
    </Link>
  );
}

export default Home;
