import React from 'react';
import { Header } from "@/components/Header";
import { SEO } from "@/components/SEO";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-zion-blue text-white">
      <SEO 
        title={t("home.seo_title")} 
        description={t("home.seo_description")} 
        keywords={t("home.seo_keywords")}
        canonical="https://app.ziontechgroup.com/"
      />
      <Header />
      
      {/* Simple Hero Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
            Zion Tech Marketplace
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            The world's first free marketplace dedicated to high-tech and artificial intelligence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-zion-cyan text-white px-8 py-3 rounded-lg font-semibold hover:bg-zion-cyan/80 transition-colors">
              Get Started
            </button>
            <button className="border border-zion-cyan text-zion-cyan px-8 py-3 rounded-lg font-semibold hover:bg-zion-cyan/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Simple Features Section */}
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
            Why Choose Zion?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-zion-blue-dark rounded-lg">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2">Fast & Reliable</h3>
              <p className="text-zion-slate-light">Quick access to cutting-edge technology solutions</p>
            </div>
            <div className="text-center p-6 bg-zion-blue-dark rounded-lg">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-2">Secure</h3>
              <p className="text-zion-slate-light">Enterprise-grade security for your business</p>
            </div>
            <div className="text-center p-6 bg-zion-blue-dark rounded-lg">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold mb-2">Innovative</h3>
              <p className="text-zion-slate-light">Latest AI and technology innovations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Status Section */}
      <section className="py-16 bg-zion-blue-dark text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-white">
            ✅ App is Working!
          </h2>
          <p className="text-xl text-zion-slate-light mb-8">
            The Zion Tech Marketplace is now loading successfully with basic functionality.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button 
              onClick={() => window.location.href = '/marketplace'}
              className="bg-zion-cyan text-white px-6 py-3 rounded-lg font-semibold hover:bg-zion-cyan/80 transition-colors"
            >
              Browse Marketplace
            </button>
            <button 
              onClick={() => window.location.href = '/talent'}
              className="border border-zion-cyan text-zion-cyan px-6 py-3 rounded-lg font-semibold hover:bg-zion-cyan/10 transition-colors"
            >
              Find Talent
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
