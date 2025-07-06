import React from 'react';
import { useTranslation } from 'react-i18next';
import { SEO } from '@/components/SEO';
import { Header } from '@/components/Header';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title={t('home.meta.title', 'Welcome to Zion')}
        description={t('home.meta.description', 'The world\'s first free marketplace dedicated to high-tech and artificial intelligence')}
        keywords={t('home.meta.keywords', 'AI marketplace, tech services, artificial intelligence')}
      />
      
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            {t('home.hero.title', 'Welcome to Zion')}
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            {t('home.hero.subtitle', 'The Future of Tech & AI Marketplace')}
          </p>
          <div className="space-y-4">
            <p>This is a test page with the new modern Header component added back.</p>
            <p>If you see this page without errors, the Header component is working fine.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
