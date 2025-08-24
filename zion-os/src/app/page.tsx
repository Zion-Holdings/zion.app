'use client';

import { useState, useEffect } from 'react';
import Button from '@/components/Button';
import InteractiveCard, { TestimonialCard } from '@/components/InteractiveCard';

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      title: 'AI Autonomous Systems',
      description: 'Revolutionary AI agents that operate independently, making decisions and executing complex tasks without human intervention.',
      icon: '🤖',
      href: '/ai-autonomous-systems',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Quantum Neural Networks',
      description: 'Next-generation quantum computing platforms that leverage quantum mechanics for unprecedented AI processing power.',
      icon: '⚛️',
      href: '/quantum-neural-network-platform',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Enterprise Security',
      description: 'AI-powered security solutions that protect your business with intelligent threat detection and response.',
      icon: '🔒',
      href: '/ai-powered-enterprise-security',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Business Intelligence',
      description: 'Advanced analytics and insights powered by AI to drive data-driven decision making.',
      icon: '📊',
      href: '/ai-business-intelligence',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Content Generation',
      description: 'AI-powered content creation tools that generate high-quality, engaging content at scale.',
      icon: '✍️',
      href: '/ai-content-generator',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Research Automation',
      description: 'Autonomous research assistants that accelerate discovery and innovation across all domains.',
      icon: '🔬',
      href: '/ai-autonomous-research-assistant',
      color: 'from-teal-500 to-blue-500'
    }
  ];

  const stats = [
    { number: '500+', label: 'AI Models Deployed', icon: '🚀' },
    { number: '50+', label: 'Enterprise Clients', icon: '🏢' },
    { number: '99.9%', label: 'Uptime Guarantee', icon: '⚡' },
    { number: '24/7', label: 'AI Support', icon: '🤝' }
  ];

  const testimonials = [
    {
      quote: "Zion Tech Group's AI solutions have transformed our business operations completely. The autonomous systems are game-changing.",
      author: "Sarah Chen",
      position: "CTO, TechCorp",
      company: "TechCorp Industries"
    },
    {
      quote: "The quantum neural network platform exceeded our expectations. Processing speeds are incredible.",
      author: "Dr. Michael Rodriguez",
      position: "Head of Research",
      company: "Quantum Labs"
    },
    {
      quote: "Enterprise security has never been more robust. The AI threat detection is proactive and intelligent.",
      author: "Lisa Thompson",
      position: "Security Director",
      company: "Global Finance Corp"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-purple-500/20 to-blue-500/20"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center z-10">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="gradient-text text-shadow">
                The Future of AI
              </span>
              <br />
              <span className="text-white text-shadow">is Here</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
              Zion Tech Group leads the revolution in AI-powered technology solutions. 
              Transform your business with autonomous systems, quantum computing, and cutting-edge innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                href="/contact"
                size="xl"
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                }
                iconPosition="right"
              >
                Get Started Today
              </Button>
              <Button
                href="/services"
                variant="outline"
                size="xl"
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                }
                iconPosition="right"
              >
                Explore Services
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center group transition-all duration-500"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-5xl md:text-6xl font-bold gradient-text mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 text-shadow">
              Revolutionary AI Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover our cutting-edge AI platforms that are transforming industries and reshaping the future of technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <InteractiveCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                href={feature.href}
                color={feature.color}
                className="animate-fade-in"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-shadow">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real feedback from industry leaders who have transformed their businesses with our AI solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                position={testimonial.position}
                company={testimonial.company}
                className="animate-fade-in"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-blue-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 text-shadow">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Join the AI revolution and stay ahead of the competition with Zion Tech Group's cutting-edge solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              href="/contact"
              size="xl"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              }
              iconPosition="right"
            >
              Schedule a Demo
            </Button>
            <Button
              href="/case-studies"
              variant="outline"
              size="xl"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              }
              iconPosition="right"
            >
              View Case Studies
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}