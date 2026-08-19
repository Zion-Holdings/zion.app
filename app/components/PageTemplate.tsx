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
  const ActionComponent = Link;
  const resolvedBreadcrumbs = breadcrumbs || breadcrumbItems;
  const resolvedDescription = description ?? summary ?? '';
  return (
    <div className="w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {resolvedBreadcrumbs && resolvedBreadcrumbs.length > 0 && (
          <div className="mb-8">
            <Breadcrumb items={resolvedBreadcrumbs} />
          </div>
        )}

        {layout === 'hero' && (
          <div className="text-center max-w-4xl mx-auto mb-16">
            {heroIcon && <span className="text-5xl mb-4 block">{heroIcon}</span>}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">{title}</h1>
            {subtitle && <p className="text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto">{subtitle}</p>}
            {actions.length > 0 && (
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                {actions.map((action, idx) => (
                  <ActionComponent key={idx} href={action.href} className={`${action.style === 'secondary' ? 'btn-secondary' : 'btn-primary'} text-lg px-10 py-4 inline-flex items-center justify-center`}>
                    {action.label}
                  </ActionComponent>
                ))}
              </div>
            )}
          </div>
        )}

        {layout !== 'hero' && (
          <div className="max-w-4xl mx-auto mb-16">
            {heroIcon && <span className="text-5xl mb-4 block">{heroIcon}</span>}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">{title}</h1>
            {subtitle && <p className="text-xl text-slate-300 leading-relaxed mb-8">{subtitle}</p>}
            {actions.length > 0 && (
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                {actions.map((action, idx) => (
                  <ActionComponent key={idx} href={action.href} className={`${action.style === 'secondary' ? 'btn-secondary' : 'btn-primary'} text-lg px-10 py-4 inline-flex items-center justify-center`}>
                    {action.label}
                  </ActionComponent>
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
