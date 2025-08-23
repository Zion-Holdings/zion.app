import fs from 'fs';
import path from 'path';
import type { GetStaticProps } from 'next';

interface AuditReport {
  generatedAt?: string;
  metadata?: any;
  vulnerabilities?: any;
  error?: string;
  raw?: string;
}

type Props = { report: AuditReport };

export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
    const file = path.join(process.cwd(), 'public', 'automation', 'security-audit.json');
    const raw = fs.readFileSync(file, 'utf8');
    const data = JSON.parse(raw);
    return { props: { report: data }, revalidate: 86400 };
  } catch {
    return { props: { report: { error: 'No audit report yet.' } }, revalidate: 86400 };
  }
};

export default function SecurityAudit({ report }: Props) {
  return (
    <div className="space-y-4">
      <header className="space-y-1">
        <h1 className="text-3xl font-bold">Security Audit</h1>
        <p className="text-gray-600 dark:text-gray-300">Automated vulnerability scan summary.</p>
      </header>
      {report.error && <div className="text-red-600">{report.error}</div>}
      {report.generatedAt && (
        <div className="text-sm text-gray-500">Generated at: {new Date(report.generatedAt).toLocaleString()}</div>
      )}
      <pre className="whitespace-pre-wrap text-xs p-4 rounded border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/40 overflow-auto">
{JSON.stringify(report, null, 2)}
      </pre>
    </div>
  );
}