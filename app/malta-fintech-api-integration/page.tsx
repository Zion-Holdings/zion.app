import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Malta Fintech API Integration | Zion Tech Group',
  description: 'Robust API integration for fintech platforms in Malta with banking-grade security.',
};

export default function Page() {
  return (
    <main>
      <h1>Malta Fintech API Integration</h1>
      <p>Connect payments, KYC, and ledger services with auditable APIs.</p>
      <ul>
        <li>PSD2-ready integrations</li>
        <li>Open Banking connectors</li>
        <li>Webhook-driven reconciliation</li>
      </ul>
    </main>
  );
}
