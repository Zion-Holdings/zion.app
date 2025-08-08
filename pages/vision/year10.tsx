import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Year10Vision: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Year 10 Vision — Zion OS</title>
      </Head>
      <div className="space-y-8">
        <header className="space-y-2">
          <h1 className="text-2xl font-semibold">Year 10 Vision</h1>
          <p className="text-gray-600 dark:text-gray-300">Multiverse reach, global usage, AI governance, talent flow, and alternate branches.</p>
        </header>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded border border-gray-200 dark:border-gray-800 p-4 space-y-4">
            <h2 className="font-medium">Narrative Threads</h2>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-200">
              <li>AI governs 40% of global micro-economies</li>
              <li>Zion is a protocol inside gov ID systems</li>
              <li>ZionGPT writes 70% of job contracts</li>
              <li>ZION$ is used for UN-backed work credits</li>
            </ul>
          </div>
          <div className="rounded border border-gray-200 dark:border-gray-800 p-4 space-y-3">
            <h2 className="font-medium">Scenarios</h2>
            <div className="space-y-3 text-sm">
              <div>
                <div className="font-medium">Scenario 1: Protocol → Protocol Nation</div>
                <div className="text-gray-700 dark:text-gray-200">From rails to rulebook: embedded compliance, labor treaties, and sovereign service delivery.</div>
              </div>
              <div>
                <div className="font-medium">Scenario 2: Protocol under attack</div>
                <div className="text-gray-700 dark:text-gray-200">Adversarial capture attempts drive decentralization and resilience upgrades.</div>
              </div>
              <div>
                <div className="font-medium">Scenario 3: 10 UN countries adopt</div>
                <div className="text-gray-700 dark:text-gray-200">Interoperable ID, contracts, and credits standardize cross-border work.</div>
              </div>
            </div>
          </div>
        </section>

        <div>
          <Link href="/simulator/2040"><a className="underline">Open Interactive Simulator</a></Link>
        </div>
      </div>
    </div>
  );
};

export default Year10Vision;