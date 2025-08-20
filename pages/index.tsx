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
    { value: '100%', label: 'Autonomous', color: 'text-emerald-400' },
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
      color: 'bg-gradient-to-br from-emerald-500 to-green-600',
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
    { name: 'Next.js', category: 'Framework', color: 'from-gray-500 to-gray-700' },
    { name: 'React', category: 'Library', color: 'from-blue-500 to-blue-700' },
    { name: 'TypeScript', category: 'Language', color: 'from-blue-600 to-blue-800' },
    { name: 'Tailwind CSS', category: 'Styling', color: 'from-cyan-500 to-cyan-700' },
    { name: 'Node.js', category: 'Runtime', color: 'from-green-500 to-green-700' },
    { name: 'PostgreSQL', category: 'Database', color: 'from-blue-400 to-blue-600' },
    { name: 'Redis', category: 'Cache', color: 'from-red-500 to-red-700' },
    { name: 'Docker', category: 'Containerization', color: 'from-blue-500 to-blue-700' },
    { name: 'Kubernetes', category: 'Orchestration', color: 'from-blue-600 to-blue-800' },
    { name: 'AWS', category: 'Cloud', color: 'from-orange-500 to-orange-700' },
    { name: 'Terraform', category: 'Infrastructure', color: 'from-purple-500 to-purple-700' },
    { name: 'Prometheus', category: 'Monitoring', color: 'from-red-600 to-red-800' },
  ];

  const testimonials = [
    {
      quote: "Zion Tech has revolutionized our development workflow. The autonomous systems are game-changing.",
      author: "Sarah Chen",
      role: "CTO, TechFlow Inc.",
      avatar: "SC"
    },
    {
      quote: "The level of automation and reliability we've achieved is unprecedented. Highly recommended!",
      author: "Marcus Rodriguez",
      role: "VP Engineering, DataSync",
      avatar: "MR"
    },
    {
      quote: "Outstanding performance and zero downtime. This is the future of cloud infrastructure.",
      author: "Emily Watson",
      role: "DevOps Lead, CloudScale",
      avatar: "EW"
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
      <section className="py-24 bg-gradient-to-b from-cursor-dark to-cursor-darker relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,122,204,0.05),transparent_70%)]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 gradient-text leading-tight">
              Built with Modern Technology
            </h2>
            <p className="text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light">
              Our platform leverages the latest technologies and best practices to deliver exceptional performance and reliability.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologyStack.map((tech, index) => (
              <div
                key={tech.name}
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300`}>
                  {tech.name.charAt(0)}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                <p className="text-sm text-gray-400 font-light">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-b from-cursor-darker to-cursor-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,122,204,0.03),transparent_50%)]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 gradient-text leading-tight">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light">
              See what our clients say about the transformative impact of Zion Tech solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="text-center group hover:border-cursor-blue/40 hover:shadow-2xl hover:shadow-cursor-blue/20"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-cursor-blue to-blue-600 flex items-center justify-center text-white font-bold text-xl">
                  {testimonial.avatar}
                </div>
                <blockquote className="text-gray-300 text-lg leading-relaxed mb-6 font-light italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-sm text-gray-400 font-light">{testimonial.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-cursor-blue to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.1),transparent_50%)]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl lg:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Join the future of autonomous technology and experience unprecedented efficiency, reliability, and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                href="/contact"
                size="lg"
                className="bg-white text-cursor-blue hover:bg-gray-100 hover:shadow-2xl"
              >
                Get Started Today
              </Button>
              <Button
                href="/case-studies"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-cursor-blue"
              >
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
