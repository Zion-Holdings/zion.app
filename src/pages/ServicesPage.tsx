import React from 'react';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Tech Services - Zion Tech Group"
        description="Browse our comprehensive range of technology services and solutions."
        canonical="https://ziontechgroup.com/services"
      />
      <Header />
      <main className="min-h-screen bg-zion-blue">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <GradientHeading>Tech Services</GradientHeading>
            <p className="text-xl text-zion-slate-light mt-6 max-w-3xl mx-auto">
              Comprehensive technology services to help your business grow and succeed in the digital age.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-zion-blue-light rounded-lg p-8 border border-zion-blue-lighter">
              <h2 className="text-2xl font-bold text-white mb-6">Coming Soon</h2>
              <p className="text-zion-slate-light mb-6">
                Our services marketplace is currently under development. Soon you'll be able to browse, compare, and book professional tech services from verified providers.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💻</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Web Development</h3>
                  <p className="text-zion-slate-light text-sm">
                    Custom websites, web apps, and e-commerce solutions
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📱</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Mobile Apps</h3>
                  <p className="text-zion-slate-light text-sm">
                    iOS, Android, and cross-platform mobile applications
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-zion-cyan-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">☁️</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Cloud Services</h3>
                  <p className="text-zion-slate-light text-sm">
                    AWS, Azure, and Google Cloud solutions
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-zion-purple-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Cybersecurity</h3>
                  <p className="text-zion-slate-light text-sm">
                    Security audits, penetration testing, and compliance
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