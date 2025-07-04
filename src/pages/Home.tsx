import React from 'react';
import { useTranslation } from 'react-i18next';
import dynamic from 'next/dynamic';
import safeDynamicImport from '@/utils/safeDynamicImport';
import { useAuth } from '@/hooks/useAuth';
import { NextSeo } from '@/components/NextSeo';

const CategoriesSection = safeDynamicImport(
  () => import('@/components/CategoriesSection').then((mod) => ({ default: mod.CategoriesSection })),
  { name: 'CategoriesSection' }
);
const BenefitsSection = safeDynamicImport(
  () => import('@/components/BenefitsSection').then((mod) => ({ default: mod.BenefitsSection })),
  { name: 'BenefitsSection' }
);
const HowItWorksSection = safeDynamicImport(
  () => import('@/components/HowItWorksSection').then((mod) => ({ default: mod.HowItWorksSection })),
  { name: 'HowItWorksSection' }
);
const NewsletterSection = safeDynamicImport(
  () => import('@/components/NewsletterSection').then((mod) => ({ default: mod.NewsletterSection })),
  { name: 'NewsletterSection' }
);
const FeaturedListingsSection = safeDynamicImport(
  () => import('@/components/FeaturedListingsSection').then((mod) => ({ default: mod.FeaturedListingsSection })),
  { name: 'FeaturedListingsSection' }
);
const HeroSection = safeDynamicImport(
  () => import('@/components/HeroSection').then((mod) => ({ default: mod.HeroSection })),
  { name: 'HeroSection' }
);
const QuickAccess = safeDynamicImport(
  () => import('@/components/home/QuickAccess').then((mod) => ({ default: mod.QuickAccess })),
  { name: 'QuickAccess' }
);
const FeatureCTAs = safeDynamicImport(
  () => import('@/components/home/FeatureCTAs').then((mod) => ({ default: mod.FeatureCTAs })),
  { name: 'FeatureCTAs' }
);
const FeatureHighlights = safeDynamicImport(
  () => import('@/components/home/FeatureHighlights').then((mod) => ({ default: mod.FeatureHighlights })),
  { name: 'FeatureHighlights' }
);
const InteractiveFeatures = safeDynamicImport(
  () => import('@/components/home/InteractiveFeatures').then((mod) => ({ default: mod.InteractiveFeatures })),
  { name: 'InteractiveFeatures' }
);
const ITServiceRequestHero = safeDynamicImport(
  () => import('@/components/home/ITServiceRequestHero').then((mod) => ({ default: mod.ITServiceRequestHero })),
  { name: 'ITServiceRequestHero' }
);
const AllFeaturesSection = safeDynamicImport(
  () => import('@/components/home/AllFeaturesSection').then((mod) => ({ default: mod.AllFeaturesSection })),
  { name: 'AllFeaturesSection' }
);
const ProductVideoSection = safeDynamicImport(
  () => import('@/components/home/ProductVideoSection').then((mod) => ({ default: mod.ProductVideoSection })),
  { name: 'ProductVideoSection' }
);
const EnterpriseTestimonials = safeDynamicImport(
  () => import('@/components/enterprise/EnterpriseTestimonials').then((mod) => ({ default: mod.EnterpriseTestimonials })),
  { name: 'EnterpriseTestimonials' }
);
const FaqSection = safeDynamicImport(
  () => import('@/components/FaqSection').then((mod) => ({ default: mod.FaqSection })),
  { name: 'FaqSection' }
);

export default function Home() {
  const { t } = useTranslation();
  const { user } = useAuth();
  const firstName =
    user?.displayName?.split(' ')[0] || user?.name?.split(' ')[0];
  return (
    <main className="min-h-screen bg-background">
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
    </main>
  );
}
