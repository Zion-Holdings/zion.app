import { ReactNode } from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export interface FeatureItem {
  title: string;
  description: string;
  icon?: string;
}

export interface UseCaseItem {
  title: string;
  description: string;
  icon?: string;
}

export interface PageData {
  title: string;
  description: string;
  category?: string;
  categoryColor?: string;
  categoryIcon?: ReactNode;
  iconEmoji?: string;
  features?: FeatureItem[];
  useCases?: UseCaseItem[];
  benefits?: string[];
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  breadcrumb?: { label: string; href: string }[];
  jsonLd?: Record<string, unknown>;
}

export interface StandardPageLayoutProps {
  data: PageData;
  children?: ReactNode;
}

const DEFAULT_CONTACT_INFO = '+1 302 464 0950 | kleber@ziontechgroup.com | 364 E Main St STE 1008, Middletown, DE 19709';

export default function StandardPageLayout({ data, children }: StandardPageLayoutProps) {
  const {
    title,
    description,
    category,
    categoryColor = 'from-purple-500 to-indigo-500',
    categoryIcon,
    iconEmoji,
    features,
    useCases,
    benefits,
    ctaLabel = 'Get Started',
    ctaHref = '/contact',
    secondaryCtaLabel = 'View Pricing',
    secondaryCtaHref = '/pricing',
    breadcrumb,
    jsonLd,
  } = data;

  // Parse the gradient color to get a matching border/accent color
  const accentColorClass = categoryColor.includes('red') ? 'border-red-400/20 bg-red-400/5 text-red-400' :
                           categoryColor.includes('blue') ? 'border-blue-400/20 bg-blue-400/5 text-blue-400' :
                           categoryColor.includes('teal') ? 'border-teal-400/20 bg-teal-400/5 text-teal-400' :
                           categoryColor.includes('sky') ? 'border-sky-400/20 bg-sky-400/5 text-sky-400' :
                           categoryColor.includes('green') ? 'border-green-400/20 bg-green-400/5 text-green-400' :
                           categoryColor.includes('amber') ? 'border-amber-400/20 bg-amber-400/5 text-amber-400' :
                           categoryColor.includes('orange') ? 'border-orange-400/20 bg-orange-400/5 text-orange-400' :
                           categoryColor.includes('cyan') ? 'border-cyan-400/20 bg-cyan-400/5 text-cyan-400' :
                           categoryColor.includes('yellow') ? 'border-yellow-400/20 bg-yellow-400/5 text-yellow-400' :
                           categoryColor.includes('pink') ? 'border-pink-400/20 bg-pink-400/5 text-pink-400' :
                           'border-purple-400/20 bg-purple-400/5 text-purple-400';

  return (
    <>
      {jsonLd && <JsonLd data={jsonLd} />}
      <main className="min-h-screen bg-slate-950 pt-20">
        <div className="container-page py-12">
          {breadcrumb && (
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-slate-500">
                {breadcrumb.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    {i > 0 && <span>/</span>}
                    {item.href ? (
                      <Link href={item.href} className="hover:text-purple-400 transition-colors">{item.label}</Link>
                    ) : (
                      <span className="text-slate-400">{item.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}

          {/* Hero Section */}
          <section className="mb-16">
            <div className="flex flex-col items-start gap-6 max-w-4xl">
              {category && (
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${accentColorClass} mb-2`}>
                  {categoryIcon && <span className="text-lg">{categoryIcon}</span>}
                  <span className="text-xs font-semibold uppercase tracking-wider">{category}</span>
                </div>
              )}

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                {iconEmoji && <span className="mr-3">{iconEmoji}</span>}
                <span className="gradient-text">{title}</span>
              </h1>

              <p className="text-xl text-slate-300 leading-relaxed max-w-3xl">{description}</p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href={ctaHref}
                  className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg hover:opacity-90 transition"
                >
                  {ctaLabel}
                </a>
                <a
                  href={secondaryCtaHref}
                  className="inline-flex items-center px-8 py-4 rounded-xl border border-slate-700 text-slate-200 font-semibold text-lg hover:border-purple-500/40 transition"
                >
                  {secondaryCtaLabel}
                </a>
              </div>
            </div>
          </section>

          {/* Features Section */}
          {features && features.length > 0 && (
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">Key Features</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, i) => (
                  <div key={i} className="rounded-xl border border-slate-700/60 bg-slate-800/40 p-6">
                    {feature.icon && <div className="text-3xl mb-3">{feature.icon}</div>}
                    <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-sm text-slate-400">{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Use Cases Section */}
          {useCases && useCases.length > 0 && (
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">Use Cases</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {useCases.map((uc, i) => (
                  <div key={i} className="rounded-xl border border-slate-700/60 bg-slate-800/40 p-6">
                    <div className="flex items-start gap-4">
                      {uc.icon && <span className="text-2xl shrink-0">{uc.icon}</span>}
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">{uc.title}</h3>
                        <p className="text-sm text-slate-400">{uc.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Benefits Section */}
          {benefits && benefits.length > 0 && (
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">Benefits</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-slate-700/60 bg-slate-800/40">
                    <span className="text-green-400 text-lg shrink-0">✓</span>
                    <span className="text-slate-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Custom Content */}
          {children && <section className="mb-16">{children}</section>}

          {/* Final CTA */}
          <section className="border-t border-slate-800/60 pt-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-slate-400 max-w-xl mx-auto mb-8">{DEFAULT_CONTACT_INFO}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={ctaHref}
                  className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg hover:opacity-90 transition"
                >
                  {ctaLabel}
                </a>
                <Link
                  href="/contact/"
                  className="inline-flex items-center px-8 py-4 rounded-xl border border-slate-700 text-slate-200 font-semibold text-lg hover:border-purple-500/40 transition"
                >
                  Get Custom Proposal →
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
