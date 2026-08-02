import React, { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import SkipLink from './components/SkipLink';
import EnhancedSkipLink from './components/EnhancedSkipLink';
import Header from './components/Header';
import Footer from './components/Footer';
import Analytics from './components/Analytics';
import CtaTracking from './components/CtaTracking';
import BackToTop from './components/BackToTop';
import ReadingProgressBar from './components/ReadingProgressBar';
import StickyMobileCTA from './components/StickyMobileCTA';
import AIChatWidget from './components/AIChatWidget';
import ServiceWorkerRegistration from './components/ServiceWorkerRegistration';
import StickyDonateBanner from './components/StickyDonateBanner';
import ChatWidget from './components/ChatWidget';
import CookieConsentBanner from './components/CookieConsentBanner';
import AiSolutionsArchitectWidget from './components/ai/AiSolutionsArchitectWidget';
import AIExperienceLoader from './components/AIExperienceLoader';
import ErrorTracker from './components/ErrorTracker';
import FieldPerformanceCollector from './components/FieldPerformanceCollector';
import FloatingAgentStatus from './components/FloatingAgentStatus';
import { AutoJsonLd } from './hooks/useAutoJsonLdPage';
import GlobalErrorBoundary from './GlobalErrorBoundary';
import { siteConfig } from './lib/siteConfig';
import './globals.css';

export const siteUrl = 'https://ziontechgroup.com';

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.name, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
  icons: { icon: '/favicon.ico', apple: '/icon.svg' },
  manifest: '/manifest.json',
  viewport: { width: 'device-width', initialScale: 1, maximumScale: 5, userScalable: true },
  formatDetection: { telephone: false, address: false, email: false },
  appleWebApp: { capable: true, title: siteConfig.name },
  alternates: { canonical: '/' },
  openGraph: { type: 'website', locale: 'en_US', url: siteConfig.url, title: siteConfig.name, description: siteConfig.description, siteName: siteConfig.name },
  twitter: { card: 'summary_large_image', title: siteConfig.name, description: siteConfig.description },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#3b82f6' },
    { media: '(prefers-color-scheme: dark)', color: '#0b1221' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      {/* JSON-LD: Organization + aggregate rating + social profiles */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Zion Tech Group',
            url: 'https://ziontechgroup.com',
            email: 'kleber@ziontechgroup.com',
            telephone: '+1 302 464 0950',
            address: '364 E Main St STE 1008, Middletown, DE 19709',
            sameAs: [
              'https://github.com/zion-support',
              'https://www.linkedin.com/company/ziontechgroup',
              'https://x.com/ziontechgroup',
            ],
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.8',
              bestRating: '5',
              worstRating: '1',
              reviewCount: '200',
            },
          }),
        }}
      />
      <AutoJsonLd />
      <html lang="en" dir="ltr">
        <head>
          <link rel="preconnect" href="https://www.googletagmanager.com" />
          <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        </head>
        <body className="antialiased font-sans">
          <Analytics />
          <CtaTracking />
          <div className="flex min-h-screen flex-col bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
            <EnhancedSkipLink />
            <ReadingProgressBar />
            <Header />
            <main className="relative z-10 flex-1" id="main-content" tabIndex={-1} role="main">
              <GlobalErrorBoundary>
                {children}
              </GlobalErrorBoundary>
            </main>
            <Footer />
            <BackToTop />

            <AIChatWidget />
            <AIExperienceLoader />
            <StickyMobileCTA />
            <CookieConsentBanner />
            <ErrorTracker />
            <FieldPerformanceCollector />
            <FloatingAgentStatus />
          </div>
        </body>
      </html>
    </>
  );
}
