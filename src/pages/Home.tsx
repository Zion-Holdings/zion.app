
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from "@/hooks/useAuth";
import { CategoriesSection } from "@/components/CategoriesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection";
import { NextSeo } from "@/components/NextSeo";
import { HeroSection } from "@/components/HeroSection";
import { QuickAccess } from "@/components/home/QuickAccess";
import { FeatureCTAs } from "@/components/home/FeatureCTAs";
import { FeatureHighlights } from "@/components/home/FeatureHighlights";
import { InteractiveFeatures } from "@/components/home/InteractiveFeatures";
import { ITServiceRequestHero } from "@/components/home/ITServiceRequestHero";

export default function Home() {
  const { t } = useTranslation();
  const { user } = useAuth();
  const firstName =
    user?.displayName?.split(' ')[0] || user?.name?.split(' ')[0];
  return (
    <div className="min-h-screen bg-background">
      <NextSeo
        title="Zion - The Tech & AI Marketplace"
        description="Discover top AI and tech talent, services, and equipment in one place."
        openGraph={{ images: [{ url: 'https://app.ziontechgroup.com/og.png' }] }}
      />

      {user && (
        <div
          className="bg-primary/10 text-primary text-center p-2"
          data-testid="home-greeting"
        >
          {t('greeting', { name: firstName })}
        </div>
      )}

      <ITServiceRequestHero />

      <HeroSection />
      
      <div className="animate-fadeIn" style={{ animationDelay: '0.1s' }}>
        <QuickAccess />
      </div>

      <div className="animate-fadeIn" style={{ animationDelay: '0.2s' }}>
        <FeatureCTAs />
      </div>

      <div className="animate-fadeIn" style={{ animationDelay: '0.25s' }}>
        <InteractiveFeatures />
      </div>

      <FeatureHighlights className="animate-fadeIn" style={{ animationDelay: '0.3s' }} />

      <div className="animate-fadeIn" style={{ animationDelay: '0.4s' }}>
        <CategoriesSection />
      </div>
      <div className="animate-fadeIn" style={{ animationDelay: '0.5s' }}>
        <BenefitsSection />
      </div>
      <div className="animate-fadeIn" style={{ animationDelay: '0.6s' }}>
        <HowItWorksSection />
      </div>
      <div className="animate-fadeIn" style={{ animationDelay: '0.7s' }}>
        <FeaturedListingsSection />
      </div>
      <NewsletterSection className="animate-fadeIn" style={{ animationDelay: '0.8s' }} />
    </div>
  );
}
