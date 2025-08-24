import fs from 'fs';
import path from 'path';

type Report = { updatedAt?: string; description?: string; [key: string]: any };

export async function getStaticProps() {
  const readJson = (p: string): Report | null => {
    try {
      return JSON.parse(fs.readFileSync(p, 'utf8'));
    } catch {
      return null;
    }
  };

  const base = process.cwd();
  const docsSummary = readJson(path.join(base, 'data/reports/docs/summary.json'));
  const govSummary = readJson(path.join(base, 'data/reports/governance/summary.json'));

  return {
    props: {
      docsSummary: docsSummary || null,
      govSummary: govSummary || null,
    },
    revalidate: 300,
  };
}

export default function Automations({ docsSummary, govSummary }: { docsSummary: Report | null; govSummary: Report | null }) {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Autonomous Cloud Agents</h1>
      <p className="text-gray-600 dark:text-gray-300">These agents run on a schedule in the cloud and continuously improve the repository.</p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="border rounded p-5">
          <h2 className="font-semibold">Docs Intelligence Agent</h2>
          <p className="text-sm mt-1">Generates content maps and link checks for `/docs/gitbook`.</p>
          <pre className="text-xs bg-gray-50 dark:bg-gray-900 rounded p-3 mt-3 overflow-auto">{docsSummary ? JSON.stringify(docsSummary, null, 2) : 'No report yet.'}</pre>
        </div>
        <div className="border rounded p-5">
          <h2 className="font-semibold">Governance Insights</h2>
          <p className="text-sm mt-1">Extracts quorum and rules into structured data for analysis.</p>
          <pre className="text-xs bg-gray-50 dark:bg-gray-900 rounded p-3 mt-3 overflow-auto">{govSummary ? JSON.stringify(govSummary, null, 2) : 'No report yet.'}</pre>
        </div>
      </div>

      <div className="border rounded p-5">
        <h2 className="font-semibold">API Spec Generator</h2>
        <p className="text-sm mt-1">Consumes `/docs/gitbook/api` and publishes OpenAPI at <a className="underline" href="/openapi.json">/openapi.json</a>.</p>
      </div>
    </div>
  );
}