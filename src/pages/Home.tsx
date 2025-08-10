import React from 'react';
import { useTranslation } from 'react-i18next';
import dynamic from 'next/dynamic';
import { useAuth } from '@/hooks/useAuth';
import { NextSeo } from '@/components/NextSeo';
import Link from 'next/link';

const CategoriesSection = dynamic(() =>
  import('@/components/CategoriesSection').then((mod) => ({
    default: mod.CategoriesSection,
  })),
);
const BenefitsSection = dynamic(() =>
  import('@/components/BenefitsSection').then((mod) => ({
    default: mod.BenefitsSection,
  })),
);
const HowItWorksSection = dynamic(() =>
  import('@/components/HowItWorksSection').then((mod) => ({
    default: mod.HowItWorksSection,
  })),
);
const NewsletterSection = dynamic(() =>
  import('@/components/NewsletterSection').then((mod) => ({
    default: mod.NewsletterSection,
  })),
);
const FeaturedListingsSection = dynamic(() =>
  import('@/components/FeaturedListingsSection').then((mod) => ({
    default: mod.FeaturedListingsSection,
  })),
);
const HeroSection = dynamic(() =>
  import('@/components/HeroSection').then((mod) => ({
    default: mod.HeroSection,
  })),
);
const QuickAccess = dynamic(() =>
  import('@/components/home/QuickAccess').then((mod) => ({
    default: mod.QuickAccess,
  })),
);
const FeatureCTAs = dynamic(() =>
  import('@/components/home/FeatureCTAs').then((mod) => ({
    default: mod.FeatureCTAs,
  })),
);
const FeatureHighlights = dynamic(() =>
  import('@/components/home/FeatureHighlights').then((mod) => ({
    default: mod.FeatureHighlights,
  })),
);
const InteractiveFeatures = dynamic(() =>
  import('@/components/home/InteractiveFeatures').then((mod) => ({
    default: mod.InteractiveFeatures,
  })),
);
const ITServiceRequestHero = dynamic(() =>
  import('@/components/home/ITServiceRequestHero').then((mod) => ({
    default: mod.ITServiceRequestHero,
  })),
);
const AllFeaturesSection = dynamic(() =>
  import('@/components/home/AllFeaturesSection').then((mod) => ({
    default: mod.AllFeaturesSection,
  })),
);
const ProductVideoSection = dynamic(() =>
  import('@/components/home/ProductVideoSection').then((mod) => ({
    default: mod.ProductVideoSection,
  })),
);
const EnterpriseTestimonials = dynamic(() =>
  import('@/components/enterprise/EnterpriseTestimonials').then((mod) => ({
    default: mod.EnterpriseTestimonials,
  })),
);
const FaqSection = dynamic(() =>
  import('@/components/FaqSection').then((mod) => ({
    default: mod.FaqSection,
  })),
);

