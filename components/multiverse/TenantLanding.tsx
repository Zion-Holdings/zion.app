import React from 'react';
import { Tenant } from '../../utils/tenant';
import Link from 'next/link';

export default function TenantLanding({ tenant }: { tenant: Tenant | null }) {
  const title = tenant ? `${tenant.name}` : 'Zion';
  const subtitle = tenant?.defaultAiTerms === 'HIPAA'
    ? 'AI workflows aligned to healthcare compliance (HIPAA)'
    : tenant?.defaultAiTerms === 'GDPR'
    ? 'AI workflows aligned to data privacy (GDPR)'
    : 'AI-powered marketplace for talent and services';

  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--brand, #111827)' }}>{title}</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">{subtitle}</p>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {(tenant?.categories ?? ['Engineering', 'Design', 'Compliance']).map((c) => (
            <span key={c} className="px-3 py-1 rounded-full text-sm" style={{ backgroundColor: 'var(--accent, #3b82f6)', color: 'white' }}>{c}</span>
          ))}
        </div>
        <div className="flex items-center justify-center gap-4">
          <Link href="/services">
            <a className="px-5 py-3 rounded-md font-medium text-white" style={{ backgroundColor: 'var(--accent, #3b82f6)' }}>Explore Marketplace</a>
          </Link>
          <Link href="/contact"><a className="px-5 py-3 rounded-md border">Contact Sales</a></Link>
        </div>
      </div>
    </section>
  );
}