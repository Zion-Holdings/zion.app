import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur-md text-foreground shadow-sm">
        <div className="container flex h-16 items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-6">
            <a href="/" className="flex items-center">
              <span className="text-xl font-bold">Zion</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">Welcome</span>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            {t('home.hero.title', 'Welcome to Zion')}
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            {t('home.hero.subtitle', 'The Future of Tech & AI Marketplace')}
          </p>
          <div className="space-y-4">
            <p>This is a test page with useTranslation added back.</p>
            <p>If you see this page without errors, useTranslation is working fine.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
