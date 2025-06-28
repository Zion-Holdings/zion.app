import React from 'react';
import { useTranslation } from 'react-i18next';
import dynamic from 'next/dynamic';
import { useAuth } from '@/hooks/useAuth';
import { NextSeo } from '@/components/NextSeo';

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
