'use client';

import React from 'react';
import Link from 'next/link';
import Breadcrumb from './Breadcrumb';

export type PageAction = {
  label: string;
  href: string;
  style?: 'primary' | 'secondary';
  external?: boolean;
};

export type FeatureItem = {
  icon: string;
  title: string;
  description: string;
};

export type BenefitItem = {
  icon?: string;
  title: string;
  description: string;
};

export type PricingTier = {
  name: string;
  price: string;
  description?: string;
  features?: string[];
  popular?: boolean;
};

interface PageTemplateProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  headline?: React.ReactNode; // alias for title
  description?: string;
  summary?: string; // alias for description
  category?: string;
  heroIcon?: string;
  canonical?: string;
  breadcrumbItems?: Array<{ label: string; href?: string }>;
  breadcrumbs?: Array<{ label: string; href?: string }>; // alias
  layout?: 'hero' | 'centered' | 'product' | 'tool' | 'serviceDetail';
  actions?: PageAction[];
  features?: FeatureItem[];
  benefits?: BenefitItem[];
  pricing?: PricingTier[];
  showBottomCta?: boolean;
  children: React.ReactNode;
}

export default function PageTemplate({
  title,
  subtitle,
  headline,
  description,
  summary,
  category,
  heroIcon,
  canonical,
  breadcrumbItems = [],
  breadcrumbs,
  layout = 'hero',
  actions = [],
  features = [],
  benefits = [],
  pricing = [],
  showBottomCta = false,
  children,
}: PageTemplateProps) {
  return (
    <div className="w-full">
      {breadcrumbItems.length > 0 && (
        <div className="mb-6">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      )}

      {layout === 'hero' && (
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          {subtitle && <p className="text-xl text-slate-300 leading-relaxed mb-6">{subtitle}</p>}
          {actions.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {actions.map((action, idx) => (
                <Link key={idx} href={action.href} className={`${action.style === 'secondary' ? 'btn-secondary' : 'btn-primary'} text-lg px-10 py-4 inline-block`}>
                  {action.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      )}

      {layout !== 'hero' && (
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          {subtitle && <p className="text-xl text-slate-300 leading-relaxed mb-6">{subtitle}</p>}
          {actions.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-4">
              {actions.map((action, idx) => (
                <Link key={idx} href={action.href} className={`${action.style === 'secondary' ? 'btn-secondary' : 'btn-primary'} text-lg px-10 py-4 inline-block`}>
                  {action.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      )}

        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}
