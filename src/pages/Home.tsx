import React from 'react';
import { useTranslation } from 'react-i18next';
// import dynamic from 'next/dynamic'; // Not directly used, createDynamicImport uses it
import { createDynamicImport } from '@/utils/dynamicImports';
import { useAuth } from '@/hooks/useAuth';
import { NextSeo } from '@/components/NextSeo';

const CategoriesSection = createDynamicImport(
  () => import('@/components/CategoriesSection').then((mod) => ({ default: mod.CategoriesSection }))
);
const BenefitsSection = createDynamicImport(
  () => import('@/components/BenefitsSection').then((mod) => ({ default: mod.BenefitsSection }))
);
const HowItWorksSection = createDynamicImport(
  () => import('@/components/HowItWorksSection').then((mod) => ({ default: mod.HowItWorksSection }))
);
const NewsletterSection = createDynamicImport(
  () => import('@/components/NewsletterSection').then((mod) => ({ default: mod.NewsletterSection }))
);
const FeaturedListingsSection = createDynamicImport(
  () => import('@/components/FeaturedListingsSection').then((mod) => ({ default: mod.FeaturedListingsSection }))
);
const HeroSection = createDynamicImport(
  () => import('@/components/HeroSection').then((mod) => ({ default: mod.HeroSection }))
);
const QuickAccess = createDynamicImport(
  () => import('@/components/home/QuickAccess').then((mod) => ({ default: mod.QuickAccess }))
);
const FeatureCTAs = createDynamicImport(
  () => import('@/components/home/FeatureCTAs').then((mod) => ({ default: mod.FeatureCTAs }))
);
const FeatureHighlights = createDynamicImport(
  () => import('@/components/home/FeatureHighlights').then((mod) => ({ default: mod.FeatureHighlights }))
);
const InteractiveFeatures = createDynamicImport(
  () => import('@/components/home/InteractiveFeatures').then((mod) => ({ default: mod.InteractiveFeatures }))
);
const ITServiceRequestHero = createDynamicImport(
  () => import('@/components/home/ITServiceRequestHero').then((mod) => ({ default: mod.ITServiceRequestHero }))
);
const AllFeaturesSection = createDynamicImport(
  () => import('@/components/home/AllFeaturesSection').then((mod) => ({ default: mod.AllFeaturesSection }))
);
const ProductVideoSection = createDynamicImport(
  () => import('@/components/home/ProductVideoSection').then((mod) => ({ default: mod.ProductVideoSection }))
);
const EnterpriseTestimonials = createDynamicImport(
  () => import('@/components/enterprise/EnterpriseTestimonials').then((mod) => ({ default: mod.EnterpriseTestimonials }))
);
const FaqSection = createDynamicImport(
  () => import('@/components/FaqSection').then((mod) => ({ default: mod.FaqSection }))
);

// Simple fallback components to ensure content renders
const SimpleHero = () => (
  <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
    <div className="container mx-auto px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Zion Tech Marketplace
      </h1>
      <p className="text-xl md:text-2xl mb-8">
        Discover Innovative Tech Solutions
      </p>
      <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
        Get Started
      </button>
    </div>
  </section>
);

const SimpleFeatures = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Why Choose Zion?</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center p-6">
          <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-white text-2xl">🚀</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Fast & Reliable</h3>
          <p className="text-gray-600">Quick access to cutting-edge technology solutions</p>
        </div>
        <div className="text-center p-6">
          <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-white text-2xl">🔒</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Secure</h3>
          <p className="text-gray-600">Enterprise-grade security for your business</p>
        </div>
        <div className="text-center p-6">
          <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-white text-2xl">💡</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Innovative</h3>
          <p className="text-gray-600">Latest AI and technology innovations</p>
        </div>
      </div>
    </div>
  </section>
);

const SimpleCTA = () => (
  <section className="py-16 bg-blue-600 text-white">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
      <p className="text-xl mb-8">Join thousands of businesses using Zion Tech Marketplace</p>
      <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
        Explore Solutions
      </button>
    </div>
  </section>
);

export default function Home() {
  const { t } = useTranslation();
  const { user } = useAuth();
  const firstName = user?.displayName?.split(' ')[0] || user?.name?.split(' ')[0];
  
  // CRITICAL FIX: Add fallback for translation issues
  const safeTranslate = (key: string, defaultValue: string) => {
    try {
      return t(key) || defaultValue;
    } catch (error) {
      console.warn('Translation error:', error);
      return defaultValue;
    }
  };
  
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
        <div className="bg-primary/10 text-primary text-center p-2" data-testid="home-greeting">
          {safeTranslate('general.greeting_user', `Welcome back, ${firstName || 'User'}!`)}
        </div>
      )}

      <SimpleHero />
      <SimpleFeatures />
      <SimpleCTA />
      
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Welcome to Zion Tech Marketplace</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're experiencing some technical difficulties loading our full content. 
            Please check back soon or contact support if you need immediate assistance.
          </p>
          <div className="mt-8">
            <button 
              onClick={() => window.location.reload()}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors mr-4"
            >
              Reload Page
            </button>
            <button 
              onClick={() => window.location.href = '/debug'}
              className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Debug Info
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
