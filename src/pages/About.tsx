
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Users, Globe, Target, Award, Zap, Shield } from 'lucide-react';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Zion Tech Group - Leading AI & Tech Marketplace</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to create the first free marketplace dedicated to high-tech and artificial intelligence. Discover our story, values, and commitment to innovation." />
        <meta name="keywords" content="about Zion, AI marketplace, tech platform, mission, vision, team, innovation, technology" />
        <link rel="canonical" href="https://ziontechgroup.com/about" />
        
        {/* Open Graph */}
        <meta property="og:title" content="About Zion Tech Group - Leading AI & Tech Marketplace" />
        <meta property="og:description" content="Learn about Zion Tech Group's mission to create the first free marketplace dedicated to high-tech and artificial intelligence." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/about" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Zion Tech Group" />
        <meta name="twitter:description" content="Leading AI & Tech Marketplace" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Zion</span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
              The world's first free marketplace dedicated to high-tech and artificial intelligence, 
              connecting businesses with top-tier tech talent and cutting-edge solutions.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-lg text-zion-slate-light mb-6">
                  To democratize access to cutting-edge technology by creating a free, 
                  open marketplace where innovation meets opportunity. We believe that 
                  the best tech solutions should be accessible to everyone, regardless of size or budget.
                </p>
                <p className="text-lg text-zion-slate-light">
                  By connecting businesses with world-class AI and tech professionals, 
                  we're accelerating digital transformation across industries and 
                  building the future of work.
                </p>
              </div>
              <div className="bg-zion-blue-light/20 rounded-2xl p-8 border border-zion-purple/30">
                <Target className="w-16 h-16 text-zion-cyan mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Vision 2030</h3>
                <p className="text-zion-slate-light">
                  To become the global standard for AI and tech talent acquisition, 
                  fostering innovation ecosystems that drive human progress and 
                  technological advancement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 text-center">
                <Zap className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Innovation First</h3>
                <p className="text-zion-slate-light">
                  We embrace cutting-edge technologies and creative solutions that push boundaries.
                </p>
              </div>
              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 text-center">
                <Shield className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Trust & Quality</h3>
                <p className="text-zion-slate-light">
                  We maintain the highest standards of quality and build trust through transparency.
                </p>
              </div>
              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 text-center">
                <Globe className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Global Impact</h3>
                <p className="text-zion-slate-light">
                  We're committed to creating positive change on a global scale through technology.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">What We Do</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30">
                <Users className="w-12 h-12 text-zion-cyan mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Talent Marketplace</h3>
                <p className="text-zion-slate-light">
                  Connect businesses with verified AI engineers, developers, and tech professionals.
                </p>
              </div>
              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30">
                <Award className="w-12 h-12 text-zion-cyan mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Service Solutions</h3>
                <p className="text-zion-slate-light">
                  Access to cutting-edge AI services, software development, and tech consulting.
                </p>
              </div>
              <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30">
                <Globe className="w-12 h-12 text-zion-cyan mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Global Network</h3>
                <p className="text-zion-slate-light">
                  Build connections across borders with our international community of tech experts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <div className="bg-zion-blue-light/20 rounded-2xl p-12 border border-zion-purple/30 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Join the Future?
              </h2>
              <p className="text-lg text-zion-slate-light mb-8">
                Whether you're looking for talent or offering your services, 
                Zion is the platform where innovation thrives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/talent"
                  className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark font-bold py-3 px-8 rounded-lg transition-colors"
                >
                  Find Talent
                </Link>
                <Link
                  to="/signup"
                  className="bg-transparent hover:bg-zion-purple/20 text-zion-cyan border-2 border-zion-cyan font-bold py-3 px-8 rounded-lg transition-colors"
                >
                  Join as Talent
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
