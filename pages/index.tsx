import React from 'react';
import Head from 'next/head';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function HomePage() {
  const heroStats = [
    { value: '227+', label: 'Intelligent Automations', color: 'text-cyan-400' },
    { value: '2960+', label: 'Dynamic Pages', color: 'text-fuchsia-400' },
    { value: '12', label: 'Core Components', color: 'text-blue-400' },
    { value: '100%', label: 'Autonomous', color: 'text-green-400' },
  ];

  const platformFeatures = [
    {
      icon: '☁️',
      title: 'Autonomous Cloud Systems',
      description: 'Self-healing CI/CD pipelines, intelligent build orchestration, and zero-downtime deployments.',
      color: 'bg-gradient-to-br from-cyan-500 to-blue-600',
    },
    {
      icon: '🤖',
      title: 'AI-Powered Automation',
      description: '227+ autonomous agents, intelligent content generation, and predictive maintenance.',
      color: 'bg-gradient-to-br from-fuchsia-500 to-purple-600',
    },
    {
      icon: '🔄',
      title: 'Redundancy & Reliability',
      description: 'Multi-layer redundancy systems, intelligent failover, and 99.99% uptime guarantee.',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
    },
    {
      icon: '🚀',
      title: 'Performance Optimization',
      description: 'Real-time monitoring, automated scaling, and intelligent resource management.',
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
    },
    {
      icon: '🔒',
      title: 'Security & Compliance',
      description: 'Advanced threat detection, automated security updates, and compliance monitoring.',
      color: 'bg-gradient-to-br from-indigo-500 to-purple-600',
    },
    {
      icon: '📊',
      title: 'Analytics & Insights',
      description: 'Comprehensive reporting, predictive analytics, and actionable business intelligence.',
      color: 'bg-gradient-to-br from-teal-500 to-cyan-600',
    },
  ];

  const technologyStack = [
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
  ];

  const testimonials = [
    {
      quote: "Zion Tech has revolutionized our development workflow with their autonomous systems.",
      author: "Sarah Chen",
      role: "CTO, TechCorp",
      avatar: "👩‍💼"
    },
    {
      quote: "The AI-powered automation has increased our productivity by 300%.",
      author: "Marcus Rodriguez",
      role: "Lead Developer, InnovateLab",
      avatar: "👨‍💻"
    },
    {
      quote: "Zero-downtime deployments and intelligent monitoring have transformed our operations.",
      author: "Emily Watson",
      role: "DevOps Engineer, CloudScale",
      avatar: "👩‍🔧"
    }
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

      {/* Hero Section */}
      <Hero
        title="Zion Tech Group"
        subtitle="The world&apos;s most advanced autonomous innovation hub delivering cutting-edge technology solutions, intelligent automation systems, and the future of cloud-native AI infrastructure."
        primaryAction={{
          text: "Get Started",
          href: "/contact"
        }}
        secondaryAction={{
          text: "Learn More",
          href: "/about"
        }}
        stats={heroStats}
      />

      {/* Platform Capabilities */}
      <Features
        title="Revolutionary Platform Capabilities"
        subtitle="Discover the cutting-edge technologies and intelligent systems that power the future of autonomous innovation."
        features={platformFeatures}
        columns={3}
      />

      {/* Technology Stack */}
      <section className="section-padding relative bg-gradient-to-b from-cursor-dark to-cursor-darker overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,122,204,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,212,170,0.05),transparent_50%)]"></div>
        
        <div className="container-cursor relative z-10">
          <div className="text-center mb-20 animate-fade-in">
            <div className="relative mb-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text leading-tight">
                Built with Modern Technology
              </h2>
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cursor-blue/10 via-cursor-accent/10 to-cursor-blue/10 blur-2xl -z-10 scale-110"></div>
            </div>
            <p className="text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed text-balance">
              Our platform leverages the latest technologies and best practices to deliver exceptional performance and reliability.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologyStack.map((tech, index) => (
              <div
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${(index * 0.05) + 0.2}s` }}
              >
                <Card className="text-center group hover:border-cursor-blue/30 hover:shadow-lg hover:shadow-cursor-blue/10 card-hover">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <h3 className="font-semibold text-white mb-2 text-lg group-hover:text-cursor-blue transition-colors duration-300">{tech.name}</h3>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{tech.category}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding relative bg-gradient-to-r from-cursor-blue/5 to-cursor-accent/5 overflow-hidden">
        <div className="container-cursor relative z-10">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text leading-tight mb-8">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed text-balance">
              See what our clients say about the transformative impact of Zion Tech&apos;s autonomous systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${(index * 0.2) + 0.4}s` }}
              >
                <Card className="text-center group hover:border-cursor-blue/30 hover:shadow-lg hover:shadow-cursor-blue/10 card-hover h-full">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {testimonial.avatar}
                  </div>
                  <blockquote className="text-gray-300 text-lg mb-6 italic leading-relaxed group-hover:text-white transition-colors duration-300">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="border-t border-cursor-lighter/20 pt-4">
                    <div className="font-semibold text-white text-lg">{testimonial.author}</div>
                    <div className="text-cursor-blue text-sm">{testimonial.role}</div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative bg-gradient-to-r from-cursor-blue to-blue-600 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        
        <div className="container-cursor text-center relative z-10">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl lg:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed text-balance">
              Join the future of autonomous technology and experience unprecedented efficiency, reliability, and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="bg-white text-cursor-blue hover:bg-gray-100 shadow-2xl hover:shadow-white/25"
              >
                Start Your Journey
              </Button>
              <Button
                href="/case-studies"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-cursor-blue shadow-2xl hover:shadow-white/25"
              >
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
