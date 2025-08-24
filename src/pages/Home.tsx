
import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { ServiceCard } from '../components/ServiceCard';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <HeroSection />
      
      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to transform your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="AI & Machine Learning"
              description="Advanced AI solutions for automation, data analysis, and intelligent decision-making"
              icon="🤖"
              className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20"
            />
            <ServiceCard
              title="Micro-SaaS Development"
              description="Custom software solutions that scale with your business needs"
              icon="🚀"
              className="bg-gradient-to-br from-purple-500/20 to-pink-500/20"
            />
            <ServiceCard
              title="IT Infrastructure"
              description="Complete IT management, cloud solutions, and 24/7 technical support"
              icon="🖥️"
              className="bg-gradient-to-br from-green-500/20 to-emerald-500/20"
            />
            <ServiceCard
              title="Cybersecurity"
              description="Comprehensive security solutions to protect your digital assets"
              icon="🛡️"
              className="bg-gradient-to-br from-red-500/20 to-orange-500/20"
            />
            <ServiceCard
              title="Cloud Migration"
              description="Seamless cloud transformation and optimization services"
              icon="☁️"
              className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20"
            />
            <ServiceCard
              title="Digital Transformation"
              description="End-to-end digital strategy and implementation"
              icon="💡"
              className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
