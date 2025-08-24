import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const TaxonomyAgent: NextPage = () => {
  return (
    <div>
      <Head>
        <title>AI Taxonomy Tagger Agent</title>
        <meta name="description" content="Daily AI-generated page tags." />
      </Head>
      <main className="space-y-4">
        <h1 className="text-2xl font-bold">AI Taxonomy Tagger Agent</h1>
        <p>Suggests topic tags for each page to improve discovery and navigation.</p>
        <Link href="/data/reports/taxonomy/latest.json"><a className="text-blue-600 underline">Latest Taxonomy Report (JSON)</a></Link>
      </main>
    </div>
  );
};

export default TaxonomyAgent;