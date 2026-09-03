import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Malta Blockchain Smart Contracts | Zion Tech Group',
  description: 'Smart contract development and audit support for blockchain operations in Malta.',
};

export default function Page() {
  return (
    <main>
      <h1>Malta Blockchain Smart Contracts</h1>
      <p>Launch auditable smart contracts with custody and compliance controls.</p>
      <ul>
        <li>Solidity / Move development</li>
        <li>Security review pipelines</li>
        <li>VASP-ready operational workflows</li>
      </ul>
    </main>
  );
}
