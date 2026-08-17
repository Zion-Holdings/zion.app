// app/components/SimplePageTemplate.tsx
//
// SimplePageTemplate — wraps PageTemplate for the most common page pattern:
// a centered title + subtitle/description + primary/secondary CTA buttons.
//
// Replaces the ad-hoc <main className="min-h-screen bg-slate-950">...</main>
// pattern used across ~62,000 simple service pages.
import React from 'react';
import PageTemplate, { PageAction } from '@/components/PageTemplate';

export interface SimplePageTemplateProps {
  title: string;
  description?: string;
  subtitle?: string;
  category?: string;
  heroIcon?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  actions?: PageAction[];
  breadcrumbItems?: Array<{ label: string; href?: string }>;
  showBottomCta?: boolean;
  children?: React.ReactNode;
}

export default function SimplePageTemplate({
  title,
  description,
  subtitle,
  category,
  heroIcon,
  ctaLabel = 'Get a Free Consultation',
  ctaHref = '/contact',
  secondaryCtaLabel = 'View All Services',
  secondaryCtaHref = '/services',
  actions,
  breadcrumbItems,
  showBottomCta = true,
  children,
}: SimplePageTemplateProps) {
  const resolvedActions = actions && actions.length > 0
    ? actions
    : [
        { label: ctaLabel, href: ctaHref, style: 'primary' as const },
        { label: secondaryCtaLabel, href: secondaryCtaHref, style: 'secondary' as const },
      ];

  return (
    <PageTemplate
      title={title}
      description={description}
      subtitle={subtitle}
      category={category}
      heroIcon={heroIcon}
      actions={resolvedActions}
      breadcrumbItems={breadcrumbItems}
      layout="hero"
      showBottomCta={showBottomCta}
    >
      {children}
    </PageTemplate>
  );
}