export default function Home() {
  const { t } = useTranslation();
  const { user } = useAuth();
  const firstName =
    user?.displayName?.split(' ')[0] || user?.name?.split(' ')[0];
  return (
    <div className="min-h-screen bg-background">
      <NextSeo
        title="Zion Tech Marketplace - Discover Innovative Tech Solutions"
        description="Explore Zion Tech Marketplace for game-changing solutions. Join now to connect, shop, and grow with leading innovators. Get started today for free resources and exclusive offers!"
        openGraph={{
          images: [{ url: 'https://app.ziontechgroup.com/og.png' }],
        }}
      />

      {user && (
        <div
          className="bg-primary/10 text-primary text-center p-2"
          data-testid="home-greeting"
        >
          {t('general.greeting_user', { name: firstName })}
        </div>
      )}

      <HeroSection />

      <QuickAccess
        className="animate-fadeIn"
        style={{ animationDelay: '0.1s' }}
      />

      <FeatureCTAs
        className="animate-fadeIn"
        style={{ animationDelay: '0.2s' }}
      />

      <InteractiveFeatures
        className="animate-fadeIn"
        style={{ animationDelay: '0.25s' }}
      />

      <FeatureHighlights
        className="animate-fadeIn"
        style={{ animationDelay: '0.3s' }}
      />

      <ProductVideoSection
        className="animate-fadeIn"
        style={{ animationDelay: '0.32s' }}
      />

      <AllFeaturesSection
        className="animate-fadeIn"
        style={{ animationDelay: '0.35s' }}
      />

      {/* Autonomous Cloud Automations Showcase */}
      <section className="mt-16 border-t pt-10">
        <h2 className="text-2xl font-bold mb-4">Autonomous Cloud Automations</h2>
        <p className="text-muted-foreground mb-6">Running continuously in the cloud without human intervention. Results sync to our repository and are publicly viewable.</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 list-disc pl-5">
          <li>
            <strong>Marketing (LinkedIn)</strong> – auto-posts latest blog.
            {' '}<Link className="text-primary underline" href="/api/health">Status</Link>
          </li>
          <li>
            <strong>Performance Audits</strong> – PageSpeed Insights.
            {' '}<Link className="text-primary underline" href="https://github.com/Zion-Holdings/zion.app/tree/main/data/reports/performance/psi" target="_blank">View reports</Link>
          </li>
          <li>
            <strong>Link Integrity</strong> – internal/external link checks.
            {' '}<Link className="text-primary underline" href="https://github.com/Zion-Holdings/zion.app/tree/main/data/reports/link-audit" target="_blank">View reports</Link>
          </li>
          <li>
            <strong>Sitemap Refresh</strong> – live crawl → sitemap.xml.
            {' '}<Link className="text-primary underline" href="/sitemap.xml" target="_blank">View sitemap</Link>
          </li>
          <li>
            <strong>SEO Audit</strong> – titles, descriptions, OG tags.
            {' '}<Link className="text-primary underline" href="https://github.com/Zion-Holdings/zion.app/tree/main/data/reports/seo" target="_blank">View reports</Link>
          </li>
          <li>
            <strong>Image Audit</strong> – formats and sizes.
            {' '}<Link className="text-primary underline" href="https://github.com/Zion-Holdings/zion.app/tree/main/data/reports/image-audit" target="_blank">View reports</Link>
          </li>
          <li>
            <strong>Accessibility (PSI)</strong> – a11y scores.
            {' '}<Link className="text-primary underline" href="https://github.com/Zion-Holdings/zion.app/tree/main/data/reports/a11y" target="_blank">View reports</Link>
          </li>
          <li>
            <strong>Security Headers</strong> – CSP and best-practice headers.
            {' '}<Link className="text-primary underline" href="https://github.com/Zion-Holdings/zion.app/tree/main/data/reports/security" target="_blank">View reports</Link>
          </li>
          <li>
            <strong>RSS Health</strong> – validates /feed.xml.
            {' '}<Link className="text-primary underline" href="https://github.com/Zion-Holdings/zion.app/tree/main/data/reports/rss" target="_blank">View reports</Link>
          </li>
          <li>
            <strong>Dependencies Vulnerability</strong> – OSV checks.
            {' '}<Link className="text-primary underline" href="https://github.com/Zion-Holdings/zion.app/tree/main/data/reports/security/dependencies" target="_blank">View reports</Link>
          </li>
          <li>
            <strong>OG Image</strong> – og:image reachability and type.
            {' '}<Link className="text-primary underline" href="https://github.com/Zion-Holdings/zion.app/tree/main/data/reports/og" target="_blank">View reports</Link>
          </li>
          <li>
            <strong>Uptime Synthetic Checks</strong> – latency and status.
            {' '}<Link className="text-primary underline" href="https://github.com/Zion-Holdings/zion.app/tree/main/data/reports/uptime" target="_blank">View reports</Link>
          </li>
          <li>
            <strong>Content Freshness</strong> – staleness by last-modified.
            {' '}<Link className="text-primary underline" href="https://github.com/Zion-Holdings/zion.app/tree/main/data/reports/content" target="_blank">View reports</Link>
          </li>
          <li>
            <strong>Canonical & Structured Data</strong> – canonical JSON-LD.
            {' '}<Link className="text-primary underline" href="https://github.com/Zion-Holdings/zion.app/tree/main/data/reports/seo" target="_blank">View reports</Link>
          </li>
          <li>
            <strong>Cache & Redirects</strong> – cache headers, redirects.
            {' '}<Link className="text-primary underline" href="https://github.com/Zion-Holdings/zion.app/tree/main/data/reports/cache" target="_blank">Cache</Link>
            {' / '}
            <Link className="text-primary underline" href="https://github.com/Zion-Holdings/zion.app/tree/main/data/reports/redirects" target="_blank">Redirects</Link>
          </li>
          <li>
            <strong>Automation Digest & Newsletter</strong> – latest reports & weekly draft.
            {' '}<Link className="text-primary underline" href="https://github.com/Zion-Holdings/zion.app/tree/main/data/reports/digests" target="_blank">Digest</Link>
            {' / '}
            <Link className="text-primary underline" href="https://github.com/Zion-Holdings/zion.app/tree/main/data/reports/newsletter/drafts" target="_blank">Newsletter</Link>
          </li>
        </ul>
      </section>

      <EnterpriseTestimonials />

      <CategoriesSection
        className="animate-fadeIn"
        style={{ animationDelay: '0.4s' }}
      />
      <BenefitsSection
        className="animate-fadeIn"
        style={{ animationDelay: '0.5s' }}
      />
      <HowItWorksSection
        className="animate-fadeIn"
        style={{ animationDelay: '0.6s' }}
      />
      <FeaturedListingsSection
        className="animate-fadeIn"
        style={{ animationDelay: '0.7s' }}
      />
      <ITServiceRequestHero />

      <FaqSection />
      <NewsletterSection
        {...({
          className: 'animate-fadeIn',
          style: { animationDelay: '0.8s' },
        } as { className?: string; style?: React.CSSProperties })}
      />
    </div>
  );
}
