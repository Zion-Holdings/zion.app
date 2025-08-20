import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import { ArrowRight, Play, Star, Zap, Users } from 'lucide-react';

export default function HomePage() {
  const heroStats = [
    { value: '227+', label: 'Intelligent Automations', color: 'text-cyan-400' },
    { value: '2960+', label: 'Dynamic Pages', color: 'text-fuchsia-400' },
    { value: '12', label: 'Core Components', color: 'text-blue-400' },
    { value: '100%', label: 'Autonomous', color: 'text-green-400' },
  ];

  return (
    <>
      <Head>
        <title>Zion Tech Group — World&apos;s Most Advanced Autonomous Innovation Hub & AI-Powered Cloud Platform</title>
        <meta name="description" content="Experience the future of autonomous technology with 227+ intelligent automations, AI-powered cloud systems, comprehensive redundancy infrastructure, and zero-downtime operations. The most advanced autonomous platform ever built." />
        <meta property="og:title" content="Zion Tech Group — World's Most Advanced Autonomous Innovation Hub & AI-Powered Cloud Platform" />
        <meta property="og:description" content="Experience the future of autonomous technology with 227+ intelligent automations, AI-powered cloud systems, comprehensive redundancy infrastructure, and zero-downtime operations." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-black">
        {/* Hero Section */}
        <Hero
          title="Autonomous Innovation Hub"
          subtitle="Experience the future of autonomous technology with 227+ intelligent automations, AI-powered cloud systems, and comprehensive redundancy infrastructure."
          primaryAction={{
            text: "Get Started",
            href: "/contact"
          }}
          secondaryAction={{
            text: "Watch Demo",
            href: "/demo"
          }}
          stats={heroStats}
        />

        {/* Features Section */}
        <Features />

        {/* Technology Stack Section */}
        <section className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-5" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                <span>Technology Stack</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Built with Modern{' '}
                <span className="gradient-text">Technologies</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Our platform leverages cutting-edge technologies to deliver unmatched performance and reliability.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {[
                { name: 'Next.js', category: 'Framework', icon: '⚡' },
                { name: 'React', category: 'Library', icon: '⚛️' },
                { name: 'TypeScript', category: 'Language', icon: '📘' },
                { name: 'Tailwind CSS', category: 'Styling', icon: '🎨' },
                { name: 'Node.js', category: 'Runtime', icon: '🟢' },
                { name: 'PostgreSQL', category: 'Database', icon: '🐘' },
                { name: 'Redis', category: 'Cache', icon: '🔴' },
                { name: 'Docker', category: 'Containerization', icon: '🐳' },
                { name: 'Kubernetes', category: 'Orchestration', icon: '☸️' },
                { name: 'AWS', category: 'Cloud', icon: '☁️' },
                { name: 'Terraform', category: 'Infrastructure', icon: '🏗️' },
                { name: 'Prometheus', category: 'Monitoring', icon: '📊' },
              ].map((tech, index) => (
                <div
                  key={tech.name}
                  className="group text-center p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <h3 className="text-white font-semibold mb-2">{tech.name}</h3>
                  <p className="text-gray-400 text-sm">{tech.category}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-5" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6">
                <Users className="w-4 h-4" />
                <span>Customer Success</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Trusted by Industry{' '}
                <span className="gradient-text">Leaders</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                See how companies are transforming their operations with our autonomous platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "Zion Tech Group has revolutionized our automation infrastructure. The AI-powered systems are truly game-changing.",
                  author: "Sarah Chen",
                  role: "CTO, TechCorp",
                  company: "TechCorp Industries"
                },
                {
                  quote: "The autonomous systems have reduced our operational costs by 60% while improving reliability tenfold.",
                  author: "Michael Rodriguez",
                  role: "VP Engineering",
                  company: "InnovateLab"
                },
                {
                  quote: "We&apos;ve never seen this level of intelligent automation. It&apos;s like having a team of experts working 24/7.",
                  author: "Dr. Emily Watson",
                  role: "Head of R&D",
                  company: "FutureTech Solutions"
                }
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-300 mb-6 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.author}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}</div>
                      <div className="text-blue-400 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-blue-600/10 to-purple-600/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-5" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-3xl p-12 backdrop-blur-xl">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Join thousands of companies already using our autonomous platform to scale their operations and achieve unprecedented efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-1"
                >
                  <span>Start Your Journey</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/demo"
                  className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-white/20 text-white hover:bg-white hover:text-black font-semibold rounded-xl transition-all duration-300"
                >
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
