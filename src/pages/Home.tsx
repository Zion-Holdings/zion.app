import React from 'react';
import { useTranslation } from "react-i18next";
import SEO from '@/components/SEO';
import { Header } from '@/components/Header';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title={t('home.meta.title')}
        description={t('home.meta.description')}
        keywords={t('home.meta.keywords')}
      />
      
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            {t('home.hero.title')}
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            {t('home.hero.subtitle')}
          </p>
          <div className="space-y-4">
            <p className="text-lg">
              {t('home.hero.description')}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
