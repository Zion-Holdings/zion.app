import React from 'react';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';

export default function TalentDirectory() {
  return (
    <>
      <SEO
        title="Tech Talent Directory - Zion Tech Group"
        description="Browse our curated directory of top tech talent and professionals."
        canonical="https://ziontechgroup.com/talent"
      />
      <Header />
      <main className="min-h-screen bg-zion-blue">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <GradientHeading>Tech Talent Directory</GradientHeading>
            <p className="text-xl text-zion-slate-light mt-6 max-w-3xl mx-auto">
              Discover exceptional developers, designers, and tech professionals ready to bring your projects to life.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-zion-blue-light rounded-lg p-8 border border-zion-blue-lighter">
              <h2 className="text-2xl font-bold text-white mb-6">Coming Soon</h2>
              <p className="text-zion-slate-light mb-6">
                Our comprehensive talent directory is currently being populated with verified tech professionals. Soon you'll be able to browse profiles, view portfolios, and connect directly with talent.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">👨‍💻</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Developers</h3>
                  <p className="text-zion-slate-light text-sm">
                    Full-stack, frontend, backend, and specialized developers
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Designers</h3>
                  <p className="text-zion-slate-light text-sm">
                    UI/UX designers, graphic designers, and creative professionals
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-zion-cyan-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📱</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Mobile Devs</h3>
                  <p className="text-zion-slate-light text-sm">
                    iOS, Android, and cross-platform mobile developers
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-zion-purple-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">AI/ML Engineers</h3>
                  <p className="text-zion-slate-light text-sm">
                    Machine learning engineers and AI specialists
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}