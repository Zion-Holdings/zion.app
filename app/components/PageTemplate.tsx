// app/components/PageTemplate.tsx — Unified page template for all page types
import React from 'react';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export interface PageAction {
  label: string;
  href: string;
  style?: 'primary' | 'secondary' | 'ghost';
  external?: boolean;
}

export interface PageTemplateProps {
  /** Page metadata — used for SEO and structured data */
  title: string;
  description?: string;
  canonical?: string;
  breadcrumbItems?: Array<{ label: string; href?: string }>;

  /** Layout variant — controls hero rendering and content container */
  layout?: 'hero' | 'product' | 'tool' | 'centered';

  /** Legacy hero prop (backward compat). Maps variant: 'none' → layout: 'centered' */
  hero?: {
    variant?: 'gradient' | 'simple' | 'none';
    subtitle?: string;
    actions?: PageAction[];
  };

  /** Hero subtitle (shown below title in hero variant) */
  subtitle?: string;

  /** Hero actions (buttons rendered in hero section) */
  actions?: PageAction[];

  /** Product data for the 'product' layout variant */
  product?: {
    category: string;
    iconEmoji?: string;
    features: Array<{ title: string; description: string }>;
    useCases?: Array<{ title: string; description: string; icon?: string }>;
    benefits?: string[];
    ctaLabel?: string;
  };

  /** Top-level actions (rendered after content, before footer CTA) */
  bottomActions?: PageAction[];

  /** Whether to show breadcrumb navigation (defaults to true if breadcrumbItems provided) */
  showBreadcrumbs?: boolean;

  children: React.ReactNode;
}

const ACTION_CLASSES = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: 'btn-ghost',
} as const;

function renderAction(action: PageAction, index: number) {
  const classes = `${ACTION_CLASSES[action.style || 'primary']} text-lg px-10 py-4`;
  return action.external ? (
    <a
      key={index}
      href={action.href}
      className={classes}
      target="_blank"
      rel="noopener noreferrer"
    >
      {action.label}
    </a>
  ) : (
    <Link key={index} href={action.href} className={classes}>
      {action.label}
    </Link>
  );
}

/**
 * PageTemplate — the canonical, unified page shell for ALL content pages.
 *
 * Provides:
 *   - Consistent `<main>` wrapper with dark slate-950 background
 *   - Layout variants:
 *     - `hero` (default): gradient hero section with title + subtitle + CTAs
 *     - `product`: product card layout with features/use cases/benefits
 *     - `tool`: tool page layout (simple hero + breadcrumbs)
 *     - `centered`: minimal centered content (no hero)
 *   - Optional breadcrumb navigation
 *   - Standard content container with vertical rhythm
 *
 * Backward compatible with legacy `hero={{ variant: 'none' }}` prop.
 */
export default function PageTemplate({
  title,
  description,
  canonical,
  breadcrumbItems,
  layout,
  hero,
  subtitle,
  actions = [],
  product,
  bottomActions = [],
  showBreadcrumbs = true,
  children,
}: PageTemplateProps) {
  // canonical is used for SEO metadata at the page level, not in this component
  void canonical;
  // Backward compat: map legacy hero prop to layout
  const resolvedLayout = layout || (hero?.variant === 'none' ? 'centered' : (hero?.variant === 'simple' ? 'centered' : 'hero'));
  const resolvedSubtitle = subtitle || hero?.subtitle;
  const resolvedActions = actions.length > 0 ? actions : (hero?.actions || []);

  const showHero = resolvedLayout !== 'centered' && resolvedLayout !== 'product';
  const showProduct = resolvedLayout === 'product' && !!product;
  const showBreadcrumb = showBreadcrumbs && breadcrumbItems && breadcrumbItems.length > 1;

  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col">
      {/* Hero Section (hero and tool variants) */}
      {showHero && (
        <section
          className={
            resolvedLayout === 'hero'
              ? 'hero-banner'
              : 'py-16 px-4 text-center bg-slate-950'
          }
        >
          <div className="container-page">
            <div className="max-w-4xl mx-auto">
              <h1 className="hero-title">{title}</h1>
              {resolvedSubtitle && <p className="hero-subtitle">{resolvedSubtitle}</p>}
              {description && resolvedLayout !== 'tool' && (
                <p className="text-slate-300 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
                  {description}
                </p>
              )}
              {resolvedActions.length > 0 && (
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  {resolvedActions.map(renderAction)}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Product Layout (product variant) */}
      {showProduct && (
        <div className="container-page py-20">
          <div className="glass-card mb-12">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-900/30 text-purple-300 uppercase tracking-wider">
              {product!.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 mt-3 flex items-center gap-3">
              {product!.iconEmoji && <span className="text-4xl">{product!.iconEmoji}</span>}
              {title}
            </h1>
            <p className="text-slate-400 leading-relaxed max-w-3xl">
              {description || product!.features[0]?.description || ''}
            </p>
          </div>

          {/* Features */}
          <div className="glass-card mb-12">
            <h2 className="text-2xl font-semibold text-white mb-6">Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {product!.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-slate-900/50 rounded-xl border border-slate-700/50">
                  <span className="text-purple-400 text-lg shrink-0">✦</span>
                  <div>
                    <h3 className="font-semibold text-white">{feature.title}</h3>
                    <p className="text-slate-400 text-sm mt-1">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Use Cases */}
          {product!.useCases && product!.useCases.length > 0 && (
            <div className="glass-card mb-12">
              <h2 className="text-2xl font-semibold text-white mb-6">Use Cases</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {product!.useCases.map((uc, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-slate-900/50 rounded-xl border border-slate-700/50">
                    {uc.icon && <span className="text-2xl shrink-0">{uc.icon}</span>}
                    <div>
                      <h3 className="font-semibold text-white">{uc.title}</h3>
                      <p className="text-slate-400 text-sm mt-1">{uc.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Benefits */}
          {product!.benefits && product!.benefits.length > 0 && (
            <div className="glass-card mb-12">
              <h2 className="text-2xl font-semibold text-white mb-6">Benefits</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {product!.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-slate-900/50 rounded-xl border border-slate-700/50">
                    <span className="text-green-400 text-lg shrink-0">✓</span>
                    <span className="text-slate-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Main Content (for product pages that need body content) */}
          {children}

          {/* CTA */}
          <section className="cta-section text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how {title} can transform your business.
              364 E Main St STE 1008, Middletown, DE 19709 · +1 302 464 0950
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:kleber@ziontechgroup.com" className="btn-primary text-lg px-8">
                {product!.ctaLabel || 'Get a Custom Quote'}
              </a>
              <Link href="/configurator/" className="btn-secondary text-lg px-8">
                Get Custom Proposal →
              </Link>
            </div>
          </section>
        </div>
      )}

      {/* Breadcrumbs */}
      {showBreadcrumb && breadcrumbItems && (
        <div className="container-page breadcrumb-spacing">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      )}

      {/* Main Content */}
      <div className="container-page flex-1 py-12 sm:py-16 lg:py-20">
        {children}
      </div>

      {/* Bottom Actions */}
      {bottomActions.length > 0 && (
        <div className="container-page pb-20">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {bottomActions.map(renderAction)}
          </div>
        </div>
      )}
    </main>
  );
}
