import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Malta AI Customer Intelligence | Zion Tech Group',
  description: 'AI-driven customer intelligence for regulated industries in Malta.',
};

export default function Page() {
  return (
    <main>
      <h1>Malta AI Customer Intelligence</h1>
      <p>Deploy AI safely with explainability, consent tracking, and audit logs.</p>
      <ul>
        <li>Risk scoring models</li>
        <li>Privacy-first data pipelines</li>
        <li>Regulatory reporting exports</li>
      </ul>
    </main>
  );
}
