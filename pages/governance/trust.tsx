import Head from 'next/head';
import Link from 'next/link';

export default function GovernanceTrustPage() {
  return (
    <>
      <Head>
        <title>Zion Governance & Trust</title>
        <meta name="description" content="Governance, legal registry options, and public trust commitments for the Zion Protocol." />
      </Head>
      <div className="space-y-12">
        <section className="space-y-3">
          <h1 className="text-3xl font-bold">Governance & Public Trust</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl">Appoint Core Stewards, delegate voting rights to nation and community DAOs, and publish quarterly reports with impact metrics.</p>
          <Link href="/foundation"><a className="underline text-sm">Back to Foundation Portal</a></Link>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Registry & Legal Structure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[{
              title: 'Cayman Foundation',
              desc: 'Globally recognized for crypto-native, non-profit style public-good coordination.'
            }, {
              title: 'Swiss Verein',
              desc: 'Member association model with global neutrality and flexible local chapters.'
            }, {
              title: 'US 501(c)(6)',
              desc: 'Business league for industry coordination and standards; disclosure-focused.'
            }, {
              title: 'DAO-native Wrapper',
              desc: 'LLC/wrapper (e.g., Otoco) for on-chain governance with minimized off-chain overhead.'
            }].map((opt) => (
              <div key={opt.title} className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
                <div className="font-medium">{opt.title}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{opt.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Governance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
              <div className="font-medium mb-1">Core Stewards</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Appointed via DAO ratification; accountable to publish roadmaps, risk registers, and post-mortems.</div>
            </div>
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
              <div className="font-medium mb-1">Delegated Voting</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Nation/community DAOs receive delegated rights proportionally to stake and contribution, with slashing/recall for inactivity or misconduct.</div>
            </div>
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
              <div className="font-medium mb-1">Quarterly Reports</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Financials, grants, impact metrics, and execution status are published within 30 days of quarter-end.</div>
            </div>
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
              <div className="font-medium mb-1">Public Archives</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Charter versions, MOUs, audits, and on-chain dashboards are publicly accessible and time-stamped.</div>
            </div>
          </div>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">Operator Prompt</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">Write a legal-neutral foundation charter for a decentralized AI protocol committed to sovereignty, open knowledge, and trust. Include DAO integration and multiverse grant rights.</p>
          <Link href="/foundation#charter"><a className="underline text-sm">Open Charter Generator</a></Link>
        </section>
      </div>
    </>
  );
}