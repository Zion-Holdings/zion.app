import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Zion</title>
      </Head>
      <div className="py-12 space-y-12">
        <section>
          <h1 className="text-3xl font-semibold mb-4">Welcome to Zion</h1>
          <p className="text-gray-600 mb-6">Explore fundraising tools for every stage.</p>
          <Link href="/fundraising"><a className="px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black">Go to Fundraising</a></Link>
        </section>

        <section className="p-5 rounded-lg border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-black/30">
          <h2 className="text-xl font-medium">Autonomous Cloud Automations</h2>
          <p className="text-gray-600 mt-2">Always-on agents continuously improve the site, generate investor decks, and keep content fresh — no human or servers required.</p>
          <ul className="list-disc pl-6 mt-3 text-sm space-y-1">
            <li>Cloud Autopilot: health checks, link fixes, SEO optimization, responsive content, and sitemap refresh</li>
            <li>Fundraising Autopilot: generates decks for all stages and publishes investor reports</li>
            <li>Content Intelligence: monitors trends and drafts founder-ready posts</li>
            <li>Security: audits dependencies and runs static security checks</li>
            <li>SEO Reporter: inventories pages, sitemap presence, and gives recommendations</li>
          </ul>
          <div className="mt-4">
            <Link href="/automations"><a className="underline">View automations dashboard</a></Link>
          </div>
        </section>
      </div>
    </>
  );
}