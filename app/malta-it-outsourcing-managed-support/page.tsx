import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Malta IT Outsourcing Managed Support | Zion Tech Group',
  description: '24/7 managed IT support and outsourcing for Malta-based operations.',
};

export default function Page() {
  return (
    <main>
      <h1>Malta IT Outsourcing Managed Support</h1>
      <p>Reliable 24/7 support for infrastructure, endpoints, and cloud.</p>
      <ul>
        <li>NOC / SOC coverage</li>
        <li>Incident response SLAs</li>
        <li>Multi-cloud management</li>
      </ul>
    </main>
  );
}
