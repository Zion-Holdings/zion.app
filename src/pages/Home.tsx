
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Globe, Target, Award } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Zion Tech Group - World's First Free AI & Tech Marketplace</title>
        <meta name="description" content="Zion Tech Group is the world's first free marketplace dedicated to high-tech and artificial intelligence, connecting businesses with top-tier tech talent and cutting-edge solutions." />
        <meta name="keywords" content="AI marketplace, tech platform, artificial intelligence, tech talent, IT services, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Welcome to <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Zion</span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed mb-8">
              The world's first free marketplace dedicated to high-tech and artificial intelligence,
              connecting businesses with top-tier tech talent and cutting-edge solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/ai-solutions" 
                className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center group"
              >
                Explore AI Solutions <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/it-services" 
                className="bg-transparent border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                IT Services
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Why Choose Zion?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-zion-cyan/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Global Network</h3>
                <p className="text-zion-slate-light">
                  Connect with top tech talent and innovative solutions from around the world.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-zion-cyan/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Free Platform</h3>
                <p className="text-zion-slate-light">
                  No hidden fees or commissions. Our marketplace is completely free to use.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-zion-cyan/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">AI-Powered</h3>
                <p className="text-zion-slate-light">
                  Advanced AI algorithms help you find the perfect match for your needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Join thousands of businesses and tech professionals who are already using Zion to grow and innovate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/about" 
                className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Learn More
              </Link>
              <Link 
                to="/developers" 
                className="bg-transparent border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Developer Portal
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
