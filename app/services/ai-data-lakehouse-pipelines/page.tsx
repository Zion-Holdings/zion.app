import { Metadata } from 'next';
import Link from 'next/link';

export const metadata = {
  title: 'AI Data Lakehouse Pipelines | Zion Tech Group',
  description: 'Unified data lakehouse pipelines for batch, streaming, and ML workloads. AI-assisted ingestion, governance, and analytics on open table formats.',
};

export default function AIDataLakehousePipelinesPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-16 leading-relaxed">
      <h1 className="text-4xl font-bold mb-6">AI Data Lakehouse Pipelines</h1>
      <p className="text-lg mb-8">
        Modern data platforms need batch, streaming, and ML pipelines in one place. We design lakehouse pipelines on open table formats with AI-assisted quality controls.
      </p>
      <h2 className="text-2xl font-semibold mt-10 mb-4">What we deliver</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Open-table-format lakehouse with ACID transactions and time travel</li>
        <li>Batch and streaming ingestion pipelines with exactly-once delivery</li>
        <li>AI-assisted anomaly detection, schema enforcement, and data contracts</li>
        <li>BI and ML feature-store connectors for analytics and model training</li>
        <li>Cost governance, lineage, and policy automation across cloud object stores</li>
      </ul>
      <div className="flex flex-wrap gap-4">
        <Link href="/services" className="underline text-blue-600">Explore services</Link>
        <Link href="/contact" className="underline text-blue-600">Schedule a consult</Link>
        <Link href="https://calendly.com/kleber-ziontechgroup" className="underline text-blue-600" target="_blank" rel="noreferrer">Book a call</Link>
      </div>
    </article>
  );
}
