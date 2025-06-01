
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
      
      <QuickAccess className="animate-fadeIn" style={{ animationDelay: '0.1s' }} />
      
      <FeatureCTAs className="animate-fadeIn" style={{ animationDelay: '0.2s' }} />
      
      <FeatureHighlights className="animate-fadeIn" style={{ animationDelay: '0.3s' }} />
      
      <CategoriesSection className="animate-fadeIn" style={{ animationDelay: '0.4s' }} />
      <BenefitsSection className="animate-fadeIn" style={{ animationDelay: '0.5s' }} />
      <HowItWorksSection className="animate-fadeIn" style={{ animationDelay: '0.6s' }} />
      <FeaturedListingsSection className="animate-fadeIn" style={{ animationDelay: '0.7s' }} />
      <NewsletterSection className="animate-fadeIn" style={{ animationDelay: '0.8s' }} />
    </div>
  );
}
