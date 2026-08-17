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

export interface FeatureItem {
  title: string;
  description: string;
  icon?: string;
}

export interface BenefitItem {
  text: string;
  icon?: string;
}

export interface PricingTier {
  name: string;
  price: string;
  description?: string;
  features: string[];
  ctaLabel?: string;
  ctaHref?: string;
  popular?: boolean;
}

export interface PageTemplateProps {
  /** Page metadata — used for SEO and structured data */
  title: string;
  description?: string;
  canonical?: string;
  breadcrumbItems?: Array<{ label: string; href?: string }>;

  /** Layout variant — controls hero rendering and content container */
  layout?: 'hero' | 'product' | 'tool' | 'centered' | 'serviceDetail' | 'simple';

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
  /** Category chip label shown in hero (e.g. "AI Services") */
  category?: string;
  /** Emoji or icon shown in hero above title */
  heroIcon?: string;

  /** Service-detail sections */
  features?: FeatureItem[];
  benefits?: BenefitItem[];
  pricing?: PricingTier[];
  /** Whether to show the standard bottom CTA section (default: true for non-product) */
  showBottomCta?: boolean;
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
 *     - `serviceDetail`: service page with hero + features + benefits + pricing + CTA
 *     - `simple`: minimal centered content (same as centered, explicit name)
 *   - Optional breadcrumb navigation
 *   - Standard content container with vertical rhythm
 *   - Consistent bottom CTA section across all variants
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
  category,
  heroIcon,
  features,
  benefits,
  pricing,
  showBottomCta = true,
  showBreadcrumbs = true,
  children,
}: PageTemplateProps) {
  void canonical;
  void description; // description handled by page-level metadata

  // Backward compat: map legacy hero prop to layout
  const resolvedLayout = layout || (hero?.variant === 'none' ? 'centered' : (hero?.variant === 'simple' ? 'centered' : 'hero'));
  const resolvedSubtitle = subtitle || hero?.subtitle;
  const resolvedActions = actions.length > 0 ? actions : (hero?.actions || []);

  const isCentered = resolvedLayout === 'centered' || resolvedLayout === 'simple';
  const showHero = !isCentered && resolvedLayout !== 'product';
  const showProduct = resolvedLayout === 'product';
  const isServiceDetail = resolvedLayout === 'serviceDetail';
  const showServiceSections = isServiceDetail && (features?.length || benefits?.length || pricing?.length);

  const showBreadcrumb = showBreadcrumbs && breadcrumbItems && breadcrumbItems.length > 1;

  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col">
      {/* Breadcrumbs (above hero for all layouts except centered) */}
      {showBreadcrumb && !isCentered && (
        <div className="container-page breadcrumb-spacing">
          <Breadcrumb items={breadcrumbItems!} />
        </div>
      )}

      {/* Hero Section (hero, tool, serviceDetail layouts) */}
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
              {heroIcon && <span className="text-5xl mb-4 block">{heroIcon}</span>}
              {category && (
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-900/30 text-purple-300 uppercase tracking-wider inline-block mb-4">
                  {category}
                </span>
              )}
              <h1 className="hero-title">{title}</h1>
              {resolvedSubtitle && <p className="hero-subtitle">{resolvedSubtitle}</p>}
              {resolvedActions.length > 0 && (
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  {resolvedActions.map(renderAction)}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Breadcrumbs for centered layout (below hero) */}
      {showBreadcrumb && isCentered && (
        <div className="container-page breadcrumb-spacing">
          <Breadcrumb items={breadcrumbItems!} />
        </div>
      )}

      {/* Product Layout (product variant) */}
      {showProduct && (
        <div className="container-page py-20">
          <div className="glass-card mb-12">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-900/30 text-purple-300 uppercase tracking-wider">
              {title}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 mt-3 flex items-center gap-3">
              {title}
            </h1>
          </div>
          <div className="space-y-8">
            {children}
          </div>
        </div>
      )}

      {/* Service Detail Sections (serviceDetail layout) */}
      {isServiceDetail && showServiceSections && (
        <div className="container-page flex-1 py-12">
          {features && features.length > 0 && (
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {features.map((f, i) => (
                  <div key={i} className="flex items-start gap-4 p-6 bg-slate-900/50 rounded-xl border border-slate-700/50">
                    {f.icon && <span className="text-purple-400 text-xl shrink-0">{f.icon}</span>}
                    <div>
                      <h3 className="font-semibold text-white mb-1">{f.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{f.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {benefits && benefits.length > 0 && (
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-white mb-6">Benefits</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-4 p-6 bg-slate-900/50 rounded-xl border border-slate-700/50">
                    <span className="text-green-400 text-lg shrink-0">✓</span>
                    <div>
                      <p className="text-slate-300 leading-relaxed">{b.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {pricing && pricing.length > 0 && (
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Pricing</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {pricing.map((tier, i) => (
                  <div
                    key={i}
                    className={`border rounded-xl p-6 flex flex-col ${
                      tier.popular
                        ? 'border-purple-400 bg-purple-900/20'
                        : 'border-slate-700/50 bg-slate-900/50'
                    }`}
                  >
                    <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-3xl font-bold text-purple-400 mb-4">{tier.price}</p>
                    {tier.description && (
                      <p className="text-slate-400 text-sm mb-4 leading-relaxed">{tier.description}</p>
                    )}
                    {tier.features.length > 0 && (
                      <ul className="space-y-2 mb-6 flex-1">
                        {tier.features.map((feat, j) => (
                          <li key={j} className="text-slate-400 text-sm flex items-center gap-2">
                            <span className="text-green-400">✓</span>
                            {feat}
                          </li>
                        ))}
                      </ul>
                    )}
                    {(tier.ctaHref || '/contact') && (
                      <Link
                        href={tier.ctaHref || '/contact'}
                        className="btn-primary text-center text-sm py-2"
                      >
                        {tier.ctaLabel || 'Get Started'}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      )}

      {/* Main Content — for non-product layouts */}
      {!showProduct && !isServiceDetail && (
        <div className="container-page flex-1 py-12 sm:py-16 lg:py-20">
          {children}
        </div>
      )}

      {/* Children for serviceDetail layout when no structured sections */}
      {isServiceDetail && !showServiceSections && (
        <div className="container-page flex-1 py-12 sm:py-16 lg:py-20">
          {children}
        </div>
      )}

      {/* Bottom CTA */}
      {showBottomCta && !showProduct && (
        <div className="container-page pb-20">
          <div className="glass-card text-center py-16">
            <h2 className="text-2xl font-bold text-white mb-3">Need a custom AI solution?</h2>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              We can build a custom system on top of any of our services — or stitch
              several together into a single AI-first solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8">
                Get a Free Consultation
              </Link>
              <Link href="/services" className="btn-secondary text-lg px-8">
                Explore All Services →
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
