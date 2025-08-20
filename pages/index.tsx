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
    { name: 'Next.js', category: 'Framework', color: 'from-green-500 to-emerald-600' },
    { name: 'React', category: 'Library', color: 'from-blue-500 to-cyan-600' },
    { name: 'TypeScript', category: 'Language', color: 'from-blue-600 to-indigo-600' },
    { name: 'Tailwind CSS', category: 'Styling', color: 'from-cyan-500 to-blue-600' },
    { name: 'Node.js', category: 'Runtime', color: 'from-green-600 to-emerald-700' },
    { name: 'PostgreSQL', category: 'Database', color: 'from-blue-600 to-indigo-700' },
    { name: 'Redis', category: 'Cache', color: 'from-red-500 to-pink-600' },
    { name: 'Docker', category: 'Containerization', color: 'from-blue-500 to-indigo-600' },
    { name: 'Kubernetes', category: 'Orchestration', color: 'from-blue-600 to-indigo-700' },
    { name: 'AWS', category: 'Cloud', color: 'from-orange-500 to-red-600' },
    { name: 'Terraform', category: 'Infrastructure', color: 'from-purple-500 to-indigo-600' },
    { name: 'Prometheus', category: 'Monitoring', color: 'from-red-600 to-orange-600' },
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CTO, TechCorp',
      content: 'Zion Tech has revolutionized our infrastructure. The autonomous systems have reduced our downtime by 99.9%.',
      avatar: '👩‍💼',
    },
    {
      name: 'Marcus Rodriguez',
      role: 'DevOps Lead, InnovateLab',
      content: 'The AI-powered automation has transformed our development workflow. We\'re shipping 10x faster now.',
      avatar: '👨‍💻',
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Research Director, DataFlow',
      content: 'Unprecedented reliability and performance. Zion Tech is the future of cloud infrastructure.',
      avatar: '👩‍🔬',
    },
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
      <section className="py-32 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
        <div className="container-wide relative z-10">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 gradient-text leading-none">
              Built on Modern Tech
            </h2>
            <p className="text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light">
              Our platform leverages the most advanced technologies to deliver unparalleled performance and reliability.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologyStack.map((tech, index) => (
              <Card
                key={index}
                className="text-center group hover:border-cursor-blue/40 hover:shadow-glow-lg"
                style={{ animationDelay: `${(index * 0.05) + 0.2}s` }}
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center text-2xl text-white group-hover:scale-110 transition-transform duration-500`}>
                  {tech.name.charAt(0)}
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">{tech.name}</h3>
                <p className="text-gray-400 text-sm font-light">{tech.category}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
        <div className="container-wide relative z-10">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 gradient-text leading-none">
              Trusted by Leaders
            </h2>
            <p className="text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light">
              See what industry leaders say about our revolutionary platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="text-center group hover:border-cursor-blue/40 hover:shadow-glow-lg"
                style={{ animationDelay: `${(index * 0.2) + 0.4}s` }}
              >
                <div className="text-6xl mb-6">{testimonial.avatar}</div>
                <p className="text-gray-300 mb-6 text-lg font-light leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div>
                  <h4 className="text-white font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm font-light">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        <div className="container-wide relative z-10 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 gradient-text leading-none">
              Ready to Transform?
            </h2>
            <p className="text-xl lg:text-2xl text-gray-400 mb-12 leading-relaxed font-light">
              Join the future of autonomous technology and experience the power of AI-driven innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                href="/contact"
                size="lg"
                className="shadow-glow-lg hover:shadow-glow"
              >
                Start Your Journey
              </Button>
              <Button
                href="/case-studies"
                variant="outline"
                size="lg"
                className="backdrop-blur-sm"
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
