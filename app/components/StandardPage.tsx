'use client';

import React from 'react';
import PageShell from '@/components/PageShell';
import PageTemplate from '@/components/PageTemplate';

export interface StandardPageProps {
  title: React.ReactNode;
  subtitle?: string;
  breadcrumbItems?: Array<{ label: string; href?: string }>;
  actions?: Array<{ label: string; href: string; style?: 'primary' | 'secondary' }>;
  children: React.ReactNode;
}

export default function StandardPage({
  title,
  subtitle,
  breadcrumbItems,
  actions,
  children,
}: StandardPageProps) {
  return (
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
  );
}
