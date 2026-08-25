// app/components/StandardPage.tsx
import React from 'react';
import JsonLd from '@/components/JsonLd';
import PageShell from '@/components/PageShell';
import PageTemplate from '@/components/PageTemplate';

const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Zion Tech Group',
  url: 'https://ziontechgroup.com',
  sameAs: [
    'https://linkedin.com/company/ziontechgroup',
    'https://x.com/ziontechgroup',
    'https://github.com/Zion-support',
  ],
};

export interface StandardPageProps {
  title: React.ReactNode;
  subtitle?: string;
  breadcrumbItems?: Array<{ label: string; href?: string }>;
  actions?: Array<{ label: string; href: string; style?: 'primary' | 'secondary' }>;
  children?: React.ReactNode;
}

export default function StandardPage({
  title,
  subtitle,
  breadcrumbItems,
  actions,
  children,
}: StandardPageProps) {
  return (
    <>
      <JsonLd data={organizationLd} />
      <PageShell>
        <PageTemplate
          title={title}
          subtitle={subtitle}
          breadcrumbItems={breadcrumbItems}
          actions={actions}
        >
          <div className="max-w-6xl mx-auto w-full">
            {children}
          </div>
        </PageTemplate>
      </PageShell>
    </>
  );
}
