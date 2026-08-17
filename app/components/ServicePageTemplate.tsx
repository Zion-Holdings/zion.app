// app/components/ServicePageTemplate.tsx
//
// ServicePageTemplate — wraps PageTemplate with the service-detail layout
// (hero → features → benefits → pricing → CTA).
//
// Replaces the ad-hoc <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
// pattern used across 90,000+ service pages.
import React from 'react';
import PageTemplate, { PageAction, FeatureItem, BenefitItem, PricingTier } from '@/components/PageTemplate';

export interface ServicePageTemplateProps {
  title: string;
  description?: string;
  category?: string;
  heroIcon?: string;
  subtitle?: string;
  features?: FeatureItem[];
  benefits?: BenefitItem[];
  pricing?: PricingTier[];
  ctaLabel?: string;
  ctaHref?: string;
  actions?: PageAction[];
  breadcrumbItems?: Array<{ label: string; href?: string }>;
  showBottomCta?: boolean;
  children?: React.ReactNode;
}

const DEFAULT_CTA: PageAction = {
  label: 'Book a Free Consultation',
  href: 'https://calendly.com/kleber-ziontechgroup',
  external: true,
};

export default function ServicePageTemplate({
  title,
  description,
  category = 'AI Service',
  heroIcon = '🤖',
  subtitle,
  features,
  benefits,
  pricing,
  ctaLabel,
  ctaHref = 'https://calendly.com/kleber-ziontechgroup',
  actions,
  breadcrumbItems,
  showBottomCta = false,
  children,
}: ServicePageTemplateProps) {
  const resolvedActions = actions && actions.length > 0
    ? actions
    : [{ label: ctaLabel || DEFAULT_CTA.label, href: ctaHref, external: true }];

  const defaultBreadcrumb = breadcrumbItems || [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: title, href: undefined },
  ];

  return (
    <PageTemplate
      title={title}
      description={description}
      category={category}
      heroIcon={heroIcon}
      subtitle={subtitle}
      actions={resolvedActions}
      breadcrumbItems={defaultBreadcrumb}
      layout="serviceDetail"
      features={features}
      benefits={benefits}
      pricing={pricing}
      showBottomCta={showBottomCta}
    >
      {children}
    </PageTemplate>
  );
}
